export const asyncSleep = async (milliseconds: number) => {
  return await new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const removeArrayItem = <Type>(array: Array<Type>, item: Type) => {
  array.splice(array.indexOf(item), 1);
  return array;
};

export const importAll = (r: any) => {
  return r.keys().map(r);
};

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;