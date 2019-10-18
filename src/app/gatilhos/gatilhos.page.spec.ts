import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatilhosPage } from './gatilhos.page';

describe('GatilhosPage', () => {
  let component: GatilhosPage;
  let fixture: ComponentFixture<GatilhosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatilhosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatilhosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
