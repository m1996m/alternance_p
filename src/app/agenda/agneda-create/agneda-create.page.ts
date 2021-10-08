import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AgendaModel } from 'src/app/Models/agenda-model';
import { ParticipantModel } from 'src/app/Models/participant-model';
import { AgendaService } from 'src/app/services/agenda.service';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-agneda-create',
  templateUrl: './agneda-create.page.html',
  styleUrls: ['./agneda-create.page.scss'],
})
export class AgnedaCreatePage implements OnInit {

  form: FormGroup;
  participants:ParticipantModel;

  constructor(private fb: FormBuilder,private modalCtrl:ModalController, private agendaservice:AgendaService, private route: Router, private partiService:ParticipantService) { }

  ngOnInit(): void {
    this.initForm();
    this.getParticipant();
  }
  initForm(){
    this.form = this.fb.group({
      user:  [''],
      nom: [''],
      date: ['']
    });
  }
  Enregistrer(){
    this.agendaservice.create(this.form.value).subscribe((data:AgendaModel)=>{ });
     this.route.navigate(['/agneda-index']);
  } 
  getParticipant(){
    this.partiService.getparticipant().subscribe((data:ParticipantModel)=>{ this.participants=data; });
    
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }


}
