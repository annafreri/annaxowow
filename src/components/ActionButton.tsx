import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { User } from "@/types";

interface Props {
  icon: ReactNode;
  color?: "red" | "blue" | "purple" | "gray" | "green";
  user: User;
  userData?: User[];
  setUserData?: React.Dispatch<React.SetStateAction<User[]>>;
  onClick: (id: string) => void;
}

export default function ActionButton({
  icon,
  color = "gray",
  user,
  onClick
}: Props) {

  const className = cn(
    "size-10 bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer transition-all hover:rotate-8",
    {
      "hover:bg-red-400": color === "red",
      "hover:bg-blue-400": color === "blue",
      "hover:bg-purple-400": color === "purple",
      "hover:bg-zinc-600": color === "gray",
      "hover:bg-green-400": color === "green"
    }
  );

  return (
    <div
      className={className}
      onClick={() => onClick(user.id)}
    >
      {icon}
    </div>
  );
}