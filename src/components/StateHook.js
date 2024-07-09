import React, { useState } from 'react'

function StateHook() {
    // const num1 = 10;
    // const num2 = 20;
    // let sum = 0;
    // const [sum, setSum] = useState(0)
    // const [users, setUsers] = useState([
    //     { id:1,name: 'John', age: 30 },
    //     { id:2,name: 'Doe', age: 40 },
    //     { id:3,name: 'Jane', age: 50 }
    // ])
      // function add() {
    //     // sum = num1 + num2;
    //     setSum(sum + 1)
    //     console.log(sum);
    // }

    // function deleteUser(id){
    //     console.log(id);
    //     const newUsers = users.filter(user => user.id !== id);
    //     setUsers(newUsers);
    // }


    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

  
    const updateColor = ()=>{
        // let newCar = {...car, color: 'blue'}
        // setCar(newCar)
        setCar((prevCar) => {
            return {...prevCar, color: 'blue'}
        })
    }

    return (
        <div className='max-w-3xl mx-auto pt-12'>
            <h1>useState Hook</h1>
            <h2>Car Brand: {car.brand}</h2>
            <h2>Car Model: {car.model}</h2>
            <h2>Car Year: {car.year}</h2>
            <h2>Car Color: {car.color}</h2>
            <button onClick={()=>{updateColor()}}>Update Color</button>
            {/* {users.map((user, index) => (
                <div key={user.id}>
                    <h2>{user.name} | {user.age}</h2>
                    <button onClick={()=>{deleteUser(user.id)}} className='bg-red-500'>Delete User</button>
                </div>
            ))} */}

        </div>
    )
}

export default StateHook
