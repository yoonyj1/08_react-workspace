import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '역삼우동맛집';
  let [logo, setLogo] = useState('ReactBlog');
  let [a, b] = useState(['여름 코트 추천', '역삼 우동 맛집', '리액트 독학']);
  //let [title, t] = useState('역삼 우동 맛집');
  //let [title2, t2] = useState('리액트 독학');
  // document.querySelector('h4').innerHTML(post);
  let[따봉, 따봉변경] = useState(0);
  let[modal, setModal] = useState(true); // UI의 현재 상태: 열림, 닫힘, 보임, 1, true, ...

  // 모든 array 뒤에 map() 사용가능
  // array의 자료 개수만큼 함수 안의 코드 실행해줌
  // 함수의 파라미터는 array안에 있는 자료임
  // return에 뭐 적으면 array 담아줌
  [1,2,3].map(function(a){
    return '123321';
    console.log(a);
  })

  return (
    <div className="App">
      <Nav></Nav>
      {/* <div className="list">
        <h4>{a[0]} <span onClick={() => {따봉변경(따봉 + 1)}}>👍</span>      {따봉} </h4>
        <p>4월 13일 발행</p>
        <button onClick={()=>{
            // b(['가을 코트 추천', '역삼 우동 맛집', '리액트 독학'])
           // a[0] = '가을 코트 추천';
           // b(a);
           let copy = [...a];
           copy[0] = '가을 코트 추천';
           b(copy);
          }}>바꿔</button>
      </div>
      
      <div className="list">
        <h4  onClick={() => {
        // 내 풀이
        // let copy2 = [...a];
        // copy2 = copy2.sort();
        // b(copy2);

        // 강사님 풀이 1
        // if(modal == true){ // 현재 모달이 열려있다면
        //   setModal(false);
        // } else{ // 현재 모달이 닫혀있다면
        //   setModal(true);
        // }

        // 강사님 풀이2
        setModal(!modal);
      }}>{a[2]}</h4>
        <p>4월 13일 발행</p>
      </div>  */}

      {
        a.map(function(b, i){ // a: 순차적으로 접근한 요소, i: 인덱스
          return (
            <div className="list">
            <h4>{a[i]} <span onClick={() => {따봉변경(따봉 + 1)}}>👍</span>      {따봉}</h4>
            <p>4월 13일 발행</p>
      </div>
          )
        })
      } 
      
      
      <button type="button">정렬</button>

      {/* <Modal></Modal> */}
      
      {
       /* html 태그만 나와야해서 if문, for문 사용못함 => 삼항연산자 사용
       if(){
          <Modal></Modal>
        }
        */
      //  1 == 2? '맞음':'틀림'
      modal == true ? <Modal></Modal> : null
      }

      {/* 
        * 리액트에서 동적인 UI(원래 없었지만 생기는 것) 만드는 step
          1. HTML, CSS로 미리 UI 디자인 해놓기
          2. UI의 현재 상태를 state로 저장해두기
          3. state 상태에 따라서 UI가 어떻게 보일지 조건문 작성
      */}

      <Btn></Btn>
      
    </div>
  );
}

/*
* 컴포넌트(축약한 HTML 덩어리) 만드는 법
  1. function 만들고
  2. return() 안에 html 담기
  3. <함수명></함수명>쓰기

  * 컴포넌트 만들 때 주의사항
  1. component 작명할 땐 영어 대문자로 시작하게 작명
  2. return(<div></div>) 안에 html 태그들이 평행하게 여러개 들어가면 x
  3. function App(){} 내부에 만들면 안된다.

  어떤 HTML들을 Component로 만들면 좋을까
  - 사이트에 반복해서 출현하는 HTML 덩어리
  - 긴 코드를 축약
  - 다른 곳에서 코드 재사용할때
  - 복잡한 코드를 작은 기능으로 나눌 때

  * 컴포넌트의 단점
   - 한 function 안에 있는 변수를 다른 function애 호출 할 수 없음
   - props 문법을 이용해서 state <Modal>까지 전달해줘야 사용할 수 있음 

  * 챌린지: 연습삼아 다른 컴포넌트 1개를 만들기
  ** 챌린지: 글제목 누르면 html 보이는게 아니고 
             글제목 누르면 state 값을 변경
*/

function Modal(){
  return(
    <div className="modal">
        {/* <h4>{a[0]}</h4> */}
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

function Btn(){
  return(
  <button>ㅎㅇ</button>
  )
}

function Nav(){
  return(
    <div className="black-nav">
        {/* 
        
        ** JSX 문법
        1. 리액트에서는 class 말고 className 이라고 쓰장
        => 왜 리액트에서는 JSX 문법을 사용할까?
        원래 : 리액트 <div> 만들고자하면
        React.createEletment('div', 'helloWorld');
        => 이런식으로 어렵게 코드 짜야함.

        2. 변수 넣을 때 {중괄호} 사용한다.

        3. style 넣을때 style={{속성:'속성값'}}
        => ex) font-size : 뺄셈 처럼 인식 => fontSize

        4. return() 안에 병렬로 태그 2개 이상 기입금지

        state 만드는법
        1. import {userState}
        2. userState(보관할 자료)
        3. let [작명, 작명]

        ** state 사용하는 이유?
        => 변수로 선언 한 경우 : 변수내용 바뀌게 되면, 변수내용 바뀌었으니까 html도 고쳐달라 => 생자바스크립트
        => state 선언 한 경우 : state변경이 일어나면, state가 포함된 html을 자동으로 재랜더링 해준다.

        // 전부 다 state로 선언하면 될까?
        => state 이점 : 변경 자주 되는 데이터 .. (로고, 대메뉴 ? )
        => 상품명, 글제목, 가격 이런것 처럼 자주 변할 것 같은 데이터들 ...

        ** 자주 변경되는 데이터 state에 저장해놨다가 html {데이터바인딩}
        1. 변경할 일이 없는 데이터들
        2. 굳이 html에 표기가 필요 없는 데이터 그냥 변수에 저장

        oncClick={} 안에 함수 이름을 넣어야함
        <div onClick="실행할 구문~"></div> => 원래방식
        <div onClick={실행할 함수명}></div> 
        => Click 대문자
        => {} 중괄호 사용
        => 그냥 코드가 아니라 함수를 넣어야 잘 동작함
        => 함수 만드는 문법 사용해도 상관없음

        let [따봉, 따봉변경] = useState(0);
        사용법) 
          따봉변경(새로운 값)
          => state 변경 함수는 ()안에 넣은걸로 state를 갈아치워주는 함수
          따봉변경(따봉 = 따봉 + 1) // 이런거 안됨
          따봉변경(따봉+1)

          [...복사할데이터] => 독립적인 복사본을 생성해줌(깊은복사)
          => 리액트에서 array, object state를 
        */
        }
        <h4 style={{color:'red', fontSize:"16px"}}>ReactBlog</h4>
      </div>
  )
}

export default App;