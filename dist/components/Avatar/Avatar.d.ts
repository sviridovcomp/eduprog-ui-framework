import { FC } from "react";
import "./Avatar.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type AvatarPropsType = defaultProps & {
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
declare const Avatar: FC<AvatarPropsType>;
export default Avatar;
