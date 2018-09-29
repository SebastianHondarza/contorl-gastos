import { NgModule } from '@angular/core';
import { MatGridListModule, MatInputModule, MatFormFieldModule, MatTableModule, MatCardModule } from '@angular/material';

@NgModule({

    imports: [
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatCardModule
    ],
    exports: [
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatCardModule
    ],

})
export class MaterialModule { }
