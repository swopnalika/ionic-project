import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
        id: 'xyz',
        placeId: 'p4',
        placeTitle: 'HHI',
        guestNumber: 3,
        userId: 'abc'
    }
];

get bookings() {
  return [...this._bookings];
}
}
