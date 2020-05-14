import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreeToursPage } from './free-tours.page';

describe('FreeToursPage', () => {
  let component: FreeToursPage;
  let fixture: ComponentFixture<FreeToursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeToursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreeToursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
