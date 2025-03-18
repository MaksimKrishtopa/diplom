import clsx from "clsx";

export const buttonStyles = (styleType: "primary" | "secondary" | "selective" = "primary") =>
    clsx(
        "transition-colors",
        "duration-200",
        {
            "bg-primary": styleType === "primary",
            "w-[346px]": styleType === "primary" || styleType === "secondary",
            "h-12": styleType === "primary" || styleType === "secondary",
            "rounded-2xl": styleType === "primary" || styleType === "secondary",
            "text-white-text": styleType === "primary" || styleType === "selective",
            "font-roboto": styleType === "primary" || styleType === "selective",
            "cursor-pointer": styleType === "primary",
            "py-2": styleType === "primary" || styleType === "secondary",
            "px-4": styleType === "primary" || styleType === "secondary",
            "bg-secondary": styleType === "secondary",
            "border-secondary-border": styleType === "secondary",
            "text-blue-text": styleType === "secondary",
            "bg-selective": styleType === "selective",
            "w-52": styleType === "selective",
            "h-[60px]": styleType === "selective",
            "rounded-lg": styleType === "selective",
            "hover:bg-selective-hover": styleType === "selective",
            "hover:shadow-selective-hover": styleType === "selective",
            "active:bg-selective-active": styleType === "selective",
            "disabled:bg-selective-disable": styleType === "selective",
            "disabled:cursor-not-allowed": styleType === "selective",
            "transition-all": styleType === "selective",
            "duration-200": styleType === "selective",
        }
    );