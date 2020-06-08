import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar">
    <div className="container">
			<h1 class="topbar__logo">
				<LogoSvg />
			</h1>
      <div className="topbar__group topbar__icon">
        <a href="#">
          <span className="far fa-paper-plane"></span>
        </a>
      </div>
    </div>
  </header>
);

export default Topbar;
