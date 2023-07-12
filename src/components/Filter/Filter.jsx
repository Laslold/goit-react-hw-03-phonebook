import React from 'react';
import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterStyled>
    Find contacts by name
    <input
      className="formInp"
      type="text"
      value={value}
      onChange={onChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  </FilterStyled>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
