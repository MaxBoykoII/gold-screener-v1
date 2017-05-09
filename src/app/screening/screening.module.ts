import { NgModule } from '@angular/core';

import { ScreeningRoutingModule } from './screening-routing.module';
import { ScreeningShellComponent } from './screening-shell.component';

@NgModule({
    imports: [ ScreeningRoutingModule ],
    declarations: [
        ScreeningShellComponent
    ]
})

export class ScreeningModule {}