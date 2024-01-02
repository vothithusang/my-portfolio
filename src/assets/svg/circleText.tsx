import { SVGProps } from "react";
const CircleText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    width={150}
    height={150}
    {...props}
  >
    <defs>
      <path id="a" d="M90 150a60 60 0 0 1 120 0 60 60 0 0 1-120 0" />
    </defs>
    <circle cx={150} cy={100} r={150} fill="none" />
    <use xlinkHref="#a" fill="none" />
    <text>
      <textPath xlinkHref="#a" fill="white">
        {"Thank for scrollingiget in touch!"}
      </textPath>
    </text>
  </svg>
);
export default CircleText;
