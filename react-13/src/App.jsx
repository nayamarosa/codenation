import React from 'react';

import './App.scss';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactsList: []
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
      // console.log(this.state)
    })
  }
  
  render() {
    return (
      <React.Fragment>
      <Topbar />
      <Filters />
      <Contacts contacts={this.state.contactsList} />
      </React.Fragment>
      )
    }
  }
  
  export default App;