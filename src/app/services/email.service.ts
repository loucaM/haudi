import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }
  envoiMail :boolean;

  sendMail(nom:string, mail: string, message: string):boolean{
    let url_send: string = 'https://api.emailjs.com/api/v1.0/email/send';

    let mailParams = {
     service_id: 'mailgun',
     template_id: 'template_Wt1MxILB',
     user_id: 'user_NN47XGnT8D1USg1gD9QDQ',
     template_params: {
      nom: nom,
      from_name: mail,
      message:  message
   }
    };
   
    this.http.post(url_send,JSON.stringify(mailParams),{
      headers: {
        "Content-Type": "application/json"
      }
    }).subscribe( () => { }, error => {
         console.log('OK, on a appelé le serveur emailJS');
         console.log('Statut de la réponse : ' + error.status);
         if (error.status == 200) {
           this.envoiMail = true
           console.log(this.envoiMail+"VERIF ENVOI MAIL");
           }
           else{
             this.envoiMail = false ;
           }
         console.log('Message de la réponse : ' + error.message);
    }, );
    setTimeout( () => { }, 5000 );
   return this.envoiMail;
  }
}
