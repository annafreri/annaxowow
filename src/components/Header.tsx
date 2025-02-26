import { UserPlus, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='mb-6 flex flex-col lg:flex-row gap-6'>

      <div className='w-full bg-zinc-800 rounded-2xl px-8 py-6 flex flex-col gap-2'>
        <div className="flex gap-3 items-center ">
          <h1 className="text-4xl font-bold text-purple-400">
            Wizkid Manager
            <sup className="text-2xl pl-1">&#174;</sup>
          </h1>
          <p className="bg-purple-400 size-fit rounded-full px-2 text-zinc-950 text-sm">
            2000
          </p>
        </div>

        <h2 className='text-zinc-400'>
          Controll the WizKids
        </h2>
      </div>

      {/* TODO:: make this a component */}
      <div className="flex flex-row gap-6">
        <Link to="/" className="flex-1 lg:w-32">
          <div className='bg-zinc-800 min-h-24 h-full rounded-2xl flex items-center justify-center w-full lg:w-32 lg:height-32 hover:bg-zinc-600 transition-all'>
            <UserPlus />
          </div>
        </Link>

        <Link to="/" className="flex-1 lg:w-32">
          <div className='bg-zinc-800 min-h-24 h-full rounded-2xl flex items-center justify-center w-full lg:w-32 lg:height-32 hover:bg-zinc-600 transition-all'>
            <LogOut className='transition-transform' />
          </div>
        </Link>
      </div>

    </div>
  )
}