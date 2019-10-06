import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmDetailsComponent } from './list-film-details.component';

describe('ListFilmDetailsComponent', () => {
  let component: ListFilmDetailsComponent;
  let fixture: ComponentFixture<ListFilmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
