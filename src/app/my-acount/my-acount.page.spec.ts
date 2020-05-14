import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAcountPage } from './my-acount.page';

describe('MyAcountPage', () => {
  let component: MyAcountPage;
  let fixture: ComponentFixture<MyAcountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAcountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAcountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
