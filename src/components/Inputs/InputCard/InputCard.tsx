import MasterCard from "@icons/PaymentSystem/MasterCard";
import Mir from "@icons/PaymentSystem/Mir";
import Visa from "@icons/PaymentSystem/Visa";
import {
  getPaymentSystem,
  PaymentSystem,
} from "@utils/utils/payment-system/payment-system";
import React from "react";
import BaseInput from "../BaseInput/BaseInput";
import "./InputCard.scss";

export interface CardDetails {
  number: string;
  expireAt: string;
  cvc: string;
}

export interface IInputCardProps {
  defaultValue: CardDetails;

  onChange: (card: CardDetails) => void;
}

const InputCard = ({ defaultValue, onChange }: IInputCardProps) => {
  const { number, expireAt, cvc } = defaultValue;

  enum ICardInput {
    Number,
    ExpiredAt,
    CVC,
  }

  const separator = (value: string, length = 4): Array<string> => {
    return value.length
      ? [value.slice(0, length), ...separator(value.slice(length), length)]
      : [];
  };

  const cardNumberValidate = (cardNumber: string): string => {
    return separator(cardNumber.replaceAll(/[^\d+]/gm, "")).join(" ");
  };

  const expiresAtValidate = (expiresAt: string) => {
    return expiresAt
      .replace(
        /^([1-9]\/|[2-9])$/g,
        "0$1/" // To handle 3/ > 03/
      )
      .replace(
        /^(0[1-9]{1}|1[0-2]{1})$/g,
        "$1/" // 11 > 11/
      )
      .replace(
        /^([0-1]{1})([3-9]{1})$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^(\d)\/(\d\d)$/g,
        "0$1/$2" // To handle 1/11 > 01/11
      )
      .replace(
        /^(0?[1-9]{1}|1[0-2]{1})([0-9]{2})$/g,
        "$1/$2" // 141 > 01/41
      )
      .replace(
        /^([0]{1,})\/|[0]{1,}$/g,
        "0" // To handle 0/ > 0 and 00 > 0
      )
      .replace(
        /[^\d/]|^[/]{0,}$/g,
        "" // To allow only numbers and /
      )
      .replace(
        /\/\//g,
        "/" // Prevent entering more than 1 /
      );
  };

  const changing = (input: ICardInput, value: string) => {
    const currentValue = { ...defaultValue };

    switch (input) {
      case ICardInput.Number:
        currentValue.number = cardNumberValidate(value);
        break;
      case ICardInput.ExpiredAt:
        currentValue.expireAt = expiresAtValidate(value);
        break;
      case ICardInput.CVC:
        currentValue.cvc = value;
        break;
    }

    onChange(currentValue);
  };

  const PaymentSystemIcon = (): JSX.Element => {
    const paymentSystem = getPaymentSystem(number);

    switch (paymentSystem) {
      case PaymentSystem.Mir:
        return <Mir />;
      case PaymentSystem.Mastercard:
        return <MasterCard />;
      case PaymentSystem.Visa:
        return <Visa />;
    }

    return <></>;
  };

  return (
    <div className="input-card">
      <BaseInput
        label="Card number"
        defaultValue={number}
        controlClassName="input-card-number"
        onChange={(value: string) => changing(ICardInput.Number, value)}
        rightAdditional={<PaymentSystemIcon />}
        autocomplete="cc-number"
        maxLength={19}
      />
      <BaseInput
        label="Expire date"
        defaultValue={expireAt}
        onChange={(value: string) => changing(ICardInput.ExpiredAt, value)}
        maxLength={5}
        controlClassName="input-card-expire"
      />
      <BaseInput
        label="CVC/CVV"
        defaultValue={cvc}
        onChange={(value: string) => changing(ICardInput.CVC, value)}
        maxLength={3}
        controlClassName="input-card-cvc"
      />
    </div>
  );
};

export default InputCard;
