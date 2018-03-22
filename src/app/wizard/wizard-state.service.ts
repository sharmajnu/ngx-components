import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { WizardStepComponent } from './wizard-step/wizard-step.component';


@Injectable()
export class WizardStateService {

  public wizardSteps: Array<WizardStepComponent> = [];

  constructor() { }

  public currentWizardStep: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  hasStep(stepIndex: number): boolean {
    return this.wizardSteps.length > 0 && 0 <= stepIndex && stepIndex < this.wizardSteps.length;
  }

  hasPreviousStep(): boolean {
    return this.hasStep(this.currentWizardStep.value - 1);
  }

  hasNextStep(): boolean {
    return this.hasStep(this.currentWizardStep.value + 1);
  }

  resetWizardSteps() {
    this.currentWizardStep.next(0);
  }

  updateWizardSteps(updatedWizardSteps: WizardStepComponent[]): void {
    if (this.wizardSteps.length > 0 && this.currentWizardStep.value > -1) {
      this.currentWizardStep.next(updatedWizardSteps.indexOf(this.wizardSteps[ this.currentWizardStep.value]));
    }

    this.wizardSteps = updatedWizardSteps;
  }



}
