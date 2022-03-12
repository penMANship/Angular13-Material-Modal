// material.module.ts
// import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
// import { MatDialog } from "@angular/material/dialog";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatButtonModule} from "@angular/material/button";
import { MatInputModule} from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";


import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule,
    MatInputModule]
})
export class MaterialModule {}
