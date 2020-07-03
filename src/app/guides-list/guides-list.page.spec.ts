import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuidesListPage } from './guides-list.page';

describe('GuidesListPage', () => {
  let component: GuidesListPage;
  let fixture: ComponentFixture<GuidesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuidesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
