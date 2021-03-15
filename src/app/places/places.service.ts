import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Place } from './place.model';
import { take, map, delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Mayfair-Lagoon',
      'MAYFAIR Hotels & Resorts stand as a true paragon of world class hospitality and have some of the best luxury hotels and resorts in India.',
      'https://www.mayfairhotels.com/mayfair-lagoon/photo-gallery/images/Aerial%20View.jpg',
      149.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abrc'
    ),
    new Place(
      'p2',
      "Swosti Premium",
      'largest Convention Hotel of the Eastern India.',
      'https://1.bp.blogspot.com/-g1oNi3AZc9E/XTBwujVsCKI/AAAAAAACRC0/ndotTHDXOqURHxETgWVBsmop7uww3qcwwCLcBGAs/w1200-h630-p-k-no-nu/Swosti%2Bpremium%2Boutside%2Bview.jpg',
      189.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'ahhbc'
    ),
    new Place(
      'p3',
      'Excellency Resorts',
      'Polished option offering modern rooms, as well as a restaurant, a hot tub & a rooftop pool.',
      'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/22/28/2228004_v2.jpeg',
      99.99,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'p4',
      'HHI',
      'The HHI Bhubaneswar, the best luxury boutique hotel of Bhubaneswar, Odisha situated near to both airport and railway station. Visit us and enjoy your stay.',
      'https://cf.bstatic.com/images/hotel/max1024x768/153/153678161.jpg',
      150.00,
      new Date('2019-01-07'),
      new Date('2020-02-31'),
      'abc'

    ),

  ]);

  get places() {
    return this._places.asObservable();
  }

  constructor(private authService: AuthService) { }

  getPlace(id: string) {
    return this.places.pipe(
      take(1),
      map(places => {
        return { ...places.find(p => p.id === id) };
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/22/28/2228004_v2.jpeg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(places => {
        this._places.next(places.concat(newPlace));
      })
    );

    // this.places.pipe(take(1)).subscribe(places => {
    //   this._places.next(places.concat(newPlace));
    // });
  }


}
