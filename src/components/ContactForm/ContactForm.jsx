import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/operations";
import css from 'components/ContactForm/ContactForm.module.css'


export const ContactForm = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const contacts = useSelector(state => state.contacts.items)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const includesName = contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())

        if (includesName) {
             alert(`${name} is already in contacts`)
        } else {
            dispatch(addContact({name, phone}))
            setName("")
            setPhone("")
        }

    }
  
    const onInputChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case "name":
                setName(value)
                break;
            case "number":
                setPhone(value)
                break;
            default:
                return;
         }
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label >Insert Name
                    <input
                    onChange={onInputChange}
                    value={name}
                    type="text"
                    className={css.input}
                    name={"name"}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
            </label>
            <label>Insert Number
                    <input className={css.input}
                    onChange={onInputChange}
                    value={phone}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
            </label>
            <button className={css.btn} type="submit">Add contact</button>
        </form>
        )
}