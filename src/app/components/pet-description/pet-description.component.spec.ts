import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDescriptionComponent } from './pet-description.component';

describe('PetDescriptionComponent', () => {
  let component: PetDescriptionComponent;
  let fixture: ComponentFixture<PetDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
