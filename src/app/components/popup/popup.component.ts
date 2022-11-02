import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from 'src/app/service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopUpComponent {
  title: string;
  submitText: string = 'Submit';
  cancelText: string = 'Cancel';

  constructor(private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.submitText = data.submitText || this.submitText;
    this.cancelText = data.cancelText || this.cancelText;
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(true);
  }
}
