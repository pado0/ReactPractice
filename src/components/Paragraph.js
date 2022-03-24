import React, {Component} from 'react'

class Paragraph extends Component{
  render(){
    console.log('paragrahp render');
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default Paragraph;