import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoLogoYoutube, IoIosSearch } from 'react-icons/io';

export default function Navbar() {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState('');
  const searchword = router.query.searchword?.toString() ?? '';

  const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.SyntheticEvent<HTMLButtonElement, Event>) => {
    e.preventDefault();
    router.push(`/?searchword=${searchWord}`);
  };

  useEffect(() => {
    setSearchWord(searchword ?? '');
  }, [searchword]);

  return (
    <nav className='navbar'>
      <Link href='/' className='flex items-center cursor-pointer'>
        <IoLogoYoutube className='text-red-700 mr-2 text-3xl' />
        <span className='text-2xl font-bold hidden sm:block'>Youtube Clone</span>
      </Link>
      <form onSubmit={handleSubmit} className='flex-auto flex justify-center'>
        <input
          type='text'
          className='w-5/6 p-2 pl-4 border border-gray-300 rounded-l-3xl md:w-7/12 focus:outline-none'
          placeholder='search...'
          value={searchWord}
          onChange={handleSearchWordChange}
        />
        <button
          type='submit'
          className='flex justify-center items-center rounded-r-3xl text-white p-3 pr-5 border-gray-300 bg-gray-300 hover:bg-gray-400'>
          <IoIosSearch />
        </button>
      </form>
    </nav>
  );
}
