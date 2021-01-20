import React from 'react'
import Step from '../components/Step'
import {useDispatch} from 'react-redux'
import {setSizex, setSizey} from '../redux/actions'

const Step4Page = () => {
  const dispatch = useDispatch()

  return (
    <Step
      step='Шаг 4'
      question='Длина стен (в метрах):'
      nextText='Рассчитать'
      nextLink='result'
      cancelLink='step-1'
    >
      <div className='step-4__size'>
        <input
          className='step-4__input'
          onChange={event => dispatch(setSizex(event.target.value))}
          type="text"
        />
        <span className="step-4__cross">&#10006;</span>
        <input
          className='step-4__input'
          onChange={event => dispatch(setSizey(event.target.value))}
          type="text"
        />
      </div>
    </Step>
  )
}

export default Step4Page
