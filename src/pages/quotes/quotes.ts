import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor(private navParams: NavParams,
     private alrtCtrl: AlertController, private quotesService: QuotesService){}
      
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }
  /*ionViewDidLoad(){
    this.quoteGroup = this.navParams.data;
    //Add elvis operator (?) in template to use this approach
  }*/

  onAddToFavourites(selectedQuote: Quote){
    const alert = this.alrtCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure',
      message: 'Are you sure you want to add the quote?',
      buttons:[
        {
          text: 'Yes, go ahead',
          handler: () =>{
            this.quotesService.addQuoteToFavourites(selectedQuote);
          }
        },
        {
          text: 'No, I don\'t',
          role: 'cancel',
          handler: () =>{
            console.log('cancelled...');
          }
        }
      ]
    });

    alert.present();
  }
  onRemoveFromFavourites(quotes: Quote){
   return this.quotesService.removeQuoteFromFavourites(quotes);
  }

  isFavourite(quotes: Quote){
    return this.quotesService.isQuoteFavourite(quotes);
  }
}
