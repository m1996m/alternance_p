import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ParticipantModel } from 'src/app/Models/participant-model';
import { ParticipantService } from 'src/app/services/participant.service';
import { ParticipantCreatePage } from '../participant-create/participant-create.page';
import { ParticipantShowPage } from '../participant-show/participant-show.page';

@Component({
  selector: 'app-participant-index',
  templateUrl: './participant-index.page.html',
  styleUrls: ['./participant-index.page.scss'],
})
export class ParticipantIndexPage implements OnInit {

  participants: ParticipantModel;
  constructor(private perso: ParticipantService, private modalController: ModalController, private menu: MenuController) { }

  ngOnInit(): void {
    this.getparticipant();
  }

  delete(id: number){
    this.perso.delete(id).subscribe((data: ParticipantModel) => {
      this.participants = data;
      this.getparticipant();
    });
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  getparticipant(){
    this.perso.getparticipant().subscribe((data: ParticipantModel) => {
      this.participants = data;
    });
  }
  async presentModal(participants: ParticipantModel) {
    const modal = await this.modalController.create({
      component: ParticipantShowPage,
      cssClass: 'my-custom-class',
      componentProps: {
        participant: participants

      }
    });
    return await modal.present();
  }
  async presentModale(participants: ParticipantModel) {
    const modal = await this.modalController.create({
      component: ParticipantCreatePage,
      cssClass: 'my-custom-class',
      componentProps: { 
        create: participants,
        
      }
    });
    return await modal.present();
  }

}
