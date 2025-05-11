interface ButtonProps {
  type?: "default" | "destructive" | "outline" | "disabled";
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "default",
  label = "Galaxy Button",
  onClick,
}) => {
  const buttonStyles: Record<
    "default" | "destructive" | "outline" | "disabled",
    { bgColor: string; textColor: string; border: string; disabled?: boolean }
  > = {
    default: {
      bgColor: "bg-black",
      textColor: "text-white",
      border: "",
    },
    destructive: {
      bgColor: "bg-red-500",
      textColor: "text-white",
      border: "",
    },
    outline: {
      bgColor: "bg-transparent",
      textColor: "text-black",
      border: "border border-black",
    },
    disabled: {
      bgColor: "bg-gray-400",
      textColor: "text-gray-200",
      border: "",
      disabled: true,
    },
  };

  const { bgColor, textColor, border, disabled } = buttonStyles[type];

  return (
    <button
      className={`py-2 px-4 rounded-md flex items-center justify-center w-[200px] ${bgColor} ${border}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      <span className={`text-base ${textColor}`}>{label}</span>
    </button>
  );
};

export default Button;
