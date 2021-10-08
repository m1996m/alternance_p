import { ParticipantModel } from "./participant-model";

export class AgendaModel {
    constructor(public id:number, public nom:string,public date:string, public participant?:ParticipantModel){}
}
