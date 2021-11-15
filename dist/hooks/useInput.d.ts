import React from 'react';
declare const useInput: (initialValue: string) => {
    value: string;
    onChange: (value: string, event?: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};
export default useInput;
