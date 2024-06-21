import { useReducer } from 'react';

import { Transition } from '@headlessui/react';

import { PeopleCard } from './PeopleCard';

const actions = {
  PREVIOUS: 'previous',
  NEXT: 'next',
  SHOW: 'show',
};

const reducers = {
  [actions.PREVIOUS]: (state) => ({
    ...state,
    nextState: state.index === 0 ? state.length - 1 : state.index - 1,
    isShowing: false,
  }),
  [actions.NEXT]: (state) => ({
    ...state,
    nextState: state.index === state.length - 1 ? 0 : state.index + 1,
    isShowing: false,
  }),
  [actions.SHOW]: (state) => ({
    ...state,
    index: state.nextState,
    isShowing: true,
  }),
};

const carouselReducer = (state, action) => {
  const reducer = reducers[action.type];
  if (reducer) {
    return reducer(state);
  }
  return state;
};

const Carousel = ({ contacts }) => {
  const [state, dispatch] = useReducer(carouselReducer, {
    index: 0,
    length: contacts.length,
    isShowing: true,
  });

  const p = contacts[state.index];

  return (
    <div key={p.id} className='flex justify-center gap-4'>
      <button onClick={() => dispatch({ type: actions.PREVIOUS })}>
        Previous
      </button>
      <Transition
        key={p.index}
        show={state.isShowing}
        afterLeave={() => dispatch({ type: actions.SHOW })}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        appear
      >
        <div>
          <PeopleCard
            id={p.id}
            name={p.name}
            profileImage={p.picture.large}
            email={p.email}
            age={p.dob.age}
            dateOfBirth={p.dob.date}
          />
        </div>
      </Transition>
      <button onClick={() => dispatch({ type: actions.NEXT })}>Next</button>
    </div>
  );
};

Carousel.propTypes = {};

export default Carousel;
