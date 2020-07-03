import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as L from 'leaflet';
require('leaflet-routing-machine');
import { cordova } from '@ionic-native/core';


@Component({
    selector: 'app-maps',
    templateUrl: './maps.page.html',
    styleUrls: ['./maps.page.scss'],
})

export class MapsPage {
    map: L.Map<any, any>;
    x: number;
    y: number;
    target_pos: string = "city of david";
    propertyList = [];
    attractionsList = [];
    attractionRoutePts = [];
    markers = [];
    targelocation: any;
    lsdata = [];
    isOnline = window.navigator.onLine;
    constructor(private geolocation: Geolocation) {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.x = resp.coords.latitude;
            this.y = resp.coords.longitude;

            this.x = 31.7761183;
            this.y = 35.2281164;
            localStorage.clear()
            localStorage.setItem("my_x", String(this.x));
            localStorage.setItem("my_y", String(this.y));
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    ionViewDidEnter() {
        this.loadMap();
        this.loadLocalDB();
    }
    loadLocalDB() {
        // Get localstorage data
        if (localStorage.getItem("routing") === null) {
            localStorage.setItem("routing", "[]");
            this.lsdata = [];
        } else {
            this.lsdata = JSON.parse(localStorage.getItem("routing"));
        }
        console.log(this.lsdata);
    }
    loadMap() {
        this.markers = [];

        // To remove part
        if (!this.isOnline) {
            if (localStorage.getItem("my_x") === null) {
                this.x = 31.7765183;
                this.y = 35.2288164;
            } else {
                this.x = Number(localStorage.getItem("my_x"));
                this.y = Number(localStorage.getItem("my_y"));
            }
        }

        console.log(this.isOnline);
        this.map = new L.Map('mapId').setView([this.x, this.y], 16);
        if (this.isOnline) {
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
        }
        else {
            L.tileLayer('./assets/tiles/{z}_{x}_{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap Offline</a> contributors'
            }).addTo(this.map);
        }



        let marker1 = L.marker([this.x, this.y]).addTo(this.map)
            .bindPopup('<strong>my location</strong>', {
                closeOnClick: false,
                autoClose: false
            })
            .openPopup();

        this.markers.push(marker1);
        fetch('./assets/data.json').then(res => res.json())
            .then(json => {
                this.propertyList = json.properties;
                this.leafletMap();
            });
        fetch('./assets/input/attractions.json').then(res => res.json())
            .then(json => {
                this.attractionsList = json.properties;
            });
    }
    leafletMap() {
        var myIcon = L.icon({
            iconUrl: "./assets/icon/attractions.png",
            iconSize: [30, 35],
            iconAnchor: [30, 35],
            popupAnchor: [-3, -76]
        });
        for (const property of this.propertyList) {
            L.marker([property.lat, property.long]).addTo(this.map)
                .bindPopup(property.city);
        }

        // for (const att of this.attractionsList) {
        //     L.marker([att.lat, att.long], { icon: myIcon }).addTo(this.map)
        //         .bindPopup(att.city);
        // }

        this.map.setView([this.x, this.y], 16);
    }
    ionViewWillLeave() {
        this.map.remove();
    }
    navigation() {

        if (this.markers.length == 2) {
            this.markers.pop();
            this.map.remove();
            this.loadMap();
        }

        for (let i = 0; i < this.propertyList.length; i++) {
            let city = String(this.propertyList[i]["city"]).toUpperCase().replace(" ", "");
            if (city == this.target_pos.toUpperCase().replace(" ", "")) {
                this.targelocation = this.propertyList[i];
                let marker1 = L.marker([this.targelocation.lat, this.targelocation.long]).addTo(this.map)
                    .bindPopup("<strong>" + this.targelocation.city + "</strong>")
                    .openPopup();
                this.markers.push(marker1);
                this.map.setView([Number((this.x - (this.x - this.targelocation.lat) / 2).toFixed(7)), Number((this.y - (this.y - this.targelocation.long) / 2).toFixed(7))], 16);
                this.updateRouting();
                this.target_pos = "";
            }
        }
        let anndoc = document.getElementsByClassName("leaflet-top leaflet-right");
        if (anndoc.length) {
            anndoc[0].remove();
        }
    }

    updateRouting() {
        if (this.isOnline) {
            var that = this;
            var dest = that.targelocation.city;
            const routing = L.Routing.control({
                waypoints: [
                    this.markers[0]["_latlng"],
                    this.markers[1]["_latlng"],
                ],
                routeWhileDragging: false,
                showAlternatives: true,
                autoRoute: true,
                lineOptions: {
                    styles: [
                        // { color: 'black', opacity: 0.15, weight: 9 },
                        // { color: 'white', opacity: 0.8, weight: 6 },
                        // { color: 'red', opacity: 0.5, weight: 3 },
                        { opacity: 0.5, weight: 5 }
                    ]
                },
                altLineOptions: {
                    styles: [
                        // { color: 'black', opacity: 0.15, weight: 9 },
                        // { color: 'white', opacity: 0.8, weight: 6 },
                        // { color: 'blue', opacity: 0.5, weight: 3 },
                        { opacity: 0.5, weight: 5 }
                    ]
                },
                draggableWaypoints: false,
            }).on('routeselected', function (e) {
                // Check attractions for every routes
                var att_arr = [];
                var i = 0;
                var j = 0;
                var col_arr = ['red', 'blue', 'green'];
                for (const rt of e.target._routes) {
                    att_arr.push(0);
                    for (const att of that.attractionsList) {
                        L.circle([att['lat'], att['long']], { radius: 30, color: col_arr[2], fillColor: col_arr[2], fillOpacity: 0.3 }).addTo(that.map);
                        for (const r of rt.coordinates) {
                            if (Math.abs(r['lat'] - att['lat']) < 0.0005 && Math.abs(r['lng'] - att['long']) < 0.0005) {
                                att_arr[i] += 1;
                                L.circle([att['lat'], att['long']], { radius: 30, color: col_arr[i], fillColor: col_arr[i], fillOpacity: 0.7 }).addTo(that.map);
                                break;
                            }
                        }
                        j++;
                    }
                    i++;
                }
                console.log(att_arr);

                var sorted = [...att_arr].sort((a, b) => b - a);
                var attractsRouteIndex = att_arr.indexOf(sorted[0]);
                var selectedRoute = e.target._routes[attractsRouteIndex];
                // Draw the selected route
                selectedRoute.coordinates.unshift({ lat: that.x, lng: that.y });
                selectedRoute.coordinates.push({ lat: that.targelocation.lat, lng: that.targelocation.long });
                L.polyline(selectedRoute.coordinates,
                    { color: 'red', opacity: 1, weight: 6 }
                ).addTo(that.map);

                // Searched route data
                var data = {};
                data["dest"] = dest;
                data["route"] = selectedRoute.coordinates;

                // cache route data into JSON local db
                console.log(that.targelocation.city);
                var curdata = JSON.parse(localStorage.getItem("routing"));
                var found = curdata.find(function (item, i) {
                    if (item.dest === that.targelocation.city) {
                        return i;
                    }
                });
                console.log(found);
                if (found === undefined) {
                    curdata.push(data);
                    that.lsdata = curdata;
                    localStorage.setItem("routing", JSON.stringify(curdata));
                }
                console.log(that.lsdata);
            });
            routing.addTo(this.map);
        }
        else {
            console.log("Offline")
            var col_arr = ['red', 'blue', 'green'];
            var found = false;
            for (var i = 0; i < this.lsdata.length; i++) {
                if (this.lsdata[i]["dest"] === this.targelocation["city"]) {
                    var rt = this.lsdata[i];
                    for (const att of this.attractionsList) {
                        L.circle([att['lat'], att['long']], { radius: 30, color: col_arr[2], fillColor: col_arr[2], fillOpacity: 0.3 }).addTo(this.map);
                    }
                    // Draw the selected route
                    rt.route.unshift({ lat: this.x, lng: this.y });
                    rt.route.push({ lat: this.targelocation.lat, lng: this.targelocation.long });
                    L.polyline(rt.route,
                        { color: 'red', opacity: 1, weight: 6 }
                    ).addTo(this.map);
                    found = true;
                    break;
                }
            }
            if (!found) {
                alert("Sorry, There is no saved route data, \n Please connect to Internet!");
            }
        }

    }
}