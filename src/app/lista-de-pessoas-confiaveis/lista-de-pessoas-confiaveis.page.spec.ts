import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePessoasConfiaveisPage } from './lista-de-pessoas-confiaveis.page';

describe('ListaDePessoasConfiaveisPage', () => {
  let component: ListaDePessoasConfiaveisPage;
  let fixture: ComponentFixture<ListaDePessoasConfiaveisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDePessoasConfiaveisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePessoasConfiaveisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
