import React, {Component} from "react";
import {connect} from "react-redux";
import {PostsList} from "../../../components";
import PostsListActions from "../actions";

class PostsListContainer extends Component {
  UNSAFE_componentWillMount() {
    console.log('posts_1', this.props);
    const {fetchItems} = this.props;
    fetchItems();
    console.log('posts_2', this.props);
  }
  render () {
    var {items} = this.props;
    console.log('items', items)
    return (
      <PostsList items={this.props.items}/>
    );
  }
}

export default connect(
  ({posts}) => posts, 
  PostsListActions,
  )(PostsListContainer);
