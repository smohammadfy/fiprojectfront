import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootmenuComponent } from './footmenu.component';

describe('FootmenuComponent', () => {
  let component: FootmenuComponent;
  let fixture: ComponentFixture<FootmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
