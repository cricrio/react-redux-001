import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';

import { add, selectTodo } from '@/app/todoSlice';

const onSubmit = (dispatch) => (event) => {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value;
  const description = form.description.value;
  dispatch(add(title, description));
  form.reset();
};

function TodoListPage() {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  return (
    <>
      <Box>
        <form onSubmit={onSubmit(dispatch)} className='space-y-2'>
          <Label title='Title'>
            <Input name='title' />
          </Label>
          <Label title='Description'>
            <Input name='description' />
          </Label>
          <Button type='submit'>Submit</Button>
        </form>
      </Box>
      <Box>
        {todos.map((t) => (
          <div key={t.id}>
            <Link to={`/todos/${t.id}`}>
              <h3 className='font-bold'>{t.title}</h3>
            </Link>
            <span>{t.description}</span>
          </div>
        ))}
      </Box>
    </>
  );
}

export default TodoListPage;
