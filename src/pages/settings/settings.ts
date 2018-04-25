import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';
import { SettingService } from '../../services/settings';



@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(private settingsService: SettingService){}
  onToggle(toggle: Toggle){
     this.settingsService.setBackground(toggle.checked);
  }

  checkAltBackground(){
    return this.settingsService.isAltBackground();
  }
  
}
