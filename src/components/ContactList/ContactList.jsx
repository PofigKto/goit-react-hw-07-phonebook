import css from 'components/ContactList/ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { fetchContacts, deleteContact } from 'redux/operations'

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(
    () =>{dispatch(fetchContacts())}, [dispatch]
  )

    const isLoading = useSelector(state => state.contacts.isLoading )

  const contacts = useSelector(state => state.contacts.items)
  const filterQuery = useSelector(state => state.filter);


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filterQuery.toLocaleLowerCase())
  );

  return (
    isLoading ? <div>isLoading</div> :
        <ul>
            {filteredContacts.map(contact => {
        return (
            <li key={contact.id} className={css.item}> <p>{contact.name}: {contact.phone}</p> <button className={css.btn} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button> </li>
        )
      })}
        </ul>
  )
}