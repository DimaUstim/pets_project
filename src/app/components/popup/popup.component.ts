import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from 'src/app/service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopUpComponent {
  title: string;
  btnLabel1: string;
  btnLabel2: string;

  constructor(private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.btnLabel1 = data.btnLabel1;
    this.btnLabel2 = data.btnLabel2;
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(true);
  }
}
