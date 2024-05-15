import { useState } from "react"

export default function ListsComponent() {
    const [name, setName] = useState("")
    const [number, setNumber] = useState(2)
    const [numbers_arr, setNumbersArr] = useState([1, 2, 4, 5, 6, 84, 3])
    const [products, setProducts] = useState([
        {
            product_name: "milk",
            product_price: 5
        },
        {
            product_name: "chocolate",
            product_price: 15
        },
        {
            product_name: "candy",
            product_price: 2
        }
    ])
    const update_products = (new_product_name, index) => {
        debugger
        let new_products = [...products]
        new_products[index].product_name = new_product_name
        setProducts(new_products)
    }

    const filter_array = (product_name) => {
        setProducts(products => products.filter((item, index) => item != product_name))
    }

    return (
        <>
            <h1>Hello {name} 😊</h1>
            <h2>{number}</h2>
            <h2> array of numbers {numbers_arr[4]}</h2>
            Product: {products[1].product_name} , price: {products[1].product_price}
            <h1>Array: </h1>
            {products.map((item, i) => (
                <h3>{item.product_name}</h3>
            ))}

            <button className='btn btn-outline-success' onClick={() => { setName() }}>Click me</button>

            <button className='my_style' onClick={() => { setNumber(number + 3) }}>Click me again</button>

            {/* update array */}
            <button onClick={() => update_products("oil", 1)}>update products</button>

            <input placeholder='Name' onChange={(e) => setName(e.target.value)}></input>
        </>
    )
}