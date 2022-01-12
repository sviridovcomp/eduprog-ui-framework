import React, { FC, useState } from "react";

import "./InputCardForm.scss";
import { ICardProps, PaymentServiceIcon } from "@common/CreditCard";
import { CardChip } from "@icons/icons";
import InputCard from "@components/Inputs/InputCard/InputCard";
import Card from "@components/Card/Card";

export type InputCardFormPropsType = {
  label: string;
};

const InputCardForm: FC<InputCardFormPropsType> = () => {
  const [card, setCard] = useState<ICardProps>({
    number: "",
    cvc: "",
    expireDate: "",
  });

  const cardNumberChange = (value: string) => {
    setCard({
      number: value.replace(/\s/g, ""),
    } as ICardProps);
  };

  return (
    <div className="card-form">
      <Card card={card} />

      <fieldset>
        <InputCard
          label="Номер карты"
          onChange={cardNumberChange}
          showPaymentService={false}
        />
      </fieldset>
    </div>
  );
};

export default InputCardForm;
