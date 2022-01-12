import React from "react";
export interface ICardOptions {
    number: string;
    cvc: string;
    expireDate: string;
}
export declare enum PaymentServiceIconSize {
    Small = 0,
    Large = 1
}
export declare const PaymentServiceIcon: (cardNumber: string, iconSize?: PaymentServiceIconSize) => React.ReactNode;
