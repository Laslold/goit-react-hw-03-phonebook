import PropTypes from 'prop-types';
import { ButtonStyle } from './Button.styled.js';
const Button = ({ children, variant = 'none', ...restProps }) => {
  return (
    <ButtonStyle {...restProps} className={variant}>
      {children}
    </ButtonStyle>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['none', 'tertiary', 'primary', 'secondary']),
};

export default Button;
