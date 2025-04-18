import {ReactNode} from 'react';
import IIconProps from "@/shared/interface/ui/icon";

const BackArrowIcon = ({width = "12px", height = "12px", fill = "#5687BB", ...props}: IIconProps): ReactNode => {
    return (
        <svg
            width={width}
            height={height}
            {...props}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 7.75C10.5 6.23122 9.26878 5 7.75 5H2.56066L4.78033 7.21967C5.07322 7.51256 5.07322 7.98744 4.78033 8.28033C4.48744 8.57322 4.01256 8.57322 3.71967 8.28033L0.21967 4.78033C-0.0732234 4.48744 -0.0732233 4.01256 0.21967 3.71967L3.71967 0.21967C4.01256 -0.0732233 4.48744 -0.0732233 4.78033 0.21967C5.07322 0.512563 5.07322 0.987437 4.78033 1.28033L2.56066 3.5L7.75 3.5C10.0972 3.5 12 5.40279 12 7.75C12 10.0972 10.0972 12 7.75 12H6.75C6.33579 12 6 11.6642 6 11.25C6 10.8358 6.33579 10.5 6.75 10.5H7.75C9.26878 10.5 10.5 9.26878 10.5 7.75Z"
                fill={fill}
            />
        </svg>
    );
};

export default BackArrowIcon;