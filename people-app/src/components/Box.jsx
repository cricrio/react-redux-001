import PropTypes from 'prop-types';

import { cn } from '../utils/cn';

const paddings = {
  0: '',
  5: 'p-5',
};

export function Box({ children, className = '' }) {
  return (
    <div
      className={cn(
        'bg-white drop-shadow-lg p-5 overflow-hidden rounded-lg',
        className
      )}
    >
      {children}
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  padding: PropTypes.oneOfType(Object.keys(paddings)),
};
