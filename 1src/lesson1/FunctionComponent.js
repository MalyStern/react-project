import ClassComponent from './ClassComponent'
import './Lesson1.css'
import my_img from '../images/pic.jpeg'
import { useState } from 'react'
function FunctionComponent(props) {
    
    return (
        <>
            {/* <ClassComponent></ClassComponent>
            <img className={my_img} src={my_img}></img>


            <h1>Hello {name} 😊</h1>
            <h2>{number}</h2>
            <h2> array of numbers {numbers_arr[4]}</h2>
            Product: {products[1].product_name} , price: {products[1].product_price}
            <h1>Array: </h1>
            {products.map((item, i) => (
                <h3>{item.product_name}</h3>
            ))}

            <h2 className={'my_style'}>My name is: {props.name} and my hoby is to: {props.hobby} 😂</h2>
            <h1 style={{ color: 'red' }}>My firat function component - React Hooks</h1>

            <button className='btn btn-outline-success' onClick={() => { setName() }}>Click me</button>

            <button className='my_style' onClick={() => { setNumber(number + 3) }}>Click me again</button>

            {/* update array */}
            {/* <button onClick={() => update_products("oil", 1)}>update products</button>

            <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input> */} */}
        </>
    )
}
export default FunctionComponent