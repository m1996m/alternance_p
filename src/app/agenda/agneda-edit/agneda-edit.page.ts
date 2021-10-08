import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { AgendaModel } from 'src/app/Models/agenda-model';
import { ParticipantModel } from 'src/app/Models/participant-model';
import { AgendaService } from 'src/app/services/agenda.service';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-agneda-edit',
  templateUrl: './agneda-edit.page.html',
  styleUrls: ['./agneda-edit.page.scss'],
})
export class AgnedaEditPage implements OnInit {

  @Input() agend: AgendaModel;
  @Input() liste: AgendaModel;
  @Input() idv: string;
  id: number;
  form:any; 
  agendas:any;
  participants:any;
  
  constructor(private fb:FormBuilder,private partiService:ParticipantService, private agendaService: AgendaService,private menu: MenuController, private router: ActivatedRoute, private modalController:ModalController, private route:Router) { }

  ngOnInit(): void {
    
    console.log(this.idv);
    console.log(this.liste);
    this.iniForm();
  }
  iniForm(){
    this.form=this.fb.group({
      nom:[this.liste.nom],
      date:[this.liste.date]
    })
  }

  getParticipant(){
    this.partiService.getparticipant().subscribe((data:ParticipantModel)=>{ this.participants=data; });
  }

  Enregistrer(){
    this.agendaService.edit(this.form.value,this.liste.id).subscribe((data:any)=>{ }); 
    this.route.navigate(['/agneda-index']);
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
