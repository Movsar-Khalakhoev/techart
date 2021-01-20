import {Link} from 'react-router-dom'

const Step1Page = props => {
  const {
    children,
    step,
    question,
    nextText,
    nextLink,
    cancelLink,
    disableCancelButton,
    nextOnClick = () => {}
  } = props

  return (
    <div className='step'>
      <span className='step__count'>{step}</span>
      <div className='step__form form'>
        <div className="form__question">{question}</div>
        <div className="form__inner">
          {children}
        </div>
      </div>
      <div className='step__actions'>
        {!disableCancelButton &&
        <Link
          to={`${cancelLink}` || '/'}
          className='step__cancel'
          >Отменить</Link>
        }
        <Link
          to={`${nextLink}` || '/'}
          className='step__next'
          onClick={nextOnClick}
        >{nextText ? nextText : 'Далее'}</Link>
      </div>
    </div>
  )
}

export default Step1Page
