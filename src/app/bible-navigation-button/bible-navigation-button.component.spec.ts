import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleNavigationButtonComponent } from './bible-navigation-button.component';

describe('BibleNavigationButtonComponent', () => {
  let component: BibleNavigationButtonComponent;
  let fixture: ComponentFixture<BibleNavigationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibleNavigationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleNavigationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
