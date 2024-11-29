import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchcasesPage } from './searchcases.page';

describe('SearchcasesPage', () => {
  let component: SearchcasesPage;
  let fixture: ComponentFixture<SearchcasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchcasesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchcasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
