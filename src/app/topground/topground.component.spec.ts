import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopgroundComponent } from './topground.component';

describe('TopgroundComponent', () => {
  let component: TopgroundComponent;
  let fixture: ComponentFixture<TopgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
