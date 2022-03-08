import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    protected webServiceUri: string = environment.webServiceUri;
    constructor(protected http: HttpClient) {
    }

    public getUser(userId: string) {
        let url = this.webServiceUri + `products/${userId}`;
        console.log(url);
        return this.http.get("http://localhost:3000/products/1");
    }
    public getAllCriptos(): Observable<any> {
        const url = 'https://www.binance.com/bapi/asset/v2/public/asset/asset/get-all-asset';
        let res = this.http.get<any>(url);
        console.log(res);
        
        return this.http.get<any>(url);
    }
}
export interface User {
    id: string,
    title: string,
    description: string,
    price: number
}