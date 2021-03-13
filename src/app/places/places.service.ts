import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Mayfair-Lagoon',
      'MAYFAIR Hotels & Resorts stand as a true paragon of world class hospitality and have some of the best luxury hotels and resorts in India.',
      'https://www.mayfairhotels.com/mayfair-lagoon/photo-gallery/images/Aerial%20View.jpg',
      149.99
    ),
    new Place(
      'p2',
      "Swosti Premium",
      'largest Convention Hotel of the Eastern India.',
      'https://1.bp.blogspot.com/-g1oNi3AZc9E/XTBwujVsCKI/AAAAAAACRC0/ndotTHDXOqURHxETgWVBsmop7uww3qcwwCLcBGAs/w1200-h630-p-k-no-nu/Swosti%2Bpremium%2Boutside%2Bview.jpg',
      112.99
    ),
    new Place(
      'p3',
      'Excellency Resorts',
      'Polished option offering modern rooms, as well as a restaurant, a hot tub & a rooftop pool.',
      'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/22/28/2228004_v2.jpeg',
      99.99
    ),
    new Place(
      'p4',
      'HHI',
      'The HHI Bhubaneswar, the best luxury boutique hotel of Bhubaneswar, Odisha situated near to both airport and railway station. Visit us and enjoy your stay.',
      'https://cf.bstatic.com/images/hotel/max1024x768/153/153678161.jpg',
      150.00
    ),

  ];

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
