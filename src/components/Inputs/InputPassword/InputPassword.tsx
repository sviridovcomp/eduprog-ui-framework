import React, { FC, useEffect, useState } from "react";
import BaseInput, { TextInputProps } from "../BaseInput/BaseInput";
import "./InputPassword.scss";
import { SimplePasswords } from "@components/Inputs/InputPassword/InputPasswordUtils";

export type InputPasswordPropsType = TextInputProps & {
  /**
   * Is textfield validation required
   */
  isValidation?: boolean;
};

/**
 * InputPassword is a great solution for entering your password
 */
const InputPassword: FC<InputPasswordPropsType> = ({
  label,
  name = "",
  isValidation = false,
  defaultValue,
  ...rest
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  enum ErrorStatus {
    TooShort,
    ForbiddenChars,
    TooEasy,
    TooEasePickUp,
  }
  const [error, setError] = useState<ErrorStatus>();

  const router = [
    ["Пароль слишком короткий", "Используйте хотя бы 6 символов"],
    [
      "Пароль содержит запрещённые символы",
      // eslint-disable-next-line quotes
      'Для пароля можно использовать только буквы латинского алфавита, цифры и символы: `!@#$%^&*()_=+[]{};:"\\|,.',
    ],
    [
      "Пароль слишком простой",
      "Используйте большие и маленькие буквы, добавьте цифры",
    ],
    [
      "Пароль легко подобрать",
      "Замените одну или две маленькие буквы большими, добавьте цифры",
    ],
  ];

  useEffect(() => {
    if (defaultValue) {
      if (/[а-яА-Я]/gm.test(defaultValue)) {
        setError(ErrorStatus.ForbiddenChars);
      } else if (defaultValue.length < 6) {
        setError(ErrorStatus.TooShort);
      } else if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm.test(
          defaultValue
        )
      ) {
        setError(ErrorStatus.TooEasy);
      } else if (
        SimplePasswords.some(
          (password) => password == defaultValue.toLowerCase()
        )
      ) {
        setError(ErrorStatus.TooEasePickUp);
      } else {
        setError(undefined);
      }
    }
  }, [defaultValue]);

  return (
    <div className="input-password">
      <BaseInput
        inputType={passwordVisible ? "text" : "password"}
        label={label}
        name={name}
        controlStyle={{ paddingRight: "3rem", ...rest.controlStyle }}
        defaultValue={defaultValue}
        {...rest}
        rightAdditional={
          <div
            className="input-password-toggler"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="currentColor"
              >
                <path
                  d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                  fill="none"
                />
                <path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z" />
              </svg>
            )}

            {!passwordVisible && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="currentColor"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            )}
          </div>
        }
      />

      {isValidation && (
        <>
          <div
            className="input-password-validate"
            style={{
              color: `${error == ErrorStatus.TooEasePickUp ? "orange" : "red"}`,
            }}
          >
            {error != undefined ? router[error][0] : ""}
          </div>
          <div className="input-password-validate-advice">
            {error != undefined ? router[error][1] : ""}
          </div>
        </>
      )}
    </div>
  );
};

export default InputPassword;
