import { Component } from "react";

class Index extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i=0;
      while(i < data.length){ 
        lists.push(
        <li key={data[i].id}>
             <a href ={"/content/"+data[i].id}
             //data-id = {data[i].id}
             onClick = {function(id, e){
               debugger;
               e.preventDefault();
               this.props.onChangePage(id);
             }.bind(this, data[i].id)}>
               {data[i].title}</a>
          </li>);
        i++;
      }

      return(
        
        
        <nav>
          {lists}
          <ul>
              <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JS</a></li>
          </ul>
        </nav>
  
      );
    }
  }
  
  export default Index;