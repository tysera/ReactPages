// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape3Icon(props: Shape3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M20 10.5L10.042 1M20 10.5L10.042 20M20 10.5H0"}
        stroke={"#7E00AD"}
      ></path>
    </svg>
  );
}

export default Shape3Icon;
/* prettier-ignore-end */
