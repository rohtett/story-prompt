import { BiErrorAlt } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import './modal.scss';

const Test = ( { requestState, setRequestState } ) => {
  return requestState && (
    <div className = 'modal'>
      <div className = 'modal--background' />
      <div className = 'modal--wrapper'>
        <div className = 'modal--wrapper__popup'>
          <div className = 'modal--wrapper__popup__header'>
            <div className = 'modal--wrapper__popup__header__exit'>
              <div className = 'modal--wrapper__popup__header__exit--button'
                onClick = {() => {
                  setRequestState(null);
                }}
              >
                <RxCross2 />
              </div>
            </div>
          </div>
          <div className = 'modal--wrapper__popup__body'>
            { requestState === 'awaiting'? (
              <div>
                <div className = 'modal--wrapper__popup--loading'>
                  <div className = 'modal--wrapper__popup--loading--meter' />
                  <div className = 'modal--wrapper__popup--loading--inner' />
                </div>
                <span>Requesting Server</span>
              </div>
            ): requestState === 'completed'? (
              <span>
                { sessionStorage.getItem('response') }
                </span>
            ): (
              <div>
                <div className='error__icon'>
                  <BiErrorAlt />
                </div>
                <span>Error:
                  { sessionStorage.getItem('error') }
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Test;
