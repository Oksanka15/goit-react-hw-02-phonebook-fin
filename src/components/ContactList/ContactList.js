import React from "react";
import PropTypes from 'prop-types';
import { Button } from '../App/App.styled';
import {ContactListStyled, ContactItem} from './ContactList.styled'
export class ContactList extends React.Component {
    render() {
      const { contacts, handleDelete } = this.props;
      return (
        <ContactListStyled>
          {contacts.map(el => {
            return (
              <ContactItem key={el.id} id={el.id}>
                <span>{el.name}</span>: <span>{el.number}</span>
                <Button onClick={handleDelete} size={200}>delete</Button>
              </ContactItem>
            );
          })}
        </ContactListStyled>
      );
    }
  }
  
  ContactList.propTypes = {
    contactList: PropTypes.arrayOf(
      PropTypes.objectOf({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    handleDelete: PropTypes.func
  };