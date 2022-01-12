import React, { FC, useState } from "react";
import { importAll, random } from "@utils/utils/utils";
const images = importAll(
  require.context("../../../assets/img/cardBacks", false, /\.(png|jpe?g|svg)$/)
);
import "./InputCardForm.scss";
import {
  ICardOptions,
  PaymentServiceIcon,
  PaymentServiceIconSize,
} from "@utils/creditCardUtils/assets/creditCardUtils";
import { CardChip } from "@icons/icons";
import InputCard from "@components/Inputs/InputCard/InputCard";

export type InputCardFormPropsType = {
  label: string;
};

const InputCardForm: FC<InputCardFormPropsType> = () => {
  const [card, setCard] = useState<ICardOptions>({
    number: "",
    cvc: "",
    expireDate: "",
  });

  const cardNumberChange = (value: string) => {
    setCard({
      number: value,
    } as ICardOptions);
  };

  return (
    <div className="card-form">
      <div
        className="card"
        style={{ background: `url(${images[random(1, 25)]})` }}
      >
        <div className="card-top">
          <div className="card-chip">
            <CardChip width={48} height={48} />
          </div>

          <div className="card-payment-service">
            {PaymentServiceIcon(card.number, PaymentServiceIconSize.Large)}
          </div>
        </div>
      </div>

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
