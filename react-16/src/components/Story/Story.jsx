import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  return (
    <section className="story">
      <div className="container">
        <div class="stories__list-item">
          <a href="#" class="stories__list-item-link">
            <span class="stories__list-item-link--border">
              <img class="stories__list-item-image"  src="./img/profiles/yoda/yoda-profile.jpg" alt="Mestre Yoda"/>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Story;
