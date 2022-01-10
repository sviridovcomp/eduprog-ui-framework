import React, { useState } from "react";
import { FC } from "react";
import BaseInput from "../BaseInput/BaseInput";
import {
  Visa,
  Mastercard,
  Maestro,
} from "@components/Inputs/InputCard/icons/icons";

export type InputCardPropsType = {
  label: string;
};

interface ICardOptions {
  number: string;
  cvc: string;
  expireDate: string;
}

const InputCard: FC<InputCardPropsType> = ({ label }) => {
  const [card, setCard] = useState<ICardOptions>({
    number: "",
    cvc: "",
    expireDate: "",
  } as ICardOptions);

  const inputChange = (value: string) => {
    const cardNumberNumbers = value.replace(/\D/g, "");
    let formattedCardNumber = cardNumberNumbers.slice(0, 4);

    for (let i = 4; i < 16; i += 4) {
      if (cardNumberNumbers.length >= i) {
        formattedCardNumber += ` ${cardNumberNumbers.slice(i, i + 4)}`;
      }
    }

    setCard({
      number: formattedCardNumber,
    } as ICardOptions);
  };

  const inputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> | undefined
  ) => {
    if (
      event &&
      event.currentTarget.selectionStart &&
      card.number &&
      event.key == "Backspace" &&
      card?.number[event.currentTarget.selectionStart - 1] == " "
    ) {
      setCard({
        number: card.number.slice(0, event.currentTarget.selectionStart - 1),
      } as ICardOptions);
    }
  };

  const PaymentServiceIcon = (cardNumber: string): React.ReactNode => {
    if (cardNumber.length < 1) {
      return;
    }

    const definePaymentService = (cardNumberPrefix: string) => {
      return cardNumber.startsWith(cardNumberPrefix);
    };

    if (["4"].some(definePaymentService)) {
      return <Visa />;
    } else if (["51", "52", "53", "54", "55"].some(definePaymentService)) {
      return <Mastercard />;
    } else if (
      ["50", "56", "57", "58", "63", "67"].some(definePaymentService)
    ) {
      return <Maestro />;
    }

    return null;
  };

  return (
    <div className="input-card">
      <div className="input-card-number">
        <BaseInput
          label={label}
          defaultValue={card.number}
          inputType="card"
          onChange={inputChange}
          onKeyDown={inputKeyDown}
          rightAdditional={PaymentServiceIcon(card.number)}
          autocomplete="cc-number"
        />
      </div>

      <div className="input-card-expired-date"></div>

      <div className="input-card-cvc"></div>
    </div>
  );
};

export default InputCard;
