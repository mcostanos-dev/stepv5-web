import { cn } from "@/lib/utils";

// Button styles
const buttonStyles = {
  base: `inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  variants: {
    default: "bg-red-500 text-white hover:bg-red-400",
    secondary:
      "bg-gray-50 text-gray-800 hover:bg-gray-200 border border-gray-200 ",
    emerald: "bg-emerald-400 text-white hover:bg-emerald-600",
    ghost: "hover:bg-gray-100 hover:text-gray-800 ",
    link: "text-primary underline-offset-4 hover:underline",
    positive: "hover:text-white hover:bg-teal-500 text-teal-500 ",
  },
  sizes: {
    default: "h-10 px-4 py-2",
    tiny: "h-6 rounded-md px-1",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
};

// Combine base styles with variant , size and additional  classes
const getButtonClasses = (variant, btnSize, className) => {
  return cn(
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes[btnSize],
    className
  );
};

const Button = ({
  children,
  variant = "default",
  btnSize = "default",
  type = "button",
  className = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled = false,
}) => {
  const classes = getButtonClasses(variant, btnSize, className);
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export { Button, getButtonClasses };
