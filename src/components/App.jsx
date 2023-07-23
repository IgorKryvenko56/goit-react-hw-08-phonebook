import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, PhonebookImage } from './App.styled';
import phonebookImage from '../asset/phonebook.png';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';
import {
  selectIsLoading,
  selectContacts,
  selectError,
} from '../redux/contactsSlice';
import { persistor } from '../redux/store';


const App = () => {
  const isLoading = useSelector(selectIsLoading);
   const error = useSelector(selectError);
   const dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);

   return (
     <Container>
      <h1>Phonebook</h1>
      <PhonebookImage src={phonebookImage} alt="Phonebook" />
       <ContactForm />

       <h2>Contacts</h2>
      <Filter/>
       {isLoading ? (
        <p>Loading...</p>
       ) : error ? (
         <p>Error: {error}</p>
         ) : (
             <ContactList />
         )}
     </Container>
   );
 };

 export default App;

// import * as React from 'react';

// // 1. import `ChakraProvider` component
// import { ChakraProvider } from '@chakra-ui/react';

// function App() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return (
//     <ChakraProvider>
//       <TheRestOfYourApplication />
//     </ChakraProvider>
//   );
// }

