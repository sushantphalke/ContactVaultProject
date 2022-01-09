import React from 'react';
import {
    MdOutgoingMail,
    MdPhoneInTalk,
    MdOutlineStarOutline,

   
} from 'react-icons/md';
import {BsTrashFill,BsVectorPen}from 'react-icons/bs'

export const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type } = contact;
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name.charAt(0).toUpperCase() + name.slice(1)}
                {'   '}
                <MdOutlineStarOutline style={{ marginLeft: '1em' }} />
                <span
                    style={{ float: 'right' }}
                    className={
                        type === 'Professional'
                            ? 'badge-primary'
                            : 'badge-success'
                    }
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <div style={{ display: 'flex' }}>
                <button className='btn-sm' style={{ marginInlineEnd: '1em' }}>
                    <div>
                        <BsVectorPen style={{ fontSize: '130%' ,color:'blue'}} />
                    </div>
                    Edit
                </button>
                <button className='btn-sm' style={{ marginInlineEnd: '1em' }}>
                    <div>
                        <BsTrashFill style={{ fontSize: '130%',color:'red' }} />
                    </div>
                    Delete
                </button>
            </div>
            <ul className='list'>
                {email && (
                    <li className='list-item'>
                        <div>
                            <MdOutgoingMail style={{ fontSize: '150%' ,color:'blue'}} />
                        </div>
                        <div> {email}</div>
                    </li>
                )}
                {phone && (
                    <li className='list-item'>
                        <div>
                            <MdPhoneInTalk style={{ fontSize: '150%' ,color:'green'}} />
                        </div>
                        <div>{phone}</div>
                    </li>
                )}
            </ul>
        </div>
    );
};
