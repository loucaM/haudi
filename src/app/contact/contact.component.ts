import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   formModel ;
   contactForm: FormGroup;
   envoiMail :boolean;

   constructor(private builder: FormBuilder, private emailService: EmailService ) {
     this.createForm();
   }

   createForm() {
    this.contactForm = this.builder.group({
      'nom': new FormControl ( null, Validators.required),
      'prenom': new FormControl( null, Validators.required),
      'mail': new FormControl (null, [Validators.required, Validators.email]),
      'message': new FormControl (null, Validators.required)
    });
   }

   onSubmit() {
    this.formModel = this.contactForm.value;
    console.log(this.formModel);

    this.envoiMail = this.emailService.sendMail(this.formModel.nom, this.formModel.mail, this.formModel.message );
    console.log(this.envoiMail+" envoi mail")
    this.contactForm.reset();
   }

   isMailValid() {
    return this.contactForm.get('mail').valid;
   }

   isNomValid() {
    return this.contactForm.get('nom').valid;
   }

   isPrenomValid() {
    return this.contactForm.get('prenom').valid;
   }

   isMessageValid() {
    return this.contactForm.get('message').valid;
   }

  ngOnInit() {
  }





}
