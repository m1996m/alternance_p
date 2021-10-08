import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ParticipantModel } from 'src/app/Models/participant-model';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.page.html',
  styleUrls: ['./participant-edit.page.scss'],
})
export class ParticipantEditPage implements OnInit {

  @Input() personnels: ParticipantModel;
  @Input() perso: ParticipantModel;
  id: number;
  form:any;
  personnel:any;
  constructor(private fb:FormBuilder, private partiService: ParticipantService,private menu: MenuController, private router: ActivatedRoute, private modalController:ModalController) { }

  ngOnInit(): void {
    console.log(this.perso);
    this.iniForm(); 
    this.partiService.getOne(this.perso.id).subscribe((data: ParticipantModel) => {
      this.personnel= data;
    });
    
    this.iniForm();
  }
  iniForm(){
    this.form=this.fb.group({
      email:[this.perso.email],
      nom:[this.perso.nom],
      tel:[this.perso.tel]
    })
  }

  Enregistrer(){
    this.partiService.edit(this.form.value,this.perso.id).subscribe((data:any)=>{ });
    console.log(this.form.value)
    //this.route.navigate(['/home']);
  }
  closeModal() {
    this.modalController.dismiss();
  }


}
