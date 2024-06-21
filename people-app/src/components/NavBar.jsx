import { Link } from 'react-router-dom';

export const NavBar = () => (
  <nav className='navbar mb-4 bg-white p-5 drop-shadow-lg'>
    <Link className='text-xl' to='/'>
      People
    </Link>
  </nav>
);
