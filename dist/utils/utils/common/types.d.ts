export type keyCode = number;
export interface KeyValue<Type> {
    [key: string]: Type;
}
export interface IKeyValue<KeyType, ValueType> {
    key: KeyType;
    value: ValueType;
}
