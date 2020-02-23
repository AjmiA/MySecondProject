import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopjobComponent } from './topjob.component';

describe('TopjobComponent', () => {
  let component: TopjobComponent;
  let fixture: ComponentFixture<TopjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
