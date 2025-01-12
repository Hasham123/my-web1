import React from 'react'

const Watches = () => {
    const watchData =[
        {id:1,name:"watch1",price:1000,description:"luxury watch",image:"/watch1.jpg"},
        {id:2,name:"watch2",price:1000,description:"luxury watch",image:"/watch2.jpg"},
        {id:3,name:"watch3",price:1000,description:"luxury watch",image:"/watch3.jpg"},
        {id:4,name:"watch4",price:1000,description:"luxury watch",image:"/watch4.jpg"},
        {id:5,name:"watch5",price:1000,description:"luxury watch",image:"/watch5.jpg"},
        {id:6,name:"watch6",price:1000,description:"luxury watch",image:"/watch6.jpg"},
    ]
  return (
    <div>
      <div className='watches'>
      {watchData.map((watch)=>(
        <div key={watch.id} className='watch-card'>
            <img src={watch.image} alt={watch.name} className='image'/> 
            <h3 className='watch-name'>{watch.name}</h3>
            <p className='desc'>{watch.description}</p>
            <div className='price'>$ {watch.price} </div>         
              <button className='watch-button'>BUY NOW</button>     </div>
      )
    )}
      </div>
    </div>
  )
}

export default Watches
