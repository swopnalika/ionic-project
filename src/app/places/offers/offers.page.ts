import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];
  private placesSub: Subscription;

  constructor(private placesService: PlacesService,
    private router: Router) { }

    ngOnInit() {
      this.placesSub = this.placesService.places.subscribe(places => {
        this.offers = places;
      });
    }

    onEdit(offerId: string, slidingItem: IonItemSliding) {
      slidingItem.close();
      this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
      console.log('Editing item', offerId);
    }

    ngOnDestroy() {
      if (this.placesSub) {
        this.placesSub.unsubscribe();
      }
    }
}
