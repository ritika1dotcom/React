import React from 'react';
import reactDom from 'react-dom';
import './index.css';
// import Library from './Library';
//  import Param from './Param';
//  import CF from './CF';
// //import Parent from './Parent';
// import UseStates from './UseStates';
// import Page from './Page';
 import Main from './Main';
import PdfReport from './PdfReport';

//reactDom.render(<Parent/>,document.getElementById("parent"));
// reactDom.render(<Library />,document.getElementById("lib"));
//  reactDom.render(<Param />,document.getElementById("param"));
//  reactDom.render(<CF />,document.getElementById("cf"));
// reactDom.render(<UseStates/>,document.getElementById("use"));
// reactDom.render(<Page />,document.getElementById("page"));
 reactDom.render(<Main/>,document.getElementById("main"));
reactDom.render(<PdfReport />,document.getElementById("pdf"));


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
