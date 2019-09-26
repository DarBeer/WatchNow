import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfGenresComponent } from './list-of-genres.component';

describe('ListOfGenresComponent', () => {
  let component: ListOfGenresComponent;
  let fixture: ComponentFixture<ListOfGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
