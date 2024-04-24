import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>查看图片信息</h1>
    <div className='cards_container'>
        <div className='cards_wrapper'>
            <ul className='cards_items'>
                <CardItem 
                src="/images/image1.png"
                text='欣赏皮影之美'
                label='aisp'
                path='/ps板块'
                />
                <CardItem 
                src="/images/image2.jpg"
                text='欣赏皮影之美'
                label='aisp'
                path='/ps板块'
                />
            </ul>
        </div>

    </div>
    </div>
  )
}

export default Cards
