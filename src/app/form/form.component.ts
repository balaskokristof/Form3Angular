import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Elküldött adatok:', form.value);
    } else {
      console.log('Nem valid a form!');
    }
  }

}
