export const asyncSleep = async (milliseconds: number) => {
  return await new Promise((resolve) => setTimeout(resolve, milliseconds));
};


export const removeArrayItem = <Type>(array: Array<Type>, item: Type) => {
  array.splice(array.indexOf(item), 1);
  return array
};