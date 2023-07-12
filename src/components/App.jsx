import { Component } from 'react';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';
import Container from './Container';
import { AppStyled } from './App.styled';
import ContactList from './ContactList';
import { initialState } from './initialState';
import Filter from './Filter';

class App extends Component {
  state = {
    ...initialState,
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contact'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate() {
    const { contacts } = this.state;
    localStorage.setItem('contact', JSON.stringify(contacts));
  }
  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  addContact = newContact => {
    const { name, number } = newContact;
    this.setState(({ contacts }) => {
      const isUnical = !Boolean(
        contacts.find(contact => contact.name === name)
      );
      if (isUnical) {
        const newContacts = {
          name,
          number,
          id: nanoid(),
        };
        return {
          contacts: [...contacts, newContacts],
        };
      }
      alert(`${name} is already in contacts`);
    });
  };
  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContact = contacts.filter(item => item.id !== id);
      return {
        contacts: newContact,
      };
    });
  };
  getFilterContact() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const filterValue = filter.toLowerCase();
    const filterContact = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filterContact;
  }
  render() {
    const { handleFilter, addContact, removeContact } = this;
    const contacts = this.getFilterContact();
    const { filter } = this.state;
    return (
      <AppStyled>
        <Container title="Phonebook">
          <ContactForm onSubmit={addContact} />
        </Container>
        <div>
          <Container title="Contacts">
            <Filter onChange={handleFilter} value={filter} />
            <ContactList contacts={contacts} removeContact={removeContact} />
          </Container>
        </div>
      </AppStyled>
    );
  }
}

export default App;
