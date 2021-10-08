import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { AgendaModel } from 'src/app/Models/agenda-model';
import { AgendaService } from 'src/app/services/agenda.service';
import { AgnedaCreatePage } from '../agneda-create/agneda-create.page';
import { AgnedaEditPage } from '../agneda-edit/agneda-edit.page';

@Component({
  selector: 'app-agenda-show',
  templateUrl: './agenda-show.page.html',
  styleUrls: ['./agenda-show.page.scss'],
})
export class AgendaShowPage implements OnInit {
  @Input() agenda:AgendaModel;
  id: number;
  agendas: AgendaModel;
  agendae: AgendaModel;
  form:any;
  constructor(private AgendaService:AgendaService,private fb:FormBuilder, private menu: MenuController, private router: ActivatedRoute, private modalController:ModalController) { }

  ngOnInit(): void { 

  }

  delete(id: number){
    console.log(id);
    this.AgendaService.delete(id).subscribe((data: any) => {
    });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async presentModal(agendas: AgendaModel) {
    const modal = await this.modalController.create({
      component: AgnedaEditPage,
      cssClass: 'my-custom-class',
      componentProps: { 
       agend: agendas,
       liste:this.agenda
        
      }
    });
    return await modal.present();
  }
  closeModal() {
    this.modalController.dismiss();
  }

}
