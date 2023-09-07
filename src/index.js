
// import React from 'react'

// import ReactDOM from 'react-dom'
// //import "./index.css"
// import Heading from './Heading'
// import Para from './para'


// //ReactDOM.render('kya dikhana hai','kaha dikhana hai','callback function')
// // ReactDOM.render(<h1> Hello World!!</h1>,document.getElementById('root'));

// // creating using pure Javascript
// var h1=document.createElement('h1')
// h1.innerHTML="Manthan Joshi"
// document.getElementById('root').appendChild(h1)

// // React render method by using div
// ReactDOM.render(
//     <div>
//         <h1> Manthan Joshi</h1>
//         <p>Web Developer</p>
//     </div>,



// document.getElementById('root'));


// // 2nd method
// //const arr=['Manthan','Mukul','Joshi']
// ReactDOM.render(
// [
//         <h1> Manthan Joshi</h1>,
//         <p>software engineer</p>
// ],



// document.getElementById('root'));


// // React Fragment
// // It is a faster method than div
// ReactDOM.render(
//     <React.Fragment>
//             <h1> Code with Mj </h1>
//             <p>Please like and subscribe my channel</p>
//             </React.Fragment>,
    
    
    
    
//     document.getElementById('root'));


//     // Jsx Challenges
//      ReactDOM.render(
//     <React.Fragment>
//     <h1> Manthan Joshi Netflix Pick </h1>
//     <p>List of 5 Best Series</p>
//     <ol>
//         <li>Dark</li>
//         <li>Extra Curricular</li>
//         <li>My Holo LOve</li>
//         <li>My first -2 Love </li>
//         <li>Mr Robot</li>
//     </ol>
//     </React.Fragment>,
//      document.getElementById('root'));





// // Jsx Expression in  React
// const flName="Manthan Joshi"
// ReactDOM.render(
// <>
// <h1>My Name is {flName}</h1>
// <p>My Lucky Number is {Math.random()}</p>
// </>
// ,document.getElementById('root')
    

// );


// // Template literals in React js
// const fname="Mukul "
// const lname="joshi"
// ReactDOM.render(
//     <>
//     <h1>{`My first Name is ${fname} ${lname}`} </h1>
    
//     </>,
//     document.getElementById('root')


// );



// // React Js Challenges 2
// // var curDate =new Date().toLocaleDateString()
// // var curTime=new Date().toLocaleTimeString()
// // ReactDOM.render(
// //     <>
// //      <h1>Hello My name is manthan Joshi</h1> 
// //      <p>
// //      Current Date is {curDate}

// //      </p> 
// //      <p>
// //         Current Time is {curTime}
// //      </p> 
// //     </>,
// //     document.getElementById('root')

// // );


// // Jsx Attributes
// // const name="Manthan Joshi"

// // const img2="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
// // ReactDOM.render(
// //     <>
    
// //     <h1 contentEditable="true">My name is  {name} </h1>
    
// //     <img src={img2} alt="radomImages"/>
// //    </> ,
    
// //     document.getElementById('root')

// // );



// // css styling and importing 


// // const name="Manthan Joshi"

// // const img2="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
// // ReactDOM.render(
// //     <>
    
// //     <h1 className="heading">My Name is {name}</h1>
// //     <div className ="img_div">
    
// //     <img src={img2} alt="radomImages"/>
// //     </div>
// //    </> ,
    
// //     document.getElementById('root')

// // );


// // Internal css and Inline css

// // Inline Css
// const name="Manthan Joshi"
// const heading={
//     color: '#fa9191',
//     textTransform:'capitalize',
//     textAlign:'center'
// }

// const img2="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
// ReactDOM.render(
//     <>
    
//     <h1 style={heading}> My Name is {name}</h1>
//     <div className ="img_div">
    
//     <img src={img2} alt="radomImages"/>
//     </div>
//    </> ,
    
//     document.getElementById('root')

// );



// // React Challenges 3

// // 1-create a react app from scracth
// //2-show a heading that says hello sir,good morning ,if time between 1to 11 am 
// //3-Good afternoon , if 12pm to 7pm
// // Good night ,if 7pm till midnight
// // apply css in it then dynaically change the color of Greeting parts only using inline css style 

// // let curDate=new Date(2023,9,6,9)
// // curDate=curDate.getHours()
// // let greeting=''
// // const cssStyle={
    
// // }
// // if(curDate>=1&&curDate<12){
// //     greeting='Good Morning'
// //     cssStyle.color='green'

// // }
// // else if(curDate>=12 && curDate<19){
// //     greeting='Good Afternoon'
// //     cssStyle.color='Orange'
// // }
// // else{
// //     greeting='Good Night'
// //     cssStyle.color='Black'
// // }
// // ReactDOM.render(
// //     <>
// //     <div>
// // <h1>Hello Sir,<span style={cssStyle}> {greeting} </span></h1>
// // </div>

// //     </>,
// //     document.getElementById('root')


// // );


// // Components in React
// ReactDOM.render(
//     <>
//         <Heading></Heading>
//         <Para></Para>
//         <ol>
//             <li>Manthan </li>
//             <li>Joshi</li>
//             <li>Mukul</li>
//             <li>Mj</li>
//         </ol>
//     </>,
//     document.getElementById('root')


// );



// import React from 'react'
// import  ReactDOM  from 'react-dom'
// //import youtuber from './App';
// import { add,sub,mul,div } from './calc';
// // ReactDOM.render(
// //     <>
// //         <ol>
// //             <li>Thapa</li>
// //             <li>{youtuber}</li>
// //         </ol>
// //     </>,
// //     document.getElementById('root')
// // );




// // Challenge 4 Making the calculator
// ReactDOM.render(
//     <>
//     <ul>
//         <li>Sum of two Number is {add(40,4)}</li>
//         <li>Subtration of two Number is {sub(30,3)}</li>
//         <li>Mutiplication of two Number is {mul(10,3)}</li>
//         <li>division of two Number is {div(10,3)}</li>
//     </ul>

//     </>,
//     document.getElementById('root')
// );






// props in React js
import React from 'react'
import  ReactDOM  from 'react-dom'
import './index.css'

import Card from './Cards'


ReactDOM.render( 
    <>
    <h1 className='heading_style'>List of Top 3  Netflix Series in 2023</h1>
<Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" 
    title="A Netflix Original Series"
    sname='DARK'
    link="https://www.netflix.com/in/title/80100172"
/>

<Card imgsrc="https://www.heavenofhorror.com/wp-content/uploads/2020/04/Extracurricular-netflix-review-1200x900.jpg" 
    title="A Netflix Original Series"
    sname='Extra Curricular'
    link="https://www.netflix.com/in/title/80990668"
/>
<Card imgsrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2c236240664543.57ba7f41d2674.jpg" 
    title="A Netflix Original Series"
    sname='Stranger Things'
    link="https://www.netflix.com/in/title/80057281"
/>

    </>

    ,
    document.getElementById('root')


);