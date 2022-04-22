// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape2Icon(props: Shape2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M16 8.5L8.034 1M16 8.5L8.034 16M16 8.5H0"}
        stroke={"#fff"}
      ></path>
    </svg>
  );
}

export default Shape2Icon;
/* prettier-ignore-end */
