import React from 'react'
import './Expencess.css'
import ExpenceItems from './ExpenceItems'
import Card from '../UI/Card'

const Expencess = (props) => {
  return (
    <Card className='expenses'>
      {
        props.item.map(
          expense =>(
            <ExpenceItems 
              key = {expense.id}
              date = {expense.date} 
              title = {expense.title} 
              price = {expense.price} 
            />
          )
        )
      }
    </Card>
  )
}

export default Expencess
