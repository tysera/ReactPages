// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _1Icon(props: _1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 457 344"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M2 342C284 342 52 2 254.5 2h201"}
        stroke={"#7E00AD"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeDasharray={"8 8"}
      ></path>
    </svg>
  );
}

export default _1Icon;
/* prettier-ignore-end */
