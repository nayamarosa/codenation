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
        contactsList: data,
        contactsListFiltered: data
      })
    })
  }
  
  handleFilterChange = (e) => {
    let getInputValue = e.target.value;
    let contactsListFiltered = this.state.contactsListFiltered;
    
    let filterInput = contactsListFiltered.filter(contact =>  
      contact.name.toLowerCase().includes(getInputValue.toLowerCase())
      )
      
      this.setState({
        getInputValue: e.target.value,
        contactsList: filterInput
      })
    }
    
    handleOrderClick = (e) => {
      e.preventDefault();
      let itemSelected = e.target;
      let contactsList = this.state.contactsList;
      
      itemSelected.classList.add('is-selected');
      
      let orderList = contactsList.sort((prev, next) => {
        if(prev[itemSelected.value] > next[itemSelected.value]){
          return 1;
        }
        if(next[itemSelected.value] > prev[itemSelected.value]){
          return -1;
        }
        return 0;
      })
      
      this.setState({
        contactsList: orderList
      })
    }
    
    render() {
      return (
        <React.Fragment>
        <div className="app" data-testid="app">
        <Topbar />
        <Filters
        handleChange={this.handleFilterChange}
        handleClick={this.handleOrderClick}
        />
        <Contacts contacts={this.state.contactsList} />
        </div>
        </React.Fragment>
        )
      }
    }
    
    export default App;