// const { Children } = require("react")

// actually me custoomRender kaam kaise krega  Dom 
function customRender(reactElement, container){
    // create dom element 
    const domElem = document.createElement(reactElement.type)
    // abhi ye khali h kuch insert krna pdega 
    domElem.innerHTML = reactElement.children
    domElem.setAttribute('href', reactElement.props.href)  
    // set ek element 
    domElem.setAttribute('target', reactElement.props.target)

    container.appendChild(domElem)
}


// actually me a tag behind the scene kese diya jata h jese ki function jo h uske andr apne element return kiya h woh react kaise dekhta h vo dekhenge
const reactElement = {
    // react tree banane ki try krta h 
    // 1st type hota h 
    type : 'a',
    // 2nd props hota h 
    props: {
        href: 'https://google.com'
    },
    // 3rd Children hota h 
    children : 'Click me to visit google'

    // ye milta h react ke throw 
}



const mainContainer = document.querySelector('#root')

// want to render a tag 



// ek method ho jo iss reactElement ko add or inject krde main container me 

customRender(reactElement, mainContainer)