import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="contacts">
          <article className="contact">
            <img className="contact__avatar" src={this.props.data.avatar} alt={this.props.data.name} />
            <span className="contact__data">{this.props.data.name}</span>
            <span className="contact__data">{this.props.data.phone}</span>
            <span className="contact__data">{this.props.data.country}</span>
            <span className="contact__data">{this.props.data.admissionDate}</span>
            <span className="contact__data">{this.props.data.company}</span>
            <span className="contact__data">{this.props.data.department}</span>
          </article>
        </section>
      </div>
      );
    }
  }
  
  export default Contact;
  