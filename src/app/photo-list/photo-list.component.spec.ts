import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponentComponent } from './photo-list.component';

describe('PhotoListComponentComponent', () => {
  let component: PhotoListComponentComponent;
  let fixture: ComponentFixture<PhotoListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
