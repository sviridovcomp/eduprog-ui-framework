import React, { FC } from "react";
import "./Avatar.scss";
import { defaultProps } from "@utils/defaultProps";
import clsx from "clsx";

export type AvatarPropsType = defaultProps & {
  /**
   * Rounded mode
   */
  rounded?: boolean;

  /**
   * Link to avatar picture
   */
  avatarUrl?: string;

  /**
   * Name (Avatar shows first letters of name if there is no image)
   */
  text: string;

  /**
   * Size
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

  /**
   * Autocolor if there is no image
   */
  autoColor?: boolean;
};

/**
 * Component to creating user avatars. It can be photo, icon or first letters of name.
 */
const Avatar: FC<AvatarPropsType> = ({
  rounded = false,
  avatarUrl,
  text = "undefined",
  size = "md",
  autoColor,
  className = "",
}) => {
  const rootClasses = clsx(
    "avatar",
    { [`avatar-size_${size}`]: size },
    { "avatar-rounded": rounded },
    className
  );

  const colors = ["#b5eeeb", "#c5b5ee", "#dcb5ee"];

  const avatarFormattedText = () => {
    if (/\S\s\S/gm.test(text)) {
      return size == "xs" || size == "sm"
        ? text.split(" ")[0][0]
        : `${text.split(" ")[0][0]}${text.split(" ")[1][0]}`;
    } else {
      return text[0];
    }
  };
  return (
    <div
      className={rootClasses}
      style={{
        backgroundColor: autoColor
          ? colors[Math.floor(Math.random() * colors.length)]
          : "grey",
      }}
    >
      {avatarUrl && (
        <img
          className="avatar-img"
          decoding="async"
          loading="lazy"
          src={avatarUrl}
          alt={text}
        />
      )}

      {!avatarUrl && <div className="avatar-text">{avatarFormattedText()}</div>}
    </div>
  );
};

export default Avatar;
