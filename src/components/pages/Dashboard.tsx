import users from '../../data/users.json'
import UserModule from '../UserModule';
import { useState } from 'react';
import { User } from '@/types';
import Header from '../Header';

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

  const onEditClick = (id: string) => {
    // TODO:: implement editing
    console.log('edit' + id)
  }

  return (
    <div className='m-8'>

      {/* //HEADER */}
      <Header />

      {/* USERS */}
      <div className='bg-zinc-800 rounded-2xl p-2'>

        {
          userData && userData.map((user) => (
            <UserModule
              user={user}
              key={user.id}
              onTrashClick={onTrashClick}
              onFireClick={onFireClick}
              onEditClick={onEditClick}
              isFired={user.isFired}
            />
          ))
        }

      </div>

    </div>
  );
};