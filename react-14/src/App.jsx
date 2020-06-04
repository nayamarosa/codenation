import React from 'react';

import './App.scss';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactsList: [],
      contactsListFiltered: [],
      inputValue: ""
    }
  }
  
  componentDidMount() {
    const dataUrl = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";
    fetch(dataUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        contactsList: data
      })
      this.setState({
        contactsListFiltered: this.state.contactsList
      })
    })
  }
  
  handleFilterChange = (e) => {
    let getInputValue = e.target.value;
    let contactsList = this.state.contactsList
    
    let filterInput = contactsList.filter(contact =>  
      contact.name.toLowerCase().includes(getInputValue.toLowerCase())
    )

    this.setState({
      getInputValue: e.target.value,
      contactsListFiltered: filterInput
    })
  }
  
  // handleClick() {
    
    // }
    
    render() {
      console.log(this.state.getInputValue);
      console.log(this.state.contactsListFiltered);
      console.log(this.state.filterInput);
      // console.log(this.state.contactsList);
      
      
    return (
      <React.Fragment>
      <Topbar />
      <Filters value={this.getInputValue} handleChange={this.handleFilterChange}/>
      <Contacts contacts={this.state.contactsList} />
      </React.Fragment>
      )
    }
  }
  
  export default App;