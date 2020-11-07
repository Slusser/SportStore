import { from } from "rxjs/observable/from";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {RestDataSource} from "./rest.datasource";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
    constructor(private datasouce: RestDataSource) {}

    authenticate(username: string, password: string): Observable<boolean> {
        return this.datasouce.authenticate(username,password);
    }

    get authenticated(): boolean {
        return this.datasouce.auth_token != null;
    }

    clear() {
        this.datasouce.auth_token = null;
    }
}