import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  variant = "primary",
  ...props
}: IButtonProps) => {
  return (
    <button
      className={`flex items-center text-lg gap-2 px-6 py-2.5 font-medium rounded-md w-fit ${conditionalVariant(
        variant
      )}`}
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
    default:
      return defaultVariant;
  }
};
