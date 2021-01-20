import React from 'react'
import Step from '../components/Step'
import {useDispatch} from 'react-redux'
import {setHeight} from '../redux/actions'

const Step2Page = () => {
  const dispatch = useDispatch()

  return (
    <Step
      step='Шаг 2'
      question='Количесво этажей (число):'
      nextLink='/step-3'
      cancelLink='/step-1'
    >
      <input
        className='step-2__input'
        onChange={event => dispatch(setHeight(event.target.value))}
        type="text"
      />
    </Step>
  )
}

export default Step2Page
