// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ElementorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ElementorIcon(props: ElementorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 48"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M38.95 3H2.05C.915 3 0 3.938 0 5.1v37.8C0 44.063.915 45 2.05 45h36.9c1.135 0 2.05-.938 2.05-2.1V5.1c0-1.162-.915-2.1-2.05-2.1zM15.036 33.328h-3.642V14.672h3.642v18.656zm14.58 0H18.678v-3.731h10.936v3.731zm0-7.462H18.678v-3.732h10.936v3.732zm0-7.472H18.678v-3.731h10.936v3.73z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default ElementorIcon;
/* prettier-ignore-end */
