import { useState } from 'react';
import { cameliser } from './../../Helpers';
import './themesinput.scss';

const ThemesInput = ({ label, index, setCheckboxes }) => {
  const [selected, setSelected] = useState(false);
  return (
    <li className = 'themes__slider__section'>
      <input className = 'themes__slider__section--input'
        type = 'checkbox'
        checked = { selected }
        name = 'themes'
        id = {cameliser(label)}
        onChange = {() => {
          setCheckboxes((prev) => {
            setSelected(selected => !selected)
            if (selected) {
              prev[index] = null;
              return prev;
            } else {
              prev[index] = label;
              return prev;
            }
          })

        }}
      />
      <label className = 'themes__slider__section--label' htmlFor = { cameliser(label) } > { label } </label>
    </li>
  )
}

export default ThemesInput;
