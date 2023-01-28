import { useSelector, useDispatch } from 'react-redux';
import css from 'components/Filter/Filter.module.css'
import { filterContact } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  return (
      <div className={css.wrapper}>
          <label>Find contacts by name</label>
          <input type="text" name="filter" value={filter} onChange={e => dispatch(filterContact(e.target.value))}/>
      </div>
    )
}