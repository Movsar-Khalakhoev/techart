import React from 'react'
import Step from '../components/Step'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setBuilding} from '../redux/actions'

const Step1Page = () => {
  const dispatch = useDispatch()

  return (
    <Step
      step='Шаг 1'
      question='Что будем строить?'
      nextLink='/step-2'
      cancelLink='/step-1'
    >
      <ul className="step-1__answers">
        <li>
          <Link
            to='/step-2'
            onClick={() => dispatch(setBuilding(1))}
          >Жилой дом</Link>
        </li>
        <li>
          <Link
            to='/step-3'
            onClick={() => dispatch(setBuilding(2))}
          >Гараж</Link>
        </li>
      </ul>
    </Step>
  )
}

export default Step1Page
