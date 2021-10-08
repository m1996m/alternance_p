import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'ap(p-participant-create',
  templateUrl: './participant-create.page.html',
  styleUrls: ['./participant-create.page.scss'],
})
export class ParticipantCreatePage implements OnInit {

  form: FormGroup;
  @Input() create;


  constructor(private modalCtrl:ModalController, private fb: FormBuilder,  private route: Router, private partiService:ParticipantService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.form = this.fb.group({
      email:  [''],
      nom: [''],
      tel: ['']
    });
  }
  Enregistrer(){
    this.partiService.create(this.form.value).subscribe((data:any)=>{ });
    console.log(this.form.value)
    this.route.navigate(['/participant-index']);
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

}
