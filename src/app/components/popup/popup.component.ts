import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from 'src/app/service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopUpComponent {
  title: string;
  submitBtn: string;
  cancelBtn: string = 'Cancel';

  constructor(private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.submitBtn = data.submitBtn;
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(true);
  }
}
