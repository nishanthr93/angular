import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdmoduleComponent } from './curdmodule.component';

describe('CurdmoduleComponent', () => {
  let component: CurdmoduleComponent;
  let fixture: ComponentFixture<CurdmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
