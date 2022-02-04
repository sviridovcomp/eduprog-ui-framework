import { useState } from "react";
import { SelectValue } from "@components/Select/SelectLargeDevice/Select";

export function useSelect<Type>(initialValue: SelectValue<Type>) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (option: SelectValue<Type>) => {
    setValue(option);
  };

  return { value, setValue, handleChange };
}
