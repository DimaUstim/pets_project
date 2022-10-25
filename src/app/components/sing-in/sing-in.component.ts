import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DialogRef } from '../../service';
import { DIALOG_DATA } from '../../service';
import { SingInService } from '../../service';
import { Router } from '@angular/router';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  title = 'Sign In';
  public loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private singInService: SingInService,
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailInput: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  singIn() {
    this.singInService.login({ email: this.loginForm.value.emailInput });

    if (this.data) {
      this.router.navigateByUrl(this.data);
    }

    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
