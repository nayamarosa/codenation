import React from 'react';

import './Contacts.scss'

class Contact extends React.Component {
  render() {
    return (
      <article className="contact" data-testid="contact">
        <img className="contact__avatar" src={this.props.data.avatar} alt={this.props.data.name} />
        <span className="contact__data">{this.props.data.name}</span>
        <span className="contact__data">{this.props.data.phone}</span>
        <span className="contact__data">{this.props.data.country}</span>
        <span className="contact__data">{this.props.data.admissionDate}</span>
        <span className="contact__data">{this.props.data.company}</span>
        <span className="contact__data">{this.props.data.department}</span>
      </article>
      );
    }
  }
  
  export default Contact;
  
