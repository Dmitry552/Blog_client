import React from 'react';
import {Link} from 'react-router-dom';
import './FullPost.scss';

function FullPost({title, createdAt}) {
  return(
    <div className="full-post post-item">
      <div className="conteiner">
        <Link to="/">
          <button className="btn btn-primary">Back</button>
        </Link>
        <div className="full-post__details">
          <i>Posted on {createdAt}</i>
        </div>
        <br/>
        <p className="full-pos__text">
          Ошибка синтаксического анализа: смежные элементы JSX должны быть заключены в тег. Вы хотели фрагмент JSX <> ... </>?
        </p> 
      </div> 
    </div>
  );
}

export default FullPost;