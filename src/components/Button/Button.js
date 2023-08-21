import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropType from 'prop-types';

function Button({ classList, text, handleData }) {
  return (
    <button type="button" className={classList} onClick={handleData}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  handleData: () => {},
};

Button.propTypes = {
  classList: PropType.string.isRequired,
  text: PropType.string.isRequired,
  handleData: PropType.func,
};

export default Button;
