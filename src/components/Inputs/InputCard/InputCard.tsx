import React, { useState } from "react";
import { FC } from "react";
import BaseInput from "../BaseInput/BaseInput";
import {
  ICardProps,
  PaymentServiceIcon,
} from "@common/CreditCard";

export type InputCardPropsType = {
  label: string;

  showPaymentService?: boolean;

  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const InputCard: FC<InputCardPropsType> = ({
  label,
  showPaymentService = true,
  onChange,
}) => {
  const [card, setCard] = useState<ICardProps>({
    number: "",
    cvc: "",
    expireDate: "",
  } as ICardProps);

  const inputChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    const cardNumberNumbers = value.replace(/\D/g, "");
    let formattedCardNumber = cardNumberNumbers.slice(0, 4);

    for (let i = 4; i < 16; i += 4) {
      if (cardNumberNumbers.length >= i) {
        formattedCardNumber += ` ${cardNumberNumbers.slice(i, i + 4)}`;
      }
    }

    setCard({
      number: formattedCardNumber,
    } as ICardProps);

    if (onChange) {
      onChange(card.number, event);
    }
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
      } as ICardProps);
    }
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
          rightAdditional={
            showPaymentService ? PaymentServiceIcon(card.number) : null
          }
          autocomplete="cc-number"
        />
      </div>

      <div className="input-card-expired-date"></div>

      <div className="input-card-cvc"></div>
    </div>
  );
};

export default InputCard;
