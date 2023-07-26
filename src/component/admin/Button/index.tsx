import React from "react";

type Props = {
  type: "primary" | "danger" | "success";
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

const Button = ({
  type,
  primary,
  danger,
  success,
  onClick,
  icon,
  children,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
    ${type === "primary" ? "primary" : ""}
    ${type === "danger" ? "danger" : ""}
    ${type === "success" ? "success" : ""}
    `}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
