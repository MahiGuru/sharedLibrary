import { FormBuilder, FormGroup } from '@angular/forms';
import { OnInit, EventEmitter } from '@angular/core';
export declare class EmailProofOfInsuranceComponent implements OnInit {
    sendClick: EventEmitter<FormGroup>;
    isLinear: boolean;
    myform: FormGroup;
    email: any;
    isDisabled: boolean;
    constructor(fb: FormBuilder);
    alternateEmails: string;
    complete_enable: boolean;
    sendnow(): void;
    onChange(): void;
    almostDoneClick(fromComponent: any): void;
    ngOnInit(): void;
}
