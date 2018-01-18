import { FormGroup } from '@angular/forms';
import { OnInit, EventEmitter } from '@angular/core';
export declare class AlmostDoneComponent implements OnInit {
    almost_done_section: boolean;
    complete_section: boolean;
    myform: FormGroup;
    completeSectionEnable: any;
    okBtnClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    submit_click(): void;
    ok_btn(): void;
}
