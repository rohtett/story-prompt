import { useState, useEffect, useRef } from 'react';
import { ThemesInput } from './../'; //Components folder
import './themes.scss';

const fantasy = ['Alternate History', 'Children\'s Story', 'Dark Fantasy', 'Fairy Tail', 'High Fantasy', 'Reincarnation (Isekai)', 'Magical Realism', 'Magical Technology', 'Medieval', 'Mythic', 'Sword and Sorcery'];

const scifi = [ 'Aliens', 'Alternate/Parallel Universe', 'Apocalytic/Post-Apocalyptic', 'Biopunk', 'Cyberpunk', 'Dying Earth', 'Futuristic', 'Immortality', 'Lost Worlds', 'Mind Transfer', 'Robots/AI', 'Space Exploration', 'Time Travel', 'Steam Punk', 'Utopia'];

const historical = ['Biography', 'Colonisation', 'Contemporary', 'Historical Romance', 'Historically Accurate', 'Military', 'Monarchy', 'Nautical', 'Speculative Fiction (Supernatural)', 'Western'];

const Themes = ({ fantasyState, setFantasyState, scifiState, setScifiState, historicalState, setHistoricalState }) => {
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
    <div className = 'themes' >
      <ul className = 'themes__slider' ref = { fantasyRef } >
        {fantasy.map((theme, index) => (
          <ThemesInput setCheckboxes = { setFantasyState } label = { theme } index = { index } key = { theme } />
        ))}
      </ul>
      <ul className = "themes__slider" ref = { scifiRef } >
      {scifi.map((theme, index) => (
        <ThemesInput  setCheckboxes = { setScifiState } label = { theme } index = { index } key = { theme } />
      ))}
      </ul>
      <ul className = "themes__slider" ref = { historicalRef } >
      {historical.map((theme, index) => (
        <ThemesInput  setCheckboxes = { setHistoricalState } label = { theme } index = { index } key = { theme } />
      ))}
      </ul>
    </div>
  )
}

export default Themes;
