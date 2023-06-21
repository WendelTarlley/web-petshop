import { Component, ComponentFactoryResolver, Inject, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-caixa-dialog-generica',
  templateUrl: './caixa-dialog-generica.component.html',
  styleUrls: ['./caixa-dialog-generica.component.scss']
})
export class CaixaDialogGenericaComponent {
  
  constructor(  public dialogRef: MatDialogRef<CaixaDialogGenericaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

    onNoClick(): void {
      this.dialogRef.close();
    }
}
