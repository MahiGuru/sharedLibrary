import { SharedEmitService } from './../../services/shared-emit.service';
import { EventEmitter, OnInit } from '@angular/core';
import { CustomizeInsurance } from '../../../modules/business-owner/enums/customize-insurance.enum';
export declare class CustomizeProofOfInsuranceComponent implements OnInit {
    private _sharedEmitService;
    selectedOptions: Array<string>;
    customizeAction: EventEmitter<{}>;
    nextBtnClick: EventEmitter<any>;
    customize_options: {
        id: CustomizeInsurance;
        label: string;
        icon: string;
        checked: boolean;
        desc: string;
    }[];
    constructor(_sharedEmitService: SharedEmitService);
    nextButtonAction(): void;
    ngOnInit(): void;
}
