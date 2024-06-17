import { useState } from 'react';

import { Counter } from './components/counter';
import { Header } from './components/header';

export function App() {
  const page = {
    title: 'TODO',
    description: 'A simple todo app',
  };

  const [text, setText] = useState('');

  return (
    <div>
      <Header
        title='Todo app'
        content={page}
        onInputChange={setText}
        text={text}
      />
      <Counter init={0} text={text} />
    </div>
  );
}
