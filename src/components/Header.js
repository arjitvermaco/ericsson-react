import Name from "./Name";

function Header({name,createdBy}){
    // console.log(props) 
    return(
        <header>
            {/* Welcome to my {appName} */}
            Welcome to  {name} , created by {createdBy}

            <Name createdBy={createdBy}/>
        </header>
    )
}

export default Header;