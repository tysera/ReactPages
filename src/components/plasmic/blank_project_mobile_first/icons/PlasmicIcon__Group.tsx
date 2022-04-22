// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 81 81"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 40.499c0 16.03 9.315 29.884 22.824 36.446L3.505 24.017A40.377 40.377 0 000 40.499zm41.21 3.541L29.056 79.35A40.483 40.483 0 0040.5 81a40.46 40.46 0 0013.448-2.295 3.74 3.74 0 01-.289-.558L41.21 44.04z"
        }
        fill={"#1C769B"}
      ></path>

      <path
        d={
          "M67.84 38.457c0-5.008-1.801-8.472-3.34-11.169-2.055-3.34-3.98-6.165-3.98-9.499 0-3.724 2.822-7.19 6.8-7.19.18 0 .35.025.523.034A40.325 40.325 0 0040.5 0C26.348 0 13.903 7.26 6.663 18.253c.95.03 1.846.05 2.605.05 4.234 0 10.794-.515 10.794-.515 2.182-.13 2.438 3.08.256 3.335 0 0-2.193.259-4.635.388l14.748 43.866 8.864-26.58L32.99 21.51a73.839 73.839 0 01-4.25-.388c-2.182-.129-1.928-3.464.258-3.335 0 0 6.688.515 10.667.515 4.235 0 10.793-.515 10.793-.515 2.185-.13 2.44 3.08.258 3.335 0 0-2.196.259-4.634.388l14.636 43.532 4.043-13.496c1.744-5.604 3.08-9.626 3.08-13.09zm8.471-13.224c0 4.109-.768 8.728-3.082 14.507L60.86 75.503C72.9 68.485 80.997 55.439 80.997 40.5a40.306 40.306 0 00-4.96-19.431c.176 1.29.274 2.672.274 4.164z"
        }
        fill={"#1C769B"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
