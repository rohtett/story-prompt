import { useState } from 'react';
import { cameliser } from './../../Workers'; //Components folder
import './themesinput.scss';

const ThemesInput = ({ label }) => {
  const [selected, setSelected] = useState(false);
  return (
    <li className = 'themes__slider__section__input'>
      <input className = 'themes__slider__section__input--input'
        type = 'checkbox'
        checked = { selected }
        name = 'themes'
        id = {cameliser(label)}
        onChange = {() => {
          setSelected(selected => !selected)
        }}
      />
      <label className = 'themes__slider__section__input--label' htmlFor = { cameliser(label) }> { label } </label>
    </li>
  )
}

export default ThemesInput;
