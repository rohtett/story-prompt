import { useState, useEffect, useRef } from 'react';
import { ThemesInput } from './../'; //Components folder
import {  } from './../../Workers';
import './themes.scss';

const Themes = () => {
  const [themes, setThemes] = useState([]);

  const fantasyRef = useRef(null);
  const scifiRef = useRef(null);
  const historicalRef = useRef(null);

  useEffect(() => {
    fantasyRef.current.scrollLeft = (fantasyRef.current.scrollWidth - fantasyRef.current.clientWidth) /2;
    scifiRef.current.scrollLeft = (scifiRef.current.scrollWidth - scifiRef.current.clientWidth) /2;
    historicalRef.current.scrollLeft = (historicalRef.current.scrollWidth - historicalRef.current.clientWidth) /2;
  }, [])

  return (
    <div>
      <ul className = "themes__slider__section" ref = { fantasyRef } >
        <ThemesInput label = 'Alternate History' />
        <ThemesInput label = "Children's Story" />
        <ThemesInput label = 'Dark Fantasy' />
        <ThemesInput label = 'Fairy Tale' />
        <ThemesInput label = 'High Fantasy' />
        <ThemesInput label = 'Isekai' />
        <ThemesInput label = 'Magical Realism' />
        <ThemesInput label = 'Mythic' />
        <ThemesInput label = 'Sword and Sorcery' />
      </ul>
      <ul className = "themes__slider__section" ref = { scifiRef } >
        <ThemesInput label = 'Aliens' />
        <ThemesInput label = 'Alternate/Parallel Universe' />
        <ThemesInput label = 'Apocalytic/Post-Apocalyptic' />
        <ThemesInput label = 'Biopunk' />
        <ThemesInput label = 'Cyberpunk' />
        <ThemesInput label = 'Dying Earth' />
        <ThemesInput label = 'Immortality' />
        <ThemesInput label = 'Lost Worlds' />
        <ThemesInput label = 'Mind Transfer' />
        <ThemesInput label = 'Robots/AI' />
        <ThemesInput label = 'Space Exploration' />
        <ThemesInput label = 'Time Travel' />
        <ThemesInput label = 'Steam Punk' />
        <ThemesInput label = 'Utopia' />
      </ul>
      <ul className = "themes__slider__section" ref = { historicalRef } >
        <ThemesInput label = 'Biography' />
        <ThemesInput label = 'Colonisation' />
        <ThemesInput label = 'Historical Romance' />
        <ThemesInput label = 'Military' />
        <ThemesInput label = 'Nautical' />
        <ThemesInput label = 'Speculative Fiction' />
        <ThemesInput label = 'Western' />
      </ul>
    </div>
  )
}

export default Themes;
