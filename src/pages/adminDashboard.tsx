import React, { useEffect ,useState} from 'react'

import { useRouter } from 'next/router'
import VendorNavbar from '../components/adminNavbar'
import Link from 'next/link'
import style from '../styles/vendor.module.css'


import { db } from '@utils/firebase'
import { collection ,getDocs, doc,updateDoc} from 'firebase/firestore'
import VendorProductItem from '../components/VendorProductItem'
import { toast,Toaster } from 'react-hot-toast'



export default function VendorDashboard() {
    
    
    const [products,setProducts]=useState([])
    const [allProducts,setAllProducts]=useState([])
   
    const [unAssignOrders,setUnAssignOrders]:any=useState(0)
    const [lowStock,setLowStock]:any=useState(0)
    
    const [searchString,setSearchString]=useState("")
    const [pending,setPending]:any=useState(0)
    const [awaitngDelivery,setAwaitingDelivery]:any=useState(0)
    const [pickedUp,setPickedUp]:any=useState(0)
    const [returned,setReturned]:any=useState(0)

    useEffect(() => {
      

      
        
        getData()


    },[])
    const getData = async () => {
      
     
      let arr: any = [];
      const data = await getDocs(collection(db, "products"));
      let low:any=0
      data.forEach((doc: any) => {
        if(doc.data()){
          const prod={id:doc.id,...doc.data()}
          arr.push(prod);
            
            

          
        }
       
        
      });
      setLowStock(low)
     setAllProducts(arr)
      setProducts(arr)

     
    };
    
     
    


    const onSearchChange=async(e:any)=>{
      setSearchString(e.target.value)
      if(e.target.value===""){
        setProducts(allProducts)
      }
      
    
    }
  const filter=async()=>{
    setProducts([])
    let arr:any=[]
    allProducts.forEach((product:any)=>{
      
  
      if(product.name.toLowerCase().includes(searchString.toLowerCase())){
        arr.push(product)
        
      }
  
    })
    
    setProducts(arr)
    
  
  }
  return (
    <>
    <Toaster/>
    
    <VendorNavbar/>

    
    <div className="container mt-4 pt-0">

 
    <div className="row mt-4 mb-3  d-flex justify-content-end" >
           
           <Link href={"VendorAddNewProduct"}><button className={`btn  d-flex justify-content-center align-items-center  gap-2    ${style.login_btn}`}>

<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{width:'20px',height:'20px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>Add New
</button></Link>
            
        </div>
        <div className='row mb-4'>

{/* <div className="input-group">
  <div className="form-outline">
    <input type="search"  name="search" value={searchString} onChange={onSearchChange} className="form-control"  placeholder='search ...'/>
    
  </div>
  <button type="button" onClick={filter} className={`btn ${style.search_btn}`} >
search
  </button>
</div> */}

</div>

<div className="row">
{
  products.length>0?

  products.map((product:any)=>{
   return <VendorProductItem probs={product} key={product.id}/>
  })
 
  
  :' No product ...'
}

</div>
    </div>

    






    </>
  )
}
