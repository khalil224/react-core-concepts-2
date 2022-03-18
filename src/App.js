import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '20px' }}>
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(55)

  const IncreaseCount = () => setCount(count + 1)
  const DecreaseCount = () => setCount(count - 1)


  /*  const IncreaseCount = () => {
     const newCount = count + 1;
     setCount(newCount)
   } */
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
    </div>
  )
}

/* const products = [
  { name: 'laptop', price: 78000 },
  { name: 'phone', price: 7800 },
  { name: 'watch', price: 8000 },
  { name: 'bike', price: 708000 },
  { name: 'cycle', price: 6000 }
] */

/* {
  products.map(product => <Product name={product.name} price={product.price}></Product>)
}
 <Product name="Laptop" price="76000"></Product>
<Product name="Phone" price="40000"></Product>
<Product name="Watch" price="4000"></Product> */

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>

    </div>
  )
}

export default App;
