import { map } from 'rxjs';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  model = {
    name: new FormControl<string>('', [Validators.minLength(20), Validators.maxLength(500), Validators.required]),
    surname: '',
    address: ''
  }

  nameToUpperCase$ = this.model.name.valueChanges.pipe(
    map(text => text?.toUpperCase())
  )

  submit($event: SubmitEvent){
    $event.preventDefault();
    const name = this.model.name.value;
    console.log({name})
  }
}
