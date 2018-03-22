import { Component, OnInit, ContentChildren, AfterViewInit, AfterContentInit } from '@angular/core';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { QueryList } from '@angular/core/src/render3';
import { WizardStateService } from './wizard-state.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit, AfterContentInit {

  @ContentChildren(WizardStepComponent)
  public wizardSteps: QueryList<WizardStepComponent>;

  constructor(private wizardStateService: WizardStateService) { }

  ngOnInit() {
    this.wizardStateService.resetWizardSteps();
  }

  ngAfterContentInit(): void {
    // add a subscriber to the wizard steps QueryList to listen to changes in the DOM
    this.wizardSteps.changes.subscribe(changedWizardSteps => {
      this.wizardStateService.updateWizardSteps(changedWizardSteps.toArray());
    });
  }

}
