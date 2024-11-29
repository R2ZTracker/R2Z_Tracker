import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlobalcasesPage } from './globalcases.page';

describe('GlobalcasesPage', () => {
  let component: GlobalcasesPage;
  let fixture: ComponentFixture<GlobalcasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalcasesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalcasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
