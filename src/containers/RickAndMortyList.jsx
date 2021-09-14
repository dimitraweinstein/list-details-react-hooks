import React, { Component } from 'react';

export default class RickAndMortyList extends Component {
  state = {
    loading: true,
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return <h1>Hello!</h1>;
  }
}
