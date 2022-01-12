import React from "react";
import {Maestro, Mastercard, Visa} from "@icons/icons";

export interface ICardProps {
  number: string;
  cvc: string;
  expireDate: string;
}

export const PaymentServiceIcon = (
  cardNumber: string,
): React.ReactNode => {
  if (cardNumber.length < 1) {
    return;
  }

  const definePaymentService = (cardNumberPrefix: string) => {
    return cardNumber.startsWith(cardNumberPrefix);
  };

  if (["4"].some(definePaymentService)) {
      return <Visa width={48} height={48}/>;
  } else if (["51", "52", "53", "54", "55"].some(definePaymentService)) {
      return <Mastercard width={48} height={48}/>;
  } else if (["50", "56", "57", "58", "63", "67"].some(definePaymentService)) {
    return <Maestro width={48} height={48}/>;
  }

  return null;
};