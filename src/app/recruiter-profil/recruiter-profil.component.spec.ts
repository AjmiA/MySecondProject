import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterProfilComponent } from './recruiter-profil.component';

describe('RecruiterProfilComponent', () => {
  let component: RecruiterProfilComponent;
  let fixture: ComponentFixture<RecruiterProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
