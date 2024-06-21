import PropTypes from 'prop-types';

import { cn } from '@/utils/cn';

export function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={cn(
        'block rounded-md bg-slate-100 px-4 py-2 read-only:text-stone-400',
        className
      )}
    />
  );
}
Input.propTypes = {
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
