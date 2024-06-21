import { useLoaderData, Outlet, Form } from 'react-router-dom';

import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import Carousel from '@/components/Carousel';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { PeopleCard } from '@/components/PeopleCard';

export function loader({ request }) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name');
  return fetch(`http://localhost:3000/data${name ? `?name=${name}` : ''}`);
}

export function List() {
  const data = useLoaderData();

  return (
    <>
      <Outlet />
      <Carousel contacts={data}></Carousel>
      <Box>
        <Form
          id='search-form'
          role='search'
          onSubmit={console.log}
          className='flex items-end gap-4'
        >
          <Label title='Name'>
            <Input
              type='search'
              name='name'
              placeholder='type the whole name to search'
            />
          </Label>
          <Button type='submit'>Search</Button>
        </Form>
      </Box>
      <div className='grid grid-cols-1 items-center gap-x-4 gap-y-5 md:gap-x-10 lg:grid-cols-2 xl:grid-cols-3'>
        {data?.length
          ? data.map((p) => (
              <PeopleCard
                id={p.id}
                name={p.name}
                profileImage={p.picture.large}
                email={p.email}
                age={p.dob.age}
                dateOfBirth={p.dob.date}
                key={p.id || p.email}
              />
            ))
          : 'no-results'}
      </div>
    </>
  );
}
