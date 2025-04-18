import React from "react";
import IIconProps from "@/shared/interface/ui/icon";

const LikeIcon = ({ fill = "none", stroke = "black", ...props }: IIconProps) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.25 7.3125C23.25 4.2059 20.6267 1.6875 17.3906 1.6875C14.9711 1.6875 12.8941 3.09535 12 5.10427C11.1059 3.09535 9.0289 1.6875 6.60938 1.6875C3.37333 1.6875 0.75 4.2059 0.75 7.3125C0.75 16.3382 12 22.3125 12 22.3125C12 22.3125 23.25 16.3382 23.25 7.3125Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LikeIcon;
