// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IsoStackSvgrepoCom1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IsoStackSvgrepoCom1Icon(props: IsoStackSvgrepoCom1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 91 91"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M45.5 51.188L0 28.438l45.5-22.75L91 28.438l-45.5 22.75zM81.883 40.95L91 45.5 45.5 68.25 0 45.5l9.117-4.55L45.5 59.133 81.883 40.95zm0 17.063L91 62.563l-45.5 22.75L0 62.563l9.117-4.55L45.5 76.195l36.383-18.182z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default IsoStackSvgrepoCom1Icon;
/* prettier-ignore-end */
