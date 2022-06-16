import React, { FC } from "react";

export interface IInputAutocompleteProps {
  options?: Map<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const InputAutocomplete: FC<IInputAutocompleteProps> = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolore ipsum
      minima omnis quidem repudiandae, sunt tenetur! Beatae commodi culpa
      delectus enim excepturi illo ipsam, reiciendis similique tempore ullam
      vitae!
    </div>
  );
};

export default InputAutocomplete;
