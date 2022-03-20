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