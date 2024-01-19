import { useState } from 'react';
import classes from './Filter.module.scss';

const Filter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openClass, setOpenClass] = useState<string>('');
  let timeout: NodeJS.Timeout;

  const clickHandler = () => {
    if (timeout) clearTimeout(timeout);

    if (!isOpen) {
      setIsOpen(() => true);
      timeout = setTimeout(() => setOpenClass(() => classes['opened']), 300);
    } else {
      setOpenClass(() => '');
      timeout = setTimeout(() => setIsOpen(() => false), 300);
    }
  };

  return (
    <div className={`${classes['dropdown']} ${openClass}`}>
      <button
        className={classes['dropdown-btn']}
        title='dropdown title'
        onClick={clickHandler}
      >
        <span>Filter by Region</span>

        <div className={classes['dropdown-arrow']}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='10'
            fill='none'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z'
              fill='black'
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <ul className={classes['dropdown-list']}>
          <li className={classes['dropdown-item']}>Africa</li>
          <li className={classes['dropdown-item']}>America</li>
          <li className={classes['dropdown-item']}>Asia</li>
          <li className={classes['dropdown-item']}>Europe</li>
          <li className={classes['dropdown-item']}>Oceania</li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
