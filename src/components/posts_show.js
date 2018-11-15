import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPost } from '../actions'


class PostsShow extends Component {
  componentDidMount() {
    const id = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    return (
        <div>
          Posts Show!
        </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

function mapStateToProps({ posts }, ownProps) {

}

// 컴포넌트와 리덕스를 연동할 때 connect 를 사용합니다.
// connect() 의 결과는, 컴포넌트에 props를 넣어주는 함수를 반환합니다.
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.

export default connect(null, { fetchPost })(PostsShow);