import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoFormComponent } from './nuevo-form.component';

describe('NuevoFormComponent', () => {
  let component: NuevoFormComponent;
  let fixture: ComponentFixture<NuevoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
