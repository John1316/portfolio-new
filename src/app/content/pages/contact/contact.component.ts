import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Egypt];
  changePreferredCountries() {
		this.preferredCountries = [CountryISO.Egypt];
	}
  constructor(
    private _apiService:ApiService,
    private _ToastrService:ToastrService
  ) { }
  contactForm:FormGroup = new FormGroup({
    'name' :  new FormControl('', Validators.required),
    'phone' : new FormControl('', [Validators.required]),
    'email': new FormControl('', [ Validators.required ,Validators.email]),
    'subject': new FormControl('', Validators.required),
    'message': new FormControl('', Validators.required)
  })
  onSubmitContactForm(contactForm:FormGroup){
    let contactObject = {
      name: contactForm.value.name,
      phone: contactForm.value.phone.number,
      subject: contactForm.value.subject,
      email: contactForm.value.email,
      message: contactForm.value.message,
    }
    this._apiService.submitContactForm(contactObject).subscribe({next: (data) => {
      console.log('data', data)
      contactForm.reset()
      this._ToastrService.success('You message sent successfully', 'Thank you', {
        
      })
    }, error(err) {
        console.log('error', err)
    },})
    console.log(contactForm.value);
  }
  ngOnInit(): void {
  }

}
