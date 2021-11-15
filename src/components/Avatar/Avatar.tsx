import React, { FC } from "react";
import "./Avatar.scss";

export type AvatarPropsType = {
  /**
   * Круглый аватар
   */
  rounded: boolean;

  /**
   * Ссылка на картинку аватара
   */
  avatarUrl?: string;

  /**
   * Имя (Аватар показывает первые буквы имени, если изображения нет)
   */
  text: string;

  /**
   * Размер аватара
   */
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};

/**
 * Компонент для показа аватара пользователя
 */
const Avatar: FC<AvatarPropsType> = ({
  rounded = false,
  avatarUrl,
  text,
  size = "md",
}) => {
  const rootClasses = [
    "avatar",
    size ? `avatar-size_${size}` : "",
    rounded ? "avatar-rounded" : "",
  ];
  const avatarFormattedText =
    size == "xs" || size == "sm"
      ? text.split(" ")[0][0]
      : `${text.split(" ")[0][0]}${text.split(" ")[1][0]}`;

  return (
    <div className={rootClasses.join(" ")}>
      {avatarUrl && <img className="avatar-img" src={avatarUrl} alt="" />}

      {!avatarUrl && <div className="avatar-text">{avatarFormattedText}</div>}
    </div>
  );
};

export default Avatar;
