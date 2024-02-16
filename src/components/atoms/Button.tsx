import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondary-light";
  size?: "sm" | "md" | "lg";
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  ...props
}: IButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 font-medium rounded-md w-fit ${conditionalVariant(
        variant
      )} ${conditionalSize(size)}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

// conditional styles
const conditionalVariant = (variant: string): string => {
  const defaultVariant =
    "bg-primary text-white hover:shadow-md hover:bg-primary-light transition-colors duration-200 ease-in-out disabled:bg-primary-light";

  switch (variant) {
    case "primary":
      return defaultVariant;
    case "secondary":
      return "bg-secondary text-white hover:shadow-md hover:bg-secondary-light transition-colors duration-200 ease-in-out disabled:bg-primary-light";
    case "secondary-light":
      return "bg-secondary-light text-white hover:scale[1.02]";
    default:
      return defaultVariant;
  }
};

const conditionalSize = (size: string): string => {
  const defaultVariant = "px-6 py-2.5 text-lg";

  switch (size) {
    case "md":
      return defaultVariant;
    case "sm":
      return "px-5 py-2.5 text-base";
    case "lg":
      return "px-6 py-3 text-lg";
    default:
      return defaultVariant;
  }
};
