import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function date() {
  const newDate = new Date(); // Year, Month, Day

  const formatter = new Intl.DateTimeFormat("da-DK", {
    weekday: "long",
    year: "numeric",
    day: "2-digit",
    month: "short",
  });

  const formattedDate = formatter.format(newDate);

  return { formattedDate };
}
