import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleEdit } from '../store/editPasswordSlice'
import { editPassword } from '../store/passwordSlice'

function Edit({ selectedPassword, index }) {
  const [password, setPassword] = useState(selectedPassword);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editPassword({ index, updatedPassword: password }));
    dispatch(toggleEdit());
  };

  return (
    <div className=' flex flex-col gap-3 w-6/12 mx-auto mt-5'>
      <input
      className='w-full bg-slate-900
     text-white text-xl mr-5 px-3 rounded-lg py-3 focus:outline-none focus:ring-white focus:ring-2'
        type='text'
        value={password.site}
        onChange={(e) => setPassword({ ...password, site: e.target.value })}
      />
      <input
      className='w-full bg-slate-900
     text-white text-xl mr-5 px-3 rounded-lg py-3 focus:outline-none focus:ring-white focus:ring-2'
        type='text'
        value={password.userId}
        onChange={(e) => setPassword({ ...password, userId: e.target.value })}
      />
      <input
      className='w-full bg-slate-900
     text-white text-xl mr-5 px-3 rounded-lg py-3 focus:outline-none focus:ring-white focus:ring-2'
        type='text'
        value={password.pass}
        onChange={(e) => setPassword({ ...password, pass: e.target.value })}
      />
      <button onClick={handleSave}
      className='bg-blue-600 px-5 py-2 rounded-lg text-white'
      >Save</button>
    </div>
  );
}

export default Edit;
