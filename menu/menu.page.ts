
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../service/menu.service';
import { ToastController } from '@ionic/angular';
import { Menu } from '../Models/menu';

@Component({
  selector: 'app-tab1',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage {

  menus : Menu [];
  constructor(private route : Router, private service: MenuService, private toast : ToastController) {
    this.getMenus();

  }

  async presentToast(message: string,  color: string) {
    const toast = await this.toast.create({
      message: message,
      position: 'top',
      color: color,
      duration: 2000
    });
    toast.present();
  }

  getMenus():void 
  {
    this.service.getMenus().subscribe(menus =>{
        this.menus = menus;
    }, 
    error=>
    { 
      this.presentToast('Erreur survenue','danger');


    });
  }



}
