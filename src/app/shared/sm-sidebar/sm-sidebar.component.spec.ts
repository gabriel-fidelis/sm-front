import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmSidebarComponent } from './sm-sidebar.component';

describe('SmSidebarComponent', () => {
  let component: SmSidebarComponent;
  let fixture: ComponentFixture<SmSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
