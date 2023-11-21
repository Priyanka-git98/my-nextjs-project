"use client"
import '../style.css'
import { useState } from 'react'

export default function Page() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");
const addProduct = async() => {
    console.log(name, price, color, company, category)
    let result = await fetch ('http://localhost:3000/api/products',{
        method:"POST",
        body: JSON.stringify({name, price, color, company, category})
    });
    result = await result.json();
    if(result.success){
        alert("new product added")
    }
}

    return (
        <div >
            <h4 className='input'>Add Products</h4>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" className='input' />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product Price" className='input' />
            <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter Product Color" className='input' />
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product Company" className='input' />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" className='input' />
            <button onClick={addProduct} className='btn'>Add product</button>
        </div>
    )
}