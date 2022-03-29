import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CreateUserCurrencyRequest, LoginRequest } from '../modules/app/store/interfaces';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    protected webServiceUri: string = environment.webServiceUri;
    constructor(protected http: HttpClient) {
    }

    public getUser(userId: string) {
        let url = this.webServiceUri + `products/${userId}`;
        return this.http.get("http://localhost:3000/products/1");
    }
    public getAllCriptos(): Observable<any> {
        // const url = 'https://www.binance.com/bapi/asset/v2/public/asset/asset/get-all-asset';
        const url = 'https://www.binance.com/bapi/composite/v1/public/marketing/symbol/list';
        let res = this.http.get<any>(url);        
        return this.http.get<any>(url);
    }

    public getSingleCryptoPriceRequest(assetCode: string): Observable<any> {
        let url = `https://api.binance.com/api/v3/ticker/price?symbol=${assetCode}USDT`;
        return this.http.get<any>(url);
    }

    public loginRequest(params: LoginRequest): Observable<any> {
        let url = 'http://localhost:3000/user/login';
        return this.http.post<any>(url, params);
    }
    public createUserCurrencyRequest(params: CreateUserCurrencyRequest){
        let url = 'http://localhost:3000/user_currency/create';
        return this.http.post<any>(url, params);
    }

    public getUserCurrencyRequest(params: CreateUserCurrencyRequest){
        let url = 'http://localhost:3000/user_currency/currencyName/bg';
        return this.http.get<any>(url);
    }
}
export interface User {
    id: string,
    title: string,
    description: string,
    price: number
}