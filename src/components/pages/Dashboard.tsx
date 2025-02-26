import { LogOut } from 'lucide-react';
import users from '../../data/users.json'
import { Link } from 'react-router-dom';
import UserModule from '../UserModule';
import { useState } from 'react';
import { User } from '@/types';

export default function Dashboard() {

  const [userData, setUserData] = useState(users as User[]);

  const onTrashClick = (id: string) => {
    const newData = userData.filter(user => user.id !== id);
    setUserData(newData);
  }

  const onFireClick = (id: string) => {
    const newData = userData.map(user =>
      user.id === id ? { ...user, isFired: !user.isFired } : user
    );
    setUserData(newData);
  }

  return (
    <div className='m-8'>

      {/* //HEADER */}
      <section className='mb-6 flex flex-row gap-8'>

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

        <Link to="/">
          <div className='bg-zinc-800 rounded-2xl flex flex-col gap-2 items-center justify-center w-32 h-full hover:bg-zinc-600 transition-all'>
            <LogOut className='transition-transform ' />
          </div>
        </Link>

      </section>

      {/* USERS */}
      <div className='bg-zinc-800 rounded-2xl p-2'>

        {
          userData && userData.map((user) => (
            <UserModule
              user={user}
              key={user.id}
              onTrashClick={onTrashClick}
              onFireClick={onFireClick}
              isFired={user.isFired}
            />
          ))
        }

      </div>

    </div>
  );
};