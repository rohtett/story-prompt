import { useState } from 'react';
import { cameliser } from './../../Helpers';
import './themesinput.scss';

const ThemesInput = ({ label }) => {
  const [selected, setSelected] = useState(false);
  return (
    <li className = 'themes__slider__section'>
      <input className = 'themes__slider__section--input'
        type = 'checkbox'
        checked = { selected }
        name = 'themes'
        id = {cameliser(label)}
        onChange = {() => {
          setSelected(selected => !selected)
        }}
      />
      <label className = 'themes__slider__section--label' htmlFor = { cameliser(label) } > { label } </label>
    </li>
  )
}

export default ThemesInput;
