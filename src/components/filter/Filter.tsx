import { MouseEventHandler, useEffect, useState } from 'react';
import classes from './Filter.module.scss';
import { useSearchParams } from 'react-router-dom';

let timeout: NodeJS.Timeout[] = [];

const Filter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openClass, setOpenClass] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  const closeDropdown = () => {
    timeout.forEach((time) => {
      if (time) clearTimeout(time);
    });

    setOpenClass(() => '');
    timeout[0] = setTimeout(() => setIsOpen(() => false), 300);
  };

  const clickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    timeout.forEach((time) => {
      if (time) clearTimeout(time);
    });

    if (!isOpen) {
      setIsOpen(() => true);
      timeout[0] = setTimeout(() => setOpenClass(() => classes['opened']), 300);
      timeout[1] = setTimeout(() => {
        closeDropdown();
      }, 5000);
    } else {
      closeDropdown();
    }
  };

  const setRegion = (region: string) => {
    setSearchParams({ region });
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);
  }, []);

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
          <li
            className={classes['dropdown-item']}
            onClick={() => setRegion('Africa')}
          >
            Africa
          </li>
          <li
            className={classes['dropdown-item']}
            onClick={() => setRegion('America')}
          >
            America
          </li>
          <li
            className={classes['dropdown-item']}
            onClick={() => setRegion('Asia')}
          >
            Asia
          </li>
          <li
            className={classes['dropdown-item']}
            onClick={() => setRegion('Europe')}
          >
            Europe
          </li>
          <li
            className={classes['dropdown-item']}
            onClick={() => setRegion('Oceania')}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
