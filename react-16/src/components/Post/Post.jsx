import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post">
      <div class="feed__list-item-header">
        <a class="feed__profile" href="#">
          <img class="feed__profile-image" src="./img/profiles/yoda/yoda-profile.jpg" alt="Mestre Yoda"/>
          <p class="feed__profile-name">Mestre Yoda</p>
        </a>
        <a href="#">
          <i class="feed__icon fas fa-ellipsis-h"></i>
        </a>
      </div>
      <img class="feed__list-item-image" src="./img/profiles/yoda/yoda-1.jpg" alt="Baby Yoda"/>
      <div class="feed__list-item-interact">
        <div>
          <a href="#">
            <i class="feed__icon feed__icon--bigger far fa-heart"></i>
          </a>
          <a href="#">
            <i class="feed__icon feed__icon--bigger far fa-comment"></i>
          </a>
        </div>
        <a href="#">
          <i class="feed__icon feed__icon--bigger far fa-bookmark"></i>
        </a>
      </div>
      <div class="feed__list-item-footer">
          <img class="feed__like-image" src="./img/profiles/domino/domino-profile.jpg" alt="Domino"/>
          <p class="feed__like-text">
            curtido por <a href="#"><span class="feed__like-text--bold">Domino </span></a>e outras <a href="#"><span class="feed__like-text--bold">7 pessoas</span></a>
          </p>
      </div>
    </article>
  );
};

export default Post;
