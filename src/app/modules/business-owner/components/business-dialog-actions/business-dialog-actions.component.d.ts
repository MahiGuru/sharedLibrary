import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
export declare class BusinessDialogActionsComponent implements OnInit {
    dialogRef: MatDialogRef<BusinessDialogActionsComponent>;
    data: any;
    emailProofOfInsurance: Boolean;
    customizeProofOfInsurance: Boolean;
    detailStep: Boolean;
    emailProofOfInsuranceDisplay: boolean;
    customizeProofOfInsuranceDisplay: Boolean;
    detailStepDisplay: Boolean;
    selectedOptions: Array<string>;
    detailStepspObj: any;
    areYouSure: any;
    constructor(dialogRef: MatDialogRef<BusinessDialogActionsComponent>, data: any);
    closeDialog(ev: any): void;
    goBack(): void;
    okBtn(): void;
    emailSendClick(res: any): void;
    customizeNextBtnClick(res: any): void;
    detailActionClick(): void;
    ngOnInit(): void;
}
