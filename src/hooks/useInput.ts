import React, { useState } from 'react';

const useInput = (initialValue: string) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (value: string, event?: React.ChangeEvent<HTMLInputElement>) => {
		setValue(value);
	}

	return {
		value, onChange
	}
}

export default useInput;