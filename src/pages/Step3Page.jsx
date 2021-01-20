import Step from '../components/Step'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setMaterial} from '../redux/actions'

const Step3Page = () => {
  const dispatch = useDispatch()
  const materials = [
    ['Кирпич', 1],
    ['Шлакоблок', 2],
    ['Деревянный брус', 3],
    ['Металл', 4],
    ['Cендвич-панели', 5]
  ]

  return (
    <Step
      step='Шаг 3'
      question='Материал стен:'
      nextLink='/step-4'
      cancelLink='/step-1'
    >
      <ul className="step-3__answers">
        {
          materials.map(([material, id]) => (
            <li key={id}>
              <Link
                to='/step-4'
                onClick={() => dispatch(setMaterial(id))}
              >{material}</Link>
            </li>
          ))
        }
      </ul>
    </Step>
  )
}

export default Step3Page
