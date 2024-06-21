import PropTypes from 'prop-types';

import { cn } from '@/utils/cn';

export function Button({ onClick, disabled, children }) {
  return (
    <button
      className={cn(
        'rounded-md border-2 border-solid border-sky-300 px-4 py-2 font-semibold',
        { 'bg-slate-300 border-slate-700 text-slate-100': disabled }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
