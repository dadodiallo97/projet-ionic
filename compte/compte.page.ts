/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CompteService } from '../service/compte.service';
import {Compte} from '../Models/compte';

@Component({
  selector: 'app-tab3',
  templateUrl: 'compte.page.html',
  styleUrls: ['compte.page.scss']
})
export class Tab3Page {

  comptes: Compte[];
  constructor(private route: Router, private service: CompteService, private toast : ToastController) {
    this.getEmail();
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

  getEmail():void 
  {
    this.service.getEmail().subscribe(comptes =>{
        this.comptes = comptes;
    }, 
    error=>
    { 
      this.presentToast('Erreur survenue','danger');


    });
  }

  modifierMdp (id:any):void
  {
    this.route.navigate(['tabs/compte/modifier',id]);
  }


  logout():void{
    window.localStorage.removeItem('token');
    this.route.navigateByUrl('login')
  }
}*/
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab3',
  templateUrl: 'compte.page.html',
  styleUrls: ['compte.page.scss']
})

export class Tab3Page {
  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';

  constructor( private camera: Camera, storage: Storage) {}
  
  
  username = window.localStorage.getItem('username');
  email = window.localStorage.getItem('email');
 nom = window.localStorage.getItem('nom');
 prenom = window.localStorage.getItem('prenom');
 adresse = window.localStorage.getItem('adresse');
 telephone = window.localStorage.getItem('telephone');
  token = window.localStorage.getItem('token');
  




 async addPhoto(source: string) {
    if (source === 'camera') {
      console.log('camera');
      const cameraPhoto = await this.openCamera();
      this.image = 'data:image/jpg;base64,' + cameraPhoto;
    } else {
      console.log('library');
      const libraryImage = await this.openLibrary();
      this.image = 'data:image/jpg;base64,' + libraryImage;
    }
  }
  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }

  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }
}
