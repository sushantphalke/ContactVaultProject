import { useState, useContext, useEffect } from 'react';
import React from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'Personal',
    });
    const { name, email, phone, type } = contact;
    const { addContact, current, updateContact, clearCurrent } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'Personal',
            });
        }
    }, [contactContext, current]);

    const onChange = (e) =>
        setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (current === null && phone !== null && phone !== '') {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'Personal',
        });
    };
    const clearAll = () => {
        clearCurrent();
    };
    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>
                {current ? 'Edit Contact' : 'Add Contact'}
            </h2>
            <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={onChange}
            />
            <input
                type='text'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange}
            />
            <input
                type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={onChange}
            />
            <h5>Contact Type</h5>
            <input
                type='radio'
                name='type'
                value='Personal'
                checked={type === 'Personal'}
                onChange={onChange}
            />
            Personal{'  '}
            <input
                type='radio'
                name='type'
                value='Professional'
                checked={type === 'Professional'}
                onChange={onChange}
            />
            Professional{'  '}
            <div>
                <input
                    type='submit'
                    value={current ? 'Update Contact' : 'Add Contact'}
                    className='btn btn-primary btn-block'
                ></input>
            </div>
            {current && (
                <div>
                    <input
                        type='submit'
                        value='Clear'
                        className='btn btn-primary btn-block'
                        onClick={clearAll}
                    ></input>
                </div>
            )}
        </form>
    );
};
export default ContactForm;
