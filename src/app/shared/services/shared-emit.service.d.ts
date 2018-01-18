import { Observable } from 'rxjs/Observable';
export declare class SharedEmitService {
    private emitChangeSource;
    sendMessage(message: any): void;
    clearMessage(): void;
    getMessage(): Observable<any>;
}
