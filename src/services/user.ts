import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

    private _curp: string;
    private _isMen: boolean;

    constructor() { }

    set curp(newVal: string) {
        this._curp = newVal;
    }

    get curp(): string {
        return this._curp;
    }

    set isMen(newVal:boolean){
        this._isMen=newVal;
    }

    get isMen():boolean{
        return this._isMen;
    }

}