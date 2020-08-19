import React from 'react';
import {Redirect} from 'react-router';

function NotFound() {
  return(
    <Redirect to="/"/>
    /*<div>
      <h1>Ничего не найдено :(</h1>
      <p>К сожалению, ничего по данной ссылке</p>
    </div>*/
  );
}

export default NotFound;