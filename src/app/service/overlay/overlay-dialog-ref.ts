import { OverlayRef } from '@angular/cdk/overlay';

export class DialogRef {
  constructor(private overlayRef: OverlayRef) {}

  // Closes the overlay.

  public close() {
    this.overlayRef.dispose();
  }
}
