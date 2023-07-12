import { ListStyled } from './ContactList.styled';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
const ContactList = ({ contacts, removeContact }) => {
  const elem = contacts.map(({ id, name, number }) => (
    <ListStyled key={id}>
      {name} : {number}
      <Button onClick={() => removeContact(id)}>Delete</Button>
    </ListStyled>
  ));
  return <ul>{elem}</ul>;
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
export default ContactList;
