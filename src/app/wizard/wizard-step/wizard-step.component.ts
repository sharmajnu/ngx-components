import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent implements OnInit {

  @Input()
  public  stepVisible: boolean;
  constructor() { }

  ngOnInit() {
  }


}
