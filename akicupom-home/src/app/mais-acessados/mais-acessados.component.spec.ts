import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisAcessadosComponent } from './mais-acessados.component';

describe('MaisAcessadosComponent', () => {
  let component: MaisAcessadosComponent;
  let fixture: ComponentFixture<MaisAcessadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisAcessadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisAcessadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
