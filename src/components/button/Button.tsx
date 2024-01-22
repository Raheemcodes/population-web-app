import { useNavigate } from 'react-router-dom';
import classes from './Button.module.scss';

const Button = () => {
  const navigate = useNavigate();

  return (
    <button className={classes['btn']} onClick={() => navigate(-1)}>
      <div className={classes['icon']}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='17'
          height='12'
          viewBox='0 0 17 12'
          fill='none'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.81802 0.696699L6.87868 1.75736L3.3785 5.25754H16.7428L16.7428 6.74246H3.3785L6.87868 10.2426L5.81802 11.3033L0.514719 6L5.81802 0.696699Z'
            fill='#111517'
          />
        </svg>
      </div>

      <span>Back</span>
    </button>
  );
};

export default Button;
