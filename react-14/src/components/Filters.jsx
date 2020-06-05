import React from 'react';

import './Filters.scss'

class Filters extends React.Component {    
    render() {
		return (

      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input type="text" className="filters__search__input" placeholder="Pesquisar" 
            value={this.props.value}
            onChange={e => this.props.handleChange(e)}
            />
            
            <button className="filters__search__icon">
              <i className="fa fa-search"/>
            </button>
          </div>
          
          <button className="filters__item is-selected" value="name" onClick={this.props.handleClick}>
            Nome <i className="fas fa-sort-down" />
          </button>
          
          <button className="filters__item" value="country" onClick={this.props.handleClick}>
            País <i className="fas fa-sort-down" />
          </button>
          
          <button className="filters__item" value="company"  onClick={this.props.handleClick}>
            Empresa <i className="fas fa-sort-down" />
          </button>
          
          <button className="filters__item" value="department" onClick={this.props.handleClick}>
            Departamento <i className="fas fa-sort-down" />
          </button>
          
          <button className="filters__item" value="admissionDate" onClick={this.props.handleClick}>
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
		);
	}
}

export default Filters;

