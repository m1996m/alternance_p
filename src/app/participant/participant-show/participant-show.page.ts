import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ParticipantModel } from 'src/app/Models/participant-model';
import { ParticipantService } from 'src/app/services/participant.service';
import { ParticipantEditPage } from '../participant-edit/participant-edit.page';

@Component({
  selector: 'app-participant-show',
  templateUrl: './participant-show.page.html',
  styleUrls: ['./participant-show.page.scss'],
})
export class ParticipantShowPage implements OnInit {

  @Input() participant: ParticipantModel;
  id: number; 
  participants: ParticipantModel;
  participante: ParticipantModel;
  form:any;
  constructor(private fb:FormBuilder, private perso: ParticipantService,private menu: MenuController, private router: ActivatedRoute, private modalController:ModalController) { }

  ngOnInit(): void { 

  }
  delete(id: number){
    console.log(id);
    this.perso.delete(id).subscribe((data: any) => {
      this.participante = data;
      console.log(data);
    });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async presentModal(participants: ParticipantModel) {
    const modal = await this.modalController.create({
      component: ParticipantEditPage,
      cssClass: 'my-custom-class',
      componentProps: {
        personnels: participants,
        perso:this.participant

      }
    });
    return await modal.present();
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
