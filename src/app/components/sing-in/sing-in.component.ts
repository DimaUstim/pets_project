import { Component, Inject } from '@angular/core';
import { DialogRef } from '../../service';
import { DIALOG_DATA } from 'src/app/service';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
})
export class SingInComponent {
  value2: string | undefined;
  value4: string | undefined;

  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: string
  ) {}

  close() {
    this.dialogRef.close();
  }
}
