import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreeningShellComponent } from './screening-shell.component';

const ROUTES: Routes = [
    { path: 'screening', component: ScreeningShellComponent },
    { path: '', redirectTo: 'screening', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
    
})

export class ScreeningRoutingModule { }