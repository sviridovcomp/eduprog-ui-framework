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
declare const InputCard: ({ defaultValue, onChange }: IInputCardProps) => JSX.Element;
export default InputCard;
