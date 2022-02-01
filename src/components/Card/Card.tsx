import React, { FC } from "react";
import { ICardProps } from "@common/CreditCard";
import { CardChip } from "@icons/icons";
import { PaymentServiceIcon } from "@common/CreditCard";
import { importAll, splittingStringToBatches } from "@utils/utils/utils";
const images = importAll(
  require.context("../../assets/img/cardBacks", false, /\.(png|jpe?g|svg)$/)
);
import "./Card.scss";
import classNames from "classnames";

export type CardPropsType = {
  card: ICardProps;
  expiresDateVerbose?: string;
  expiresDateReductionVerbose?: string;
  cardHolderVerbose?: string;
  fullNameVerbose?: string;
  flip?: boolean;
};

const Card: FC<CardPropsType> = ({
  card,
  expiresDateVerbose = "Expires",
  expiresDateReductionVerbose = "MM/YY",
  cardHolderVerbose = "Card Holder",
  fullNameVerbose = "Full Name",
  flip = false,
}) => {
  const mapCardNumber = (number: string) => {
    if (number.length >= 16) {
      return splittingStringToBatches(number);
    } else {
      let mappedNumber = number;
      while (mappedNumber.length < 16) {
        mappedNumber += "*";
      }
      return splittingStringToBatches(mappedNumber);
    }
  };

  return (
    <div
      className={classNames("card", { "card-rotate": flip })}
      style={{ background: `url(${images[8]})` }}
    >
      <div className="card-top">
        <div className="card-chip">
          <CardChip width={48} height={48} />
        </div>

        <div className="card-payment-service">
          {card.number ? PaymentServiceIcon(card.number) : ""}
        </div>
      </div>

      <div className="card-body" tabIndex={1}>
        <div className="card-number">{mapCardNumber(card.number)}</div>
      </div>

      <div className="card-bottom">
        <div className="card-holder">
          <div style={{ color: "#bdbfcc" }}>{cardHolderVerbose}</div>
          <div className="card-bottom-text">{fullNameVerbose}</div>
        </div>

        <div className="card-expires">
          <div style={{ color: "#bdbfcc" }}>{expiresDateVerbose}</div>
          <div className="card-bottom-text">{expiresDateReductionVerbose}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
