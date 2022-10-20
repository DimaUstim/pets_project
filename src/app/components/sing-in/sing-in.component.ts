import { Component, Inject } from '@angular/core';
import { User } from '../../model';
import { DialogRef } from '../../service';
import { DIALOG_DATA } from '../../service';
import { SingInService } from '../../service';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
  email?: User;

  constructor(private singInService: SingInService,
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any
  ) { }

  onBtnClick() {
    this.singInService.login(this.email);
  }

  close() {
    this.dialogRef.close();
  }
}
