import { Component } from "react";

class Subject extends Component{
    render(){
      return(
        // 리액트에서는 최상위 태그가 단 하나여야한다.
        <header>
          <h1><a href="/" onClick={function(e){
          e.preventDefault(); 
          this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
          {this.props.data}
        </header>
  
      );
    }
  }

  export default Subject;