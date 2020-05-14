import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuideHomePage } from './guide-home.page';

describe('GuideHomePage', () => {
  let component: GuideHomePage;
  let fixture: ComponentFixture<GuideHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuideHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
