import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


// function myApp(){
//   return (
//     <>
//     <div>
//       <h1>Custom App || Vikash Singh</h1>
//     </div>
//     </>
//   )
// }


// my personal element inject kr sakta hu but ye toh nahi chal raha tha 

const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )


// React.createElement method jo react hume provide krata h 
// const reactElement = React.createElement(
//   'a',
//   {href: 'https://google.com', target: '_blank'},
//   anotherElement
// )



createRoot(document.getElementById('root')).render(
  <>
    // <App />
    // myApp()
    // ReactElement()
    // anotherElement
    reactElement
  </>

)
