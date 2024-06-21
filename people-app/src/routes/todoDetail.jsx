import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Box } from '@/components/Box';

export function TodoDetail() {
  const { id } = useParams();
  const todo = useSelector((state) => state.todo.list.find((t) => t.id == id));

  return (
    <Box>
      <h1 className='font-bold'>{todo.title}</h1>
      <p>{todo.description}</p>
    </Box>
  );
}
