import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaInfoComponent } from './receita-info.component';

describe('ReceitaInfoComponent', () => {
  let component: ReceitaInfoComponent;
  let fixture: ComponentFixture<ReceitaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
