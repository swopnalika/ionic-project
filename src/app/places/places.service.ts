import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Taj Mahal',
      'One of the seven great wonders of the world..',
      'https://thumbs-prod.si-cdn.com/E0Lm_ZfhHbqapE5Amhv-aiu8XYA=/1072x720/filters:no_upscale():focal(1471x1061:1472x1062)/https://public-media.si-cdn.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg',
      149.99
    ),
    new Place(
      'p2',
      "hawa mahal",
      'Pink/red sandstone - Palace of the Winds',
      'https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG',
      189.99
    ),
    new Place(
      'p3',
      'Darjeeling',
      'Queen of the hills!',
      'https://www.thrillophilia.com/blog/wp-content/uploads/2015/05/Darjeeling.jpg',
      99.99
    ),
    new Place(
      'p4',
      'Gulmarg',
      'a town, a hill station, a popular skiing destination!',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/1a/2b/ed/gulmarg.jpg?w=1000&h=600&s=1',
      10.00
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
