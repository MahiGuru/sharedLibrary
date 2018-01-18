import { OnInit, EventEmitter } from '@angular/core';
export declare class BusinessOwnerPolicyComponent implements OnInit {
    clickedAction: EventEmitter<string>;
    constructor();
    policyNumber: string;
    ngOnInit(): void;
    actionClick(action: any): void;
}
