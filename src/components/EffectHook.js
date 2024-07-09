import React,{useEffect} from 'react'

export default function EffectHook() {
     const [count, setCount] = React.useState(0);
     const [name, setName] = React.useState("Rahul")
     
    //useEffect - to handle side effects in any component
    //Sideeffects - data fetching, subscriptions, manually changing the DOM, etc.
   
    //useEffect - runs after every render and when the component loads 
    //useEffect - with no dependency 
    useEffect(()=>{
        console.log("First UseEffect running!!!")
    })

    //useEffect - with dependency
    //Will run when component loads and when the dependency changes
    useEffect(()=>{
        console.log("Second UseEffect running!!!")
    },[count])

    //useEffect - with empty dependency
    //Will only run when the component loads
    useEffect(()=>{
        console.log("Third UseEffect running!!!")
    },[])
    return (
    <div>

        <h1>Effect Hook</h1>
        <h3>{count}</h3>
        <h3>{name}</h3>
        <button onClick={() => setName("John")}>Change Name</button> <br/>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
