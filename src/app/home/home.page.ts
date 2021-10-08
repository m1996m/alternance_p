import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CameraResultType, CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  image: SafeResourceUrl;
  constructor(private domSanitizer:DomSanitizer, private imageService:ImageService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  async takePhoto(){ 
    const{Camera}=Plugins;
    const result=await Camera.getPhoto({
      quality:75,
      allowEditing: true,
      source:CameraSource.Camera,
      resultType:CameraResultType.Base64
    });

    this.image=this.domSanitizer.bypassSecurityTrustHtml(result && result.base64Data);
    console.log(this.image);

  }



}
 