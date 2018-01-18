import { FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
export declare class AdditionalInsuredComponent implements OnInit {
    additional_form: FormGroup;
    additionFormVisible: any;
    constructor();
    foods: {
        value: string;
        viewValue: string;
    }[];
    ngOnInit(): void;
}
