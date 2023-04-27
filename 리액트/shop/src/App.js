import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import { useState } from 'react';
// import a from './data.js';
// import {a,b} from './data.js';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/detail.js';
 
function App() {

  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate(); // 페이지 이동 도와줌
  
  return (

    
    <div className="App">
      
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">shoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              navigate(-1)
            }}>Home</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('./detail')
            }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}
      <Routes> 
        <Route path='/' element={

          <>
          <div className='main-bg' style={{backgroundImage: 'url('+bg+')'}}></div>

          <div className='container'>
            <div className='row'>
              {/* <div className='col-md-4'>
                <img src="https://donghyun1597.github.io/shop/shoes1.jpg"/>
                  <h4>{shoes[0].title}</h4>
                  <p>{shoes[0].price}</p>
              </div>
              <div className='col-md-4'>
                <img src="https://donghyun1597.github.io/shop/shoes2.jpg" alt=""/>
                  <h4>{shoes[1].title}</h4>
                  <p>{shoes[1].price}</p>
              </div>
              <div className='col-md-4'>
                <img src="https://donghyun1597.github.io/shop/shoes3.jpg" alt=""/>
                  <h4>{shoes[2].title}</h4>
                  <p>{shoes[2].price}</p>
                
              </div> */}
    
              
              
              {/* {shoes.map((shoe,i)=>(
                // console.log(shoe);
                 
                <List title={shoe.title} price={shoe.price} index={i} />
    
              ))} */}
              {/* <Card shoes={shoes[0]} i={1}></Card>
              <Card shoes={shoes[1]} i={2}></Card>
              <Card shoes={shoes[2]} i={3}></Card> */}
              {
                shoes.map((a,i)=>{
                  return(
                    <Card shoes={shoes[i]} i={i+1}></Card>
                  )
                })
              }
              
            </div>
          </div>
        
        </>
          
        }/>
        <Route path='/detail' element={
        <>
          <Detail></Detail>
        
        </>
        
        }/>
        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<div>멤버임</div>}/>
          <Route path='location' element={<div>멤버아님</div>}/>
        </Route>

        <Route path='/event' element={<Event></Event>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일 기념 쿠폰 받기</div>}/>
        </Route>
        
      </Routes>
      </div>
  );
}

/*
1. 오늘 만든 상품목록 컴포넌트로 만들기. 컴포넌트도 길면 다른파일로 뺴도 상관없음
1. 컴포넌트 1개 => map 함수
*/
function List(props){
  let imgSrc = 'https://donghyun1597.github.io/shop/shoes'+(props.index+1)+'.jpg';
  return(
    
      <div className='col-md-4'>
            <img src={imgSrc}/>
            <h4>{props.title}</h4>
            <p>{props.price}</p>
     </div>


    )

}
function Card(props){
  return(
    
      <div className='col-md-4'>
            <img src={'https://donghyun1597.github.io/shop/shoes'+ props.i +'.jpg'}/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
     </div>


    )

}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
  <div>
    <h4>오늘의 이벤트</h4>
    <Outlet></Outlet>
  </div>
  )
}
export default App;