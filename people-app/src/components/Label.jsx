import PropTypes from 'prop-types';

export function Label({ title, children, required = false, as = 'label' }) {
  const Component = as;
  return (
    <Component className='block'>
      <span className='block font-semibold'>
        {title} {required && '*'}
      </span>
      {children}
    </Component>
  );
}

Label.propTypes = {
  title: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.node,
  required: PropTypes.bool,
};
