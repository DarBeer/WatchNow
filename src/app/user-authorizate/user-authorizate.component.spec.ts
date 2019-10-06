import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthorizateComponent } from './user-authorizate.component';

describe('UserAuthorizateComponent', () => {
  let component: UserAuthorizateComponent;
  let fixture: ComponentFixture<UserAuthorizateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuthorizateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthorizateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
