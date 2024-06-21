import { PeopleCard } from '@components/PeopleCard';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getContact } from '@/services/contact';

export function loader({ params }) {
  return getContact(params.id);
}

export function Details() {
  const contact = useLoaderData();

  return (
    <div className='space-y-4'>
      <PeopleCard
        id={contact.id}
        name={contact.name}
        profileImage={contact.picture.large}
        email={contact.email}
        age={contact.dob.age}
        dateOfBirth={contact.dob.date}
        key={contact.id || contact.email}
      />
      <Link to={`/details/${contact.id}/edit`}>Edit</Link>
    </div>
  );
}
