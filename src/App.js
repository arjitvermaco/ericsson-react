//its a simple js function that returns a JSX (html)
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
function App() {
    let appName = "My React App";
    let createdBy = "Arjit"
    function handleClick(event){
        console.log("Button Clicked")
        console.log(event)
    }
    const isLogged = false;
    
    return (
        <>
          <Header name={appName} createdBy={createdBy}/>
          <Body/>
          <Footer/>

          <button onMouseEnter={(event)=>{handleClick(event)}}>Click Me</button>
        </>

    )
}

export default App;