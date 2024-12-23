import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  toggleEdit } from '../store/editPasswordSlice'
import { removeAll, removePass,addPass } from '../store/passwordSlice'
import Edit from './Edit'

function Passwords() {
  const passwords = useSelector((state) => state.password);
  const { isEditable, selectedIndex } = useSelector((state) => state.editPassword);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeAll())
    const storedPasswords = localStorage.getItem('passwords');
    if (storedPasswords) {
      JSON.parse(storedPasswords).forEach((password) => {
        dispatch(addPass(password));
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  }, [passwords]);

  const editPassword = (index) => {
    dispatch(toggleEdit(index));
  };

  const passRe = (index) => {
    dispatch(removePass(index));
  };

  if (isEditable) {
    return <Edit selectedPassword={passwords[selectedIndex]} index={selectedIndex} />;
  }

  if (passwords.length < 1) {
    return <h1 className='text-gray-400 text-center'>No Password Present</h1>;
  }

  return (
    <div>
      <div className='flex mb-5'>
        <h1 className='text-white font-bold text-2xl md:ml-[650px] ml-24 mb-3'>All Passwords</h1>
        {passwords.length > 1 && (
          <button
            className='bg-red-600 md:px-5 md:ml-5 md:py-2 ml-1 px-2 rounded-lg text-white'
            onClick={() => dispatch(removeAll())}>
            Clear All Data
          </button>
        )}
      </div>
      <div className='text-white font-bold w-full'>
        {passwords.map((password, index) => (
          <ul
            key={index}
            className='flex bg-slate-900 md:mx-5 mx-1 h-[70px] rounded-lg text-xl md:px-4 md:py-2 justify-between mb-3'>
            <div className='flex mt-2 justify-between w-7/12'>
              <li className='px-5  py-2'>{password.site}</li>
              <li className='px-5 py-2'>{password.userId}</li>
              <li className='px-5 py-2'>{password.pass}</li>
            </div>
            <div className='flex flex-col md:flex-row md:gap-8 h-9 md:h-[54px]'>
              <li
                onClick={() => editPassword(index)}
                className=' px-5 md:py-2 py-1 rounded-xl bg-green-600 cursor-pointer'>
                ✏️
              </li>
              <li
                onClick={() => passRe(index)}
                className='cursor-pointer px-5 md:py-2 py-1 bg-red-700 rounded-xl'>
                🗑️
              </li>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Passwords;
