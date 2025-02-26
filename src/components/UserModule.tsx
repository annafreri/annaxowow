import capitalizeFirstLetter from "@/helpers/capitalizeFirstLetter";
import { User } from "@/types";
import { Flame, Trash2, UserRoundPen } from "lucide-react";
import ActionButton from "./ActionButton";

interface Props {
  user: User;
  onTrashClick: (id: string) => void;
  onFireClick: (id: string) => void;
}

export default function UserModule({ user, onTrashClick, onFireClick }: Props) {
  const { profilePicture, name, role, email, phoneNumber } = user;

  return (
    <div
      className='grid grid-cols-4 py-4 items-center transition-all hover:bg-zinc-900 rounded-2xl px-4 cursor-pointer'
    >
      <div className='flex items-center'>
        <img
          src={`/avatars/${profilePicture}`}
          alt={`${name}'s profile`}
          className="w-20 h-w-20 rounded-full mr-4"
        />
        <div className='flex flex-col'>
          <p>{name}</p>
          <p className='text-zinc-500'>{capitalizeFirstLetter(role)}</p>
        </div>
      </div>

      <p>{email}</p>

      <p>{phoneNumber ?? '---'}</p>

      <div className="flex gap-4 justify-end">
        <ActionButton
          icon={<Flame />}
          color="red"
          user={user}
          onClick={onFireClick}
        />
        <ActionButton
          icon={<Trash2 />}
          color="purple"
          user={user}
          onClick={onTrashClick}
        />
        <ActionButton
          icon={<UserRoundPen />}
          color="blue"
          user={user}
          onClick={() => {/* Edit functionality */ }}
        />
      </div>
    </div>
  );
}