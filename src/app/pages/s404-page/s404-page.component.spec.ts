import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S404PageComponent } from './s404-page.component';

describe('S404PageComponent', () => {
  let component: S404PageComponent;
  let fixture: ComponentFixture<S404PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S404PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
