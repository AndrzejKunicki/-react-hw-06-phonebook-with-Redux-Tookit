import React from 'react';
import ContactForm from './component/ContactForm';
import Container from './component/Container';
import ContactList from './component/ContactList';
import Filter from './component/Filter';

const App = () => {
  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
