import { cn } from "@/lib/utils";

const HeadingSecondary = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "mb-4 text-xl md:text-xl lg:text-2xl text-gray-600 font-heading font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default HeadingSecondary;
