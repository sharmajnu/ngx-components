import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WizardComponent, WizardStepComponent]
})
export class WizardModule {}
