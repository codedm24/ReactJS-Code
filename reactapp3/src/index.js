import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Car from './Car.js';
import Garage from './Garage.js';
import Blogs from './pages/Blogs.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
import Layout from './pages/Layout.js';
import NoPage from './pages/NoPage.js';
import CarClass from './CarClass.js';
import HtmlRender from './pages/HtmlRender.js';
import BookChapterData from './BookChapterData.js';
import Camera from './Camera.js';
import CameraFn from './CameraFn.js';
import TravelAccessories from './TravelAccessories.js';

// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

const myFirstElement = (
<div>
    <div className="col-sm" id="div1">
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='blogs' element={<Blogs/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='*' element={<NoPage/>} />
                <Route path='HtmlRender' element={<HtmlRender/>}/> 
            </Route>
        </Routes>
    </BrowserRouter>
    </div>
    <div className="col-sm">
        <div className='bg bg-dark'>
        <Car/>
        <Garage />
        <CarClass />
        </div>
        <div className='bg bg-success'>
        <HtmlRender/>
        </div>
        <div className='bg bg-danger'>
        <BookChapterData/>
        </div>
        <div className="bg bg-primary">
        <Camera cameratype="digital" favbrand = "GHI"/>
        <CameraFn cameratype="movie"/>        
        <TravelAccessories/>
        </div>

    </div>
</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //reportWebVitals();
