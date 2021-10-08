import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { AgendaModel } from 'src/app/Models/agenda-model';
import { AgendaService } from 'src/app/services/agenda.service';
import { AgendaShowPage } from '../agenda-show/agenda-show.page';
import { AgnedaCreatePage } from '../agneda-create/agneda-create.page';

@Component({
  selector: 'app-agneda-index',
  templateUrl: './agneda-index.page.html',
  styleUrls: ['./agneda-index.page.scss'],
})
export class AgnedaIndexPage implements OnInit {


  agendas: AgendaModel;
  constructor(private agenda: AgendaService, private modalController: ModalController, private menu: MenuController) { }

  ngOnInit() : void {
    this.getagenda();
  }

  delete(id: number){
    this.agenda.delete(id).subscribe((data: AgendaModel) => {
      this.agendas = data;
      this.getagenda();
    } );
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  getagenda(){
    this.agenda.getagenda().subscribe((data: AgendaModel) => {
      this.agendas = data;
    });
    
  }
  async presentModal(agendas: AgendaModel) {
    const modal = await this.modalController.create({
      component: AgendaShowPage,
      cssClass: 'my-custom-class',
      componentProps: {
        agenda: agendas

      }
    });
    return await modal.present();
  }

  async presentModale(agendas: AgendaModel) {
    const modal = await this.modalController.create({
      component: AgnedaCreatePage,
      cssClass: 'my-custom-class',
      componentProps: { 
        create: agendas,
        
      }
    });
    return await modal.present();
  }
}
