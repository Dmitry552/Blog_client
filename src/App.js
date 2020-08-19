import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HeaderBlock, AddForm, FullPost, NotFound } from './components';
import { PostsList } from './modules';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBlock 
          title="Заголовок сайта"
          description="Описание"
          imageUrl="https://media.istockphoto.com/photos/starry-night-picture-id519760984"
        />
        <div className="container">
          <div className="content">
            {/*<button type="button" className="btn btn-primary">Add post</button>*/}
            <div className="content">
              <Router>
                <div>
                  <Switch>
                    <Route path="/" exact component={() => <PostsList/>}/>
                    <Route path="/post/:id" exact component={() => (
                      <FullPost title="Заголовок статьи" createdAt = {'' + new Date()}/>
                    )}/>
                    <Route path="/post/:id/edit" exact component={AddForm} />
                    <Route path="*" component={NotFound}/>
                  </Switch>
                </div>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
