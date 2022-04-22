// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 62 41"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M53.858 17.788c0-3.725 2.823-7.19 6.801-7.19.18 0 .35.024.523.034C53.98 4.03 44.379 0 33.836 0 19.685 0 7.24 7.26 0 18.253c.951.03 1.846.05 2.605.05 4.234 0 10.795-.515 10.795-.515 2.181-.13 2.438 3.08.256 3.335 0 0-2.194.259-4.635.388l5.624 16.728a36.908 36.908 0 0012.301 2.094c1.801 0 3.572-.13 5.303-.377l.385-1.158-6.306-17.285a74.993 74.993 0 01-4.251-.388c-2.182-.13-1.927-3.465.259-3.336 0 0 6.687.515 10.666.515 4.236 0 10.794-.515 10.794-.515 2.184-.13 2.44 3.08.257 3.336 0 0-2.196.258-4.633.388l4.872 14.496c4.947-2.66 9.137-6.416 12.193-10.922-1.472-2.444-2.627-4.72-2.627-7.299z"
        }
        fill={"#2795B7"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
