import { OnInit } from '@angular/core';
import { SharedEmitService } from '../../services/shared-emit.service';
export declare class CertificateHolderComponent implements OnInit {
    sharedService: SharedEmitService;
    certificateHolderName: any;
    quickQuestionEnabled: any;
    constructor(sharedService: SharedEmitService);
    ngOnInit(): void;
}
