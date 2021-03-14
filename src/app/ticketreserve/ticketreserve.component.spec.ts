import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketreserveComponent } from './ticketreserve.component';

describe('TicketreserveComponent', () => {
  let component: TicketreserveComponent;
  let fixture: ComponentFixture<TicketreserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketreserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketreserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
