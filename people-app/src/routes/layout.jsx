import { Outlet } from 'react-router-dom';

import { NavBar } from '../components/NavBar';

export function Layout() {
  return (
    <>
      <NavBar />
      <main className='space-y-4 p-4 md:p-10'>
        <Outlet />
      </main>
    </>
  );
}
