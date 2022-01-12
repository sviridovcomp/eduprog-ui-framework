import { FC } from "react";
import { ICardProps } from "@common/CreditCard";
import "./Card.scss";
export declare type CardPropsType = {
    card: ICardProps;
};
declare const Card: FC<CardPropsType>;
export default Card;
