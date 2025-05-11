interface ButtonProps {
  type?: "default" | "call";
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "default",
  label = "Galaxy Button",
  onClick,
}) => {
  const buttonStyles: Record<
    "default" | "call",
    {
      bgColor: string;
      textColor: string;
      border: string;
      padding: string;
      disabled?: boolean;
    }
  > = {
    default: {
      bgColor: "bg-black",
      textColor: "text-white",
      border: "",
      padding: "py-2 px-3",
    },
    call: {
      bgColor: "bg-green-500",
      textColor: "text-white",
      border: "",
      padding: "py-2 px-3",
    },
  };

  const { bgColor, textColor, border, padding, disabled } = buttonStyles[type];

  return (
    <button
      className={`${padding} rounded-md flex items-center justify-center w-auto cursor-pointer ${bgColor} ${border}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <span className={`text-base ${textColor}`}>{label}</span>
    </button>
  );
};

export default Button;
