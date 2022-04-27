import { Data } from "@angular/router"

export interface ListRequestRes {

    baseAsset?: string;
    circulatingSupply?: number;
    cmcUniqueId?: number;
    dayChange?: number;
    dayChangeAmount?: number;
    explorerUrls?: string;
    fullName?: string;
    id?: number;
    imageUrl?: string;
    issueDate?: Data;
    issuePrice?: number;
    issuePriceUsed?: number;
    localFullName?: string;
    logo?: string;
    mapperName?: string;
    marketCap?: number;
    maxSupply?: any;
    name?: string;
    price?: number;
    quoteAsset?: string;
    rank?: number;
    slug?: string;
    source?: string;
    symbol?: string;
    tagInfos?: Array<{
        display?: string;
        tag?: string;
    }>
    tags?: Array<string>;
    totalSupply?: number;
    tradeUrl?: string;
    url?: string;
    volume?: number;
    volumeGlobal?: number;
    website?: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface SignupRequest {
    email: string;
    password: string;
    balance: number;
}

export interface BotRequest {
    user1: string;
    currency: string;
    price: number;
    action: string;
}

export interface CreateUserCurrencyRequest {
    user: string;
    currency: [string];
}

export interface BotRequest2 {
    user?: string;
    currency?: string;
    price?: number;
    action?: string;
}

export interface BotTable {
    id?: string;
    user?: string;
    currency?: string;
    price?: number;
    action?: string;
}