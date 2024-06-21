import { useState } from 'react';

import { parseWithZod } from '@conform-to/zod';
import { redirect, Form, useNavigation, useLoaderData } from 'react-router-dom';
import { useActionData } from 'react-router-dom';
import { z } from 'zod';

import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { getContact, updateContact } from '@/services/contact';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  dob: z.object({
    date: z.date().refine((value) => value < new Date(), {
      message: 'User cannot be bore in the future',
    }),
    age: z.number().optional(),
  }),
});

export function loader({ params }) {
  return getContact(params.id);
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });
  if (submission.status !== 'success') {
    console.log(submission.reply());
    return submission.reply();
  }

  await updateContact(submission.value, params.id);

  return redirect(`/details/${params.id}`);
}

function getAgeFromDateOfBirth(dob) {
  const ageDiffMs = Date.now() - new Date(dob);
  const ageDate = new Date(ageDiffMs); // age from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function extractDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

function EditContact() {
  const contact = useLoaderData();
  const navigation = useNavigation();
  const errors = useActionData();
  const [age, setAge] = useState(contact.dob.age);

  const handleDobUpdate = ({ target: { value } }) => {
    const age = getAgeFromDateOfBirth(value);
    setAge(age);
  };

  return (
    <>
      <h1 className='pl-4 text-xl font-bold'>
        Edit Contact {JSON.stringify(errors, null, 2)}
      </h1>
      <Box>
        <Form method='POST' className='space-y-2' onSubmit={console.log}>
          <Label title='Name' required>
            <Input
              type='text'
              name='name'
              defaultValue={contact.name}
              placeholder='name'
              required
            />
          </Label>
          <Label title='Email' required>
            <Input
              type='email'
              name='email'
              defaultValue={contact.email}
              placeholder='name@domain.com'
              required
            />
          </Label>
          <div className='flex gap-2'>
            <Label title='Date de naissance' required>
              <Input
                type='date'
                name='dob.date'
                defaultValue={extractDate(contact.dob.date)}
                onChange={handleDobUpdate}
                placeholder='YYYY-MM-DDTHH:mm:ss'
                max={extractDate(new Date())}
              />
            </Label>
            <Label title='Age'>
              <Input type='number' value={age} name='dob.age' readOnly />
            </Label>
          </div>
          <Button type='submit' disabled={navigation.state === 'submitting'}>
            Submit
          </Button>
        </Form>
      </Box>
    </>
  );
}
export default EditContact;
