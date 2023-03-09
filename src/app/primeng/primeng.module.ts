import { NgModule } from '@angular/core';

import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';


@NgModule({
    exports: [
        RippleModule,
        ButtonModule,
        TableModule,
        DialogModule
    ]
})

export class PrimengModule { }
