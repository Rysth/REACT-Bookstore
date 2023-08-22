import React from 'react';
import PropType from 'prop-types';

function Button(
  /* prettier-ignore */
  {
    classList,
    buttonType,
    text,
    handleData,
  },
) {
  return (
    <button type={buttonType ? 'submit' : 'button'} className={classList} onClick={handleData}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  handleData: () => {},
  buttonType: '',
};

Button.propTypes = {
  buttonType: PropType.string,
  classList: PropType.string.isRequired,
  text: PropType.string.isRequired,
  handleData: PropType.func,
};

export default Button;
