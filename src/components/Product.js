// Code Product Component Here
import React from 'react';

class Product extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>Producer: {this.props.producer}</h2>
        <h3>Has Watermark: {this.props.hasWatermark}</h3>
        <h3>Color: {this.props.color}</h3>
        <h3>Weight: {this.props.weight}</h3>
      </div>
    )
  }
}