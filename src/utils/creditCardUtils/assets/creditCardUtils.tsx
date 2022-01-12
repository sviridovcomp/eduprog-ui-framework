import { Maestro, Mastercard, Visa } from "@icons/icons";
import React from "react";

export interface ICardOptions {
  number: string;
  cvc: string;
  expireDate: string;
}

export enum PaymentServiceIconSize {
  Small,
  Large,
}

export const PaymentServiceIcon = (
  cardNumber: string,
  iconSize: PaymentServiceIconSize = PaymentServiceIconSize.Small
): React.ReactNode => {
  if (cardNumber.length < 1) {
    return;
  }

  const definePaymentService = (cardNumberPrefix: string) => {
    return cardNumber.startsWith(cardNumberPrefix);
  };

  if (["4"].some(definePaymentService)) {
    if (iconSize == PaymentServiceIconSize.Large) {
      return (
        <img
          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
          alt=""
        />
      );
    } else {
      return <Visa width={48} height={48}/>;
    }
  } else if (["51", "52", "53", "54", "55"].some(definePaymentService)) {
    if (iconSize == PaymentServiceIconSize.Large) {
      return (
        <img
          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png"
          alt=""
        />
      );
    } else {
      return <Mastercard width={48} height={48}/>;
    }
  } else if (["50", "56", "57", "58", "63", "67"].some(definePaymentService)) {
    return <Maestro width={48} height={48}/>;
  }

  return null;
};
