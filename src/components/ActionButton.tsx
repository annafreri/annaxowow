import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  icon: ReactNode;
  color?: "red" | "blue" | "purple" | "gray";
}

export default function ActionButton({
  icon,
  color = "gray",
}: ActionButtonProps) {

  const className = cn({
    "size-10 bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer transition-all hover:rotate-8": true,
    "hover:bg-red-400": color === "red",
    "hover:bg-blue-400": color === "blue",
    "hover:bg-purple-400": color === "purple",
    "hover:bg-zinc-600": color === "gray"
  })

  return (
    <div className={className}>
      {icon}
    </div>
  )
}