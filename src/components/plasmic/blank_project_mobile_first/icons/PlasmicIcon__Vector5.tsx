// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 18"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M31.452 0C18.744 0 7.426 5.866 0 15.021c6.518 1.355 13.675 2.106 21.187 2.106 14.224 0 27.184-2.687 36.929-7.095C50.993 3.792 41.666 0 31.452 0z"
        }
        fill={"#3FB5D1"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */
