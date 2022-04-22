// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M39.042 0h-26.29v13.182h12.936c.46 0 .835.373.835.834v12.758h13.354V.836A.835.835 0 0039.042 0z"
        }
        fill={"#8E75FF"}
      ></path>

      <path
        opacity={".405"}
        d={
          "M12.75 0v13.182H.418a.418.418 0 01-.293-.716L12.751 0zm14.484 39.253a.418.418 0 01-.711-.297V26.774h13.354L27.234 39.252v.001zM12.75 13.182h13.356c.229 0 .417.186.417.416v13.176H13.587a.835.835 0 01-.835-.835V13.182h-.002z"
        }
        fill={"#8E75FF"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
