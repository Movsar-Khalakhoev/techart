import React, {useEffect} from 'react'
import Step from '../components/Step'
import {useDispatch, useSelector} from 'react-redux'
import {getResult, resetCalculator} from '../redux/actions'

const Result = () => {
  const dispatch = useDispatch()
  const {propsIsOk, result, props, loading} = useSelector(state => state)

  useEffect(() => dispatch(getResult(props)), [dispatch, props])

  return (
    <Step
      step='Результат расчета'
      question={`${propsIsOk ? 'Успешно' : 'Ошибка'}`}
      nextText='Новый расчет'
      nextLink='/step-1'
      disableCancelButton
      nextOnClick={() => dispatch(resetCalculator())}
    >
      {
        loading
          ? 'loading...'
          : <span
              className={propsIsOk ? 'result__ok' : 'result__error'}
            >{result}</span>
      }
    </Step>
  )
}

export default Result
