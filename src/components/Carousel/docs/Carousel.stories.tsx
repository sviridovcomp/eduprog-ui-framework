import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Carousel } from "../";
import CarouselButton from "@components/Carousel/CarouselButton/CarouselButton";
import Island from "@components/Island/Island";
import "./Carousel.scss";
import range from "lodash/range";
import random from "lodash/random";
import Skeleton from "@components/Skeleton/Skeleton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const IslandItem = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const seed = random(0, 9007199254740992);
  return (
    <Island hoverTransition="translateY">
      <div style={{ position: "relative", height: 200 }}>
        {!imageLoaded && <Skeleton variant="rectangular" animation="wave" />}
        <img
          src={`https://picsum.photos/seed/${seed}/344/200`}
          width="100%"
          height="100%"
          decoding="async"
          style={{
            pointerEvents: "none",
            userSelect: "none",
            objectFit: "cover",
          }}
          alt={seed.toString()}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div>
        <p style={{ padding: "0 1rem", userSelect: "none" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          dictum dolor. Donec rhoncus nisi luctus, pretium mi laoreet, bibendum.
        </p>
      </div>
    </Island>
  );
};

const PlaygroundTemplate: ComponentStory<typeof Carousel> = (args) => {
  return (
    <div>
      {/* @ts-ignore */}
      <Carousel {...args}>
        {range(1, 10).map((item) => (
          <IslandItem key={item} />
        ))}
      </Carousel>
    </div>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  customRightArrow: (
    <CarouselButton
      style={{ right: "1%", position: "absolute" }}
      direction="right"
    />
  ),
  customLeftArrow: (
    <CarouselButton
      style={{ left: "1%", position: "absolute" }}
      direction="left"
    />
  ),
  className: "Carousel",
  responsive: responsive,
  itemClass: "Carousel-item",
};
