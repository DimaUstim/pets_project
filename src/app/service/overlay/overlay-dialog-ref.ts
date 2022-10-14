import { OverlayRef } from '@angular/cdk/overlay';

/**
 * A reference to the dialog itself.
 * Can be injected into the component added to the overlay and then used to close itself.
 */
export class DialogRef {
  constructor(private overlayRef: OverlayRef) {}

  // Closes the overlay.

  public close() {
    this.overlayRef.dispose();
  }
}
