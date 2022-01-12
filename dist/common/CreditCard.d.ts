import React from "react";
export interface ICardProps {
    number: string;
    cvc: string;
    expireDate: string;
}
export declare const PaymentServiceIcon: (cardNumber: string) => React.ReactNode;
