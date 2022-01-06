import React, { useState } from "react";
import { FC } from "react";
import BaseInput from "../BaseInput/BaseInput";
import { Visa, Mastercard } from "@components/Inputs/InputCard/icons/icons";

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

  const inputKeyDown = (event: any) => {
    if (
      card.number &&
      event.key == "Backspace" &&
      card?.number[event.target.selectionStart - 1] == " "
    ) {
      setCard({
        number: card.number.slice(0, event.target.selectionStart - 1),
      } as ICardOptions);
    }
  };

  enum PaymentService {
    Visa = "4",
    MasterCard = "5",
  }

  const PaymentServiceIcon = (cardNumber: string) => {
    if (cardNumber.length < 1) {
      return;
    }

    const paymentService = cardNumber[0] as PaymentService;

    if (paymentService == PaymentService.Visa) {
      return <Visa />;
    } else if (paymentService == PaymentService.MasterCard) {
      return <Mastercard />;
    }
  };

  return (
    <div className="input-card">
      <div className="input-card-number">
        <BaseInput
          label={"Номер карты"}
          defaultValue={card.number}
          inputType="card"
          onChange={inputChange}
          onKeyDown={inputKeyDown}
          rightAdditional={PaymentServiceIcon(card.number)}
          autocomplete="cc-number"
        />
      </div>

      <div className="input-card-expired-date">

      </div>

      <div className="input-card-cvc">

      </div>
    </div>
  );
};

export default InputCard;
