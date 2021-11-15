import React from 'react';
declare const useInput: (initialValue: string) => {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default useInput;
