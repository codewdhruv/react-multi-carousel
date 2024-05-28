import * as React from "react";
import { StateCallBack } from "./types";

const LeftArrow = (props: any): any => {
  if (props.customLeftArrow) {
    return React.cloneElement(props.customLeftArrow, {
      onClick: () => props.previous(),
      carouselState: props.getState()
    });
  } else {
    return React.createElement("button", {
      "aria-label": "Go to previous slide",
      className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--left",
      onClick: props.previous
    });
  }
};

const RightArrow = (props: any): any => {
  if (props.customRightArrow) {
    return React.cloneElement(props.customRightArrow, {
      onClick: () => props.next(),
      carouselState: props.getState()
    });
  } else {
    return React.createElement("button", {
      "aria-label": "Go to next slide",
      className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--right",
      onClick: props.next
    });
  }
};

export { LeftArrow, RightArrow };
