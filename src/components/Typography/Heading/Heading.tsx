import React, { FC } from "react";
import "./Heading.scss";

export type HeadingPropsType = {
  /**
   * Текст заголовка 
   */
  children: string;

  /**
   * Размер заголовка
   */
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};

/**
 * Компонент Заголовок 
 */
const Heading: FC<HeadingPropsType> = ({children, size = "xxl"}) => {
  return (
      <div className="Heading">
        {size === "xxl" &&
            <h1>{children}</h1>
        }

        {size === "xl" &&
            <h2>{children}</h2>
        }

        {size === "lg" &&
            <h3>{children}</h3>
        }

        {size === "md" &&
            <h4>{children}</h4>
        }

        {size === "sm" &&
            <h5>{children}</h5>
        }

        {size === "xs" &&
            <h6>{children}</h6>
        }
      </div>
  )
}

export default Heading