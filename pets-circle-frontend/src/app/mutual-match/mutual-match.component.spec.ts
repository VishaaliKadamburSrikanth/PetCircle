import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualMatchComponent } from './mutual-match.component';

describe('MutualMatchComponent', () => {
  let component: MutualMatchComponent;
  let fixture: ComponentFixture<MutualMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
