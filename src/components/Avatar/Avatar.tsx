import React, { FC } from "react";
import "./Avatar.scss";
import { defaultProps } from "@utils/defaultProps";
import classNames from "classnames";

export type AvatarPropsType = defaultProps & {
  /**
   * Круглый аватар
   */
  rounded?: boolean;

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

  autoColor?: boolean;
};

/**
 * Компонент для показа аватара пользователя
 */
const Avatar: FC<AvatarPropsType> = ({
  rounded = false,
  avatarUrl,
  text,
  size = "md",
  autoColor,
  className = "",
}) => {
  const rootClasses = classNames(
    "avatar",
    { [`avatar-size_${size}`]: size },
    { "avatar-rounded": rounded },
    className
  );

  const colors = ["#b5eeeb", "#c5b5ee", "#dcb5ee"];

  const avatarFormattedText =
    size == "xs" || size == "sm"
      ? text.split(" ")[0][0]
      : `${text.split(" ")[0][0]}${text.split(" ")[1][0]}`;

  return (
    <div
      className={rootClasses}
      style={{
        backgroundColor: autoColor
          ? colors[Math.floor(Math.random() * colors.length)]
          : "grey",
      }}
    >
      {avatarUrl && <img className="avatar-img" src={avatarUrl} alt={text} />}

      {!avatarUrl && <div className="avatar-text">{avatarFormattedText}</div>}
    </div>
  );
};

export default Avatar;
