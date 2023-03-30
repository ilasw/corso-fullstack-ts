import { map } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  // Creare form con email e pw,
  // al submit stampare i dati in un console.log

  // portiamo il form a FormGroup e creiamo una pagina
  // per la registrazione di un user

  // al submit del form richiamare il metodo
  // del servic AuthService.register()

  // AuthService è un service che creeremo oggi, si occupa di creare/cercare/loggare user.
  // Ha 3 metodi: search(username), register({username, password}), login({ username, password })

  // - creare un utente significa salvarlo dentro il localStorage
  // es: localStorage.set('user-[USER.USERNAME]', JSON.stringify(user))

  // - Recuperare un utente by username significa cercare la chiave user-{USERNAME}
  // es: localStorage.get('user-ilasw') -> null | string

  // - Loggare utente significa cercare lo user relativo e fare check sulla sua pw

  model = new FormGroup({
    firstName: new FormControl<string>('', [Validators.minLength(20), Validators.maxLength(500), Validators.required]),
    lastName: new FormControl<string>('', [Validators.minLength(20), Validators.maxLength(500), Validators.required])
  })

  nameUppercase$ = this.model.controls.firstName.valueChanges.pipe(

  )

  submit(){
    const {firstName, lastName} = this.model.value;
    console.log({firstName, lastName})
    this.model.getError('firstName');
  }
}
