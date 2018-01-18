import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class BusinessOwnerComponent implements OnInit {
    dialog: MatDialog;
    emailProofOfInsurance: any;
    customizeProofOfInsurance: any;
    detailStep: any;
    selectedOptions: Array<number>;
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    dialog_action(emailProofInsurance?: boolean, customizeInsurance?: boolean, detailstep?: boolean, customizeSelected?: any, detailstepSelected?: any): void;
    businessPolicyAction(action: any): void;
}
