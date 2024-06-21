import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Box } from './Box';

export function PeopleCard({
  id,
  name,
  email,
  profileImage,
  age,
  dateOfBirth,
}) {
  return (
    <Box className='flex p-0'>
      <figure>
        <img
          src={profileImage}
          alt={`Profile picture of ${name}`}
          className='size-full'
        />
      </figure>
      <div className='flex flex-col justify-center p-4'>
        <Link to={`/details/${id}`}>
          <h2 className='select-text text-xl'>{name}</h2>
        </Link>
        <p>{email}</p>
        <p>
          {age} ans -{' '}
          <time dateTime={dateOfBirth}>
            {new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full' }).format(
              new Date(dateOfBirth)
            )}
          </time>
        </p>
      </div>
    </Box>
  );
}

PeopleCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  profileImage: PropTypes.string,
  age: PropTypes.number,
  dateOfBirth: PropTypes.string,
};
