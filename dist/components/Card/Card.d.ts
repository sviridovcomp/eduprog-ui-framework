import { FC } from "react";
import { ICardProps } from "@common/CreditCard";
import "./Card.scss";
export declare type CardPropsType = {
    card: ICardProps;
    expiresDateVerbose?: string;
    expiresDateReductionVerbose?: string;
    cardHolderVerbose?: string;
    fullNameVerbose?: string;
    flip?: boolean;
};
declare const Card: FC<CardPropsType>;
export default Card;
