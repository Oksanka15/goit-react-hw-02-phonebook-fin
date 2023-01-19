import { default as PropTypes } from 'prop-types';
import React from 'react';
import { ContactFormStyled } from './ContactForm.styled';
import {
  Button,
  InputGroup,
  InputLabel,
  Input,
  InputBar,
} from '../App/App.styled';
export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const { addContact } = this.props;
    if (addContact(this.state)) {
      this.setState({
        name: '',
        number: '',
      });
      evt.target.reset();
    }
  };

  inputNameId = crypto.randomUUID();
  inputNumberId = crypto.randomUUID();

  render() {
    const { name, number } = this.state;

    return (
      <ContactFormStyled onSubmit={this.handleFormSubmit} autoComplete="off">
        <InputGroup>
          <Input
            type="text"
            id={this.inputNameId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.handleChange}
            required
          />
          <InputLabel htmlFor={this.inputNameId}>Name</InputLabel>
          <InputBar></InputBar>
        </InputGroup>
        <InputGroup>
          <Input
            type="tel"
            name="number"
            id={this.inputNumberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleChange}
            required
          />
          <InputLabel htmlFor={this.inputNumberId}>Number</InputLabel>
          <InputBar></InputBar>
        </InputGroup>
        <div>
          <Button type="submit">Add contact</Button>
        </div>
      </ContactFormStyled>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};