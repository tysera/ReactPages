// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _2Icon(props: _2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 403 4"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M401 2H2"}
        stroke={"#7E00AD"}
        strokeWidth={"4"}
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
        strokeDasharray={"8 8"}
      ></path>
    </svg>
  );
}

export default _2Icon;
/* prettier-ignore-end */
