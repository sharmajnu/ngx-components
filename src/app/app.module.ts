import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard/wizard-step/wizard-step.component';
import { WizardModule } from './wizard/wizard.module';

@NgModule({
  declarations: [AppComponent, WizardModule],
  imports: [BrowserModule, WizardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
