import PropTypes from 'prop-types';
import { ContainerStyled } from './Container.styled';
const Container = ({ title, children }) => {
  return (
    <ContainerStyled>
      <h2>{title}</h2>
      {children}
    </ContainerStyled>
  );
};
export default Container;
Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
