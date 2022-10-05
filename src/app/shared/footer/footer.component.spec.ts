/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p'));

    component.owner = "ACME, Inc";
    fixture.detectChanges();

    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should know the current year', () => {
    const currentYear = "" + new Date().getFullYear();
    expect(component.currentYear).toEqual(currentYear);
  });

  it('should know the owner', () => {
    expect(component.owner).toEqual("ACME, Inc");
  });

  it('should render message in a p tag', async(() => {
    expect(el.textContent).toContain("Copyright (c)");
    expect(el.textContent).toContain(new Date().getFullYear().toString());
    expect(el.textContent).toContain("ACME, Inc");
  }));
});
*/