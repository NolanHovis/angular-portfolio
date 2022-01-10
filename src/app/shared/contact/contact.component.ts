import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyFormService } from './netlify-form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netForms: NetlifyFormService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  onSubmit() {
    this.netForms.submitContactForm(this.contactForm.value).subscribe(
      () => {
        debugger;
        this.contactForm.reset();
        this.router.navigateByUrl('/success');
      },
      (err) => {
        this.errorMsg = err;
      }
    );
  }

  private formInit() {
    this.contactForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      service: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
}
