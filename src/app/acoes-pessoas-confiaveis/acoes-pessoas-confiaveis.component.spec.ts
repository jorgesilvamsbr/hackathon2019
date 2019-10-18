import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesPessoasConfiaveisComponent } from './acoes-pessoas-confiaveis.component';

describe('AcoesPessoasConfiaveisComponent', () => {
  let component: AcoesPessoasConfiaveisComponent;
  let fixture: ComponentFixture<AcoesPessoasConfiaveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcoesPessoasConfiaveisComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcoesPessoasConfiaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
