import { Themes } from './../../Components';
import './generator.scss';

const Generator = () => {
  return (
    <div className = 'generator'>
      <form>
        <Themes/>
        <div className='generator__button'>
          <button>Generate Prompt</button>
        </div>
      </form>
    </div>
  )
}

export default Generator;
