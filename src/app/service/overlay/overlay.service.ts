import { Injectable, Injector } from '@angular/core';
import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DialogRef } from './overlay-dialog-ref';
import { DIALOG_DATA } from './overlay-token';
import { DialogConfig } from '../../model';

@Injectable()
export class OverlayService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  /**
   * Open a custom component in an overlay
   */
  open<T>(component: ComponentType<T>, config?: DialogConfig): DialogRef {
    // Globally centered position strategy
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      panelClass: 'overlay-panel',
    });

    // Create dialogRef to return
    const dialogRef = new DialogRef(overlayRef);

    // Create injector to be able to reference the DialogRef from within the component
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: DialogRef, useValue: dialogRef },
        { provide: DIALOG_DATA, useValue: config?.data },
      ],
    });

    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    if (config?.backdropClickClose) {
      overlayRef.backdropClick().subscribe(() => dialogRef.close());
       }

    return dialogRef;
  }
}
