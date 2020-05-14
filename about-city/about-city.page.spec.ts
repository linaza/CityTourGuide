import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutCityPage } from './about-city.page';

describe('AboutCityPage', () => {
  let component: AboutCityPage;
  let fixture: ComponentFixture<AboutCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
