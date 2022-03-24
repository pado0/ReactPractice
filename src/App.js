import React, {Component} from 'react'
import Paragraph from './components/Paragraph';
import Subject from './components/Subject';
import Index from './components/Index';
import './App.css';



// class 타입으로 바꾸기
class App extends Component{


  // 객체 생성자, App class를 초기화할때 쓰임
  // state는 생성자-super로 쓰인다
  constructor(props){
    super(props);

    //super 전에 this 호출 불가
    this.state = {
      mode:'read',
      selected_contents_id :2,
      Subject:{title:'sub title WEB', sub:'World Wide Web state'},
      welcome:{title:'welcome', desc:'hello react!!'},
      contents:[
        {id:1, title:'HTML state test', desc:'html is hyprtext test'},
        {id:2, title:'css state test2', desc:'css is hyprtext test'},
        {id:3, title:'js state test', desc:'js is hyprtext test'}
     ]
    }
  }

  render(){
    console.log('app render');
    var _title, _desc = null;

    // mode 값에 따라 state가 변함. mode는 props로 인풋을 주면,
    // 인풋에 따라 페이지가 변하겠구나.

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      var i = 0;
      while( i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_contents_id){
          _title= data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
     }
    return(
      <div className="App">

        
        {/* 얘를 죽이고, 아래 subject 컴포넌트 태그에 사용할 이벤트를 만들어보자 
        <header>
          <h1><a href="/" onClick={
            function(e){
              console.log(e);
              e.preventDefault(); // 태그들의 기본적 동작을 금지시킨다 (Ex.a태그 선택시 리로드하지 않도록)
              //this.state.mode = 'welcome'; // this가 컴포넌트를 찾을 수 없음. bind this처리
              //아래 포맷으로 set state를 해야 mode를 변경할 수 있음.
              this.setState({
                mode: 'welcome'
              });
              //debugger; // 여기서 브라우저가 디버그용으로 실행을 멈춰줌
              // 링크 클릭시 실행하는 함수
              //alert('hi');
            }.bind(this)
          }>{this.state.Subject.title}</a></h1>
          {this.state.Subject.sub}
        </header>*/}
        

        <Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.sub}
          // onChangePage라는 이벤트를 만들어, Subject tag 클릭시 해당 이벤트가 호출되도록 처리해보자.
          // onchange는 프롭스형태로 전달됨
          onChangePage = {
            function(){
              alert('hihi');
              this.setState({mode:'welcome'})
            }.bind(this)
          }>

        </Subject>
        
        
        <Index onChangePage = {
          function(id){
            alert('hi');
            this.setState({mode:'read',
                          selected_contents_id:Number(id)});
                          
          }.bind(this)
        } data={this.state.contents}></Index>
        <Paragraph title = {_title} desc = {_desc}></Paragraph>
      </div>
    );
  }
}

export default App;
