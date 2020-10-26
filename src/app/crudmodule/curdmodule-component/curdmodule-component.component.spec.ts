import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdmoduleComponentComponent } from './curdmodule-component.component';

describe('CurdmoduleComponentComponent', () => {
  let component: CurdmoduleComponentComponent;
  let fixture: ComponentFixture<CurdmoduleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdmoduleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdmoduleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
