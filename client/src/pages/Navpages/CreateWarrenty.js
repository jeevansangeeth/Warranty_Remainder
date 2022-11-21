import React, { useState } from "react";
import Axios from "axios"
import "../Navpages/CreateWarrenty.css"

export default function CreateWarrenty(){

    const [category,setCategory]=useState("")
    const [productName,setProductName]=useState("")
    const [brandName,setBrandName]=useState("")
    const [model,setModel]=useState("")
    const [invoiceNumber,setInvoiceNumber]=useState("")
    const [purchaseDate,setPurchaseDate]=useState("")
    const [warrantyPeriod,setWarrantyPeriod]=useState("")
    const [storeContact,setStoreContact]=useState("")
    const [note,setNote]=useState("")

 const newWarrentyCreate = ()=>{
    Axios.post("http://localhost:3001/warrentyCreate",{
     category:category,
     productName:productName,
     brandName:brandName,
     model:model,
     invoiceNumber:invoiceNumber,
     purchaseDate:purchaseDate,
     warrantyPeriod:warrantyPeriod,
     storeContact:storeContact,
     note:note,
    }).then((response)=>{
     console.log(response);
       
     })
  };
 

 return(
    <div className="createWarrentyBox">
        <h1>New Warrenty</h1>
        <div className="inputDetails">
            <select  onChange={(e)=>setCategory(e.target.value)}> 
            <option disabled selected hidden>Category</option>
            <option >Home Appliances</option>
            <option > Electronics</option>
            <option > Fashion & Accessories</option>
            <option > Sport & Leisure</option>
            <option > Auto & Moto </option>
            <option > Others</option>
            </select>
            <input type="text"  placeholder="Product Name*"  onChange={(e)=>setProductName(e.target.value)}/>
            <input type="text" placeholder="Brand Name*"  onChange={(e)=> setBrandName(e.target.value)}/>
            <input type="text" placeholder="Model*"  onChange={(e)=>setModel(e.target.value)}/>
            <input type="number" placeholder="Invoice Number*"  onChange={(e)=>setInvoiceNumber(e.target.value)}/>
            <input type="date" placeholder="Purchase Date*"  onChange={(e)=>setPurchaseDate(e.target.value)}/>
            <input type="date" placeholder="Warranty Period" onChange={(e)=>setWarrantyPeriod(e.target.value)}/>
            <input type="text" placeholder="Store contact / Customer support" onChange={(e)=>setStoreContact(e.target.value)}/>
            <textarea type="comment" placeholder="Note" onChange={(e)=>setNote(e.target.value)}/><br></br>
            <button onClick={newWarrentyCreate}>Save</button>
        </div>
    </div>
    )
}