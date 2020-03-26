import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRegistredComponent } from './users-registred.component';

describe('UsersRegistredComponent', () => {
  let component: UsersRegistredComponent;
  let fixture: ComponentFixture<UsersRegistredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersRegistredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRegistredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
