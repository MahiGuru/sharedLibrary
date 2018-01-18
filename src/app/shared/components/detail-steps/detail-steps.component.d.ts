import { FormGroup, FormBuilder } from '@angular/forms';
import { OnInit, EventEmitter } from '@angular/core';
import { MatStepper } from '@angular/material';
export declare class DetailStepsComponent implements OnInit {
    private _formBuilder;
    hasCertficateHolder: any;
    hasChangeOperateDesc: any;
    hasAdditionalInsured: any;
    hasAlmostDone: any;
    detailAction: EventEmitter<any>;
    quickQuestionEnable: any;
    isLinear: boolean;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    message: any;
    nextBtnText: any;
    almostCompleteSectionEnable: any;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    goBack(stepper: MatStepper, index: any): void;
    almostDoneClick(): void;
    goNext(stepper: MatStepper, index: any): void;
    ok_btn_click(stepper: MatStepper): void;
    nothanks_btn_click(stepper: MatStepper): void;
}
