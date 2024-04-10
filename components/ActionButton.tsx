import React from "react";

interface ActionButtonProps {
  label?: string;
  onClick?: () => void;
  size?: "default";
  color?: "default";
  shape?: "default";
  buttonType?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

const classes = {
  sizes: {
    default: "py-2 px-4",
  },
  colors: {
    default: "bg-fern-500 hover:bg-fern-700 text-white",
  },
  shapes: {
    default: "rounded",
  },
  base: 'flex items-center justify-center gap-x-2 text-lg font-poppins'
};

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  size = "default",
  color = "default",
  shape = "default",
  buttonType = "button",
  children
}) => {
  return (
    <button
      type={buttonType}
      className={`${classes.sizes[size]} ${classes.colors[color]} ${classes.shapes[shape]} ${classes.base}`}
      onClick={onClick}
    >
      {children || label}
    </button>
  );
};

export default ActionButton;