import logo from './logo.svg';
import React from 'react';
import Login from './Chapter 3/Login';
import NavMenu from './Chapter 3/NavMenu';
import FancyComponent from './Chapter 3/FancyComponent';
import Header from './Chapter 3/Header';
import './App.css';
import SearchBox from './Chapter 3/SearchBox';
import CustomHeader from './Chapter 3/CustomHeader'; 
import Welcome from './Chapter 3/Welcome';
import CountUp from './Chapter 3/CountUp';
import ImmediateInvoke from './Chapter 3/ImmediateInvoke';
import MyComponent from './Chapter 3/MyComponent';
import * as Chapter04 from './Chapter 4';
import * as Chapter06 from './Chapter 6';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const [personName,setPersonName] = React.useState('');
  return(

    <div className="App">
      <div className="float-conatiner">
        <div className="float-child">
            <NavMenu/>
        </div>
        <div id="contentdiv" className="float-child1">
          <Header/>
          <h1>Hello {personName}</h1>
          <input type="text" onChange={(e)=>setPersonName(e.target.value)}/>
          <FancyComponent/>
          <SearchBox/>
          <CustomHeader HeaderText="ReactJS"/>
          <Welcome loggedIn = "false" />
          <CountUp/>
          <ImmediateInvoke/>
          <MyComponent/>
          <Chapter04.Cart/>
          <Chapter04.Farms/>
          <Chapter04.UserProfile/>
          <Chapter04.UserProfile1/>
          <Chapter04.Counter/>
          {/*<Chapter04.BasicFigure filename="images/dog.png" caption="This is a picture of a dog."/>
          <Chapter04.FigureList/>*/}
          <Chapter04.ToDoClass/>
          <Chapter04.ToDoFunction/>
          <Chapter04.ThingsILike/>
          <Chapter04.NavBarOnClick/>
          <Chapter04.CounterController/>
          <Chapter06.App />
          <Chapter06.WelcomeMessage firstName={['Jimmy','Joe']}/>
          <Chapter06.WelcomeMessageClass firstName={['Jimmy','Joe']}/>
          <Chapter06.MyComponent itemValue={'Hello'}/>
          <Chapter06.SiteLink url="http://example.com" linkName={['Example']}/>
          <Chapter06.BorderBox>
            <p>The First paragraph</p>
            <p>The Second paragraph</p>
          </Chapter06.BorderBox>
          <Chapter06.FamilyTree father={new Chapter06.Person("Patrick")}/>
          <Chapter06.DisplayPrimaryColor primaryColor="red"/>
          {/* with parameter value
          <Chapter06.StoresNearYou latitude="45.7856" longitude="137.8654"/>
          */}
          {/*without parameter value*/}
          <Chapter06.StoresNearYou />
          <Chapter06.StoresNearYou1 />
          <Chapter06.StoresNearYou2 />
          <Chapter06.StoresNearYou3 />
          <Chapter06.NewsFeed />
          <Chapter06.NewsFeed1 />
          <Chapter06.NewsFeed2 />
          <Chapter06.CounterClass />
          <Chapter06.CounterClass1 />
          <Chapter06.CounterClass2 />
        </div>
      </div>
    </div>
  );
}

export default App;
