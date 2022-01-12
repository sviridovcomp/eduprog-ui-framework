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

export const splittingStringToBatches = (
  content: string,
  batchSize = 4,
  batchCount = 4
) => {
  if (content.length != batchSize * batchCount) {
    throw new Error("Unable to split the batches string");
  }

  let formattedContent = "";
  for (let i = 0; i < batchCount * batchSize; i += batchSize) {
    formattedContent += `${content.slice(i, i + batchSize)} `;
  }
  return formattedContent.trim();
};
