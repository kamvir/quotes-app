import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import { SettingService } from '../../services/settings';



@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
 
quotes: Quote[];
 constructor(private quotesService: QuotesService, private modalCtrl: ModalController, private settingsService: SettingService){}

 ionViewWillEnter(){
   this.quotes = this.quotesService.getFavouriteQuotes();
 }
  
  onViewQuote(quote: Quote){
   const modal = this.modalCtrl.create(QuotePage, quote);
   modal.present();
   modal.onDidDismiss((remove: boolean) => {
     if(remove){
       this.onRemoveFromFavourites(quote);
     }
   });
   
  }

  onRemoveFromFavourites(quote: Quote){
    this.quotesService.removeQuoteFromFavourites(quote);
       //this.quotes = this.quotesService.getFavouriteQuotes();
       const position = this.quotes.findIndex((quoteEl: Quote) =>{
         return quoteEl.id == quote.id;
       });
       this.quotes.splice(position, 1);
  }

  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
  
}
