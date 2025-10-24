// loop base code 
function customReact(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)


    // this is the old code 


    // modular code 
    // 4.f
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.propss) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}



// 2. 
const reactElement = {
    type: 'a', 
    props: {
        href : 'https://google.com',
        target : "_blank"
    },
    Children : 'Click me to visit google'
}


// 1.
const mainContainer = document.querySelector('#root')


// 3.
customReact(reactElement, mainContainer)

