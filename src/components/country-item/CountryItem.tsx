import classes from './CountryItem.module.scss';

const CountryItem = () => {
  return (
    <li className={classes['li']}>
      <div className={classes['img-container']}>
        <img
          width='267px'
          height='160px'
          loading='lazy'
          src='https://flagcdn.com/de.svg'
          alt=''
        />
      </div>

      <div className={classes['content']}>
        <h2 className={classes['country-name']}>Germany</h2>

        <ul className={classes['desc-list']}>
          <li className={classes['item']}>
            <span>Population</span>: 81,770,900
          </li>

          <li className={classes['item']}>
            <span>Region</span>: Europe
          </li>

          <li className={classes['item']}>
            <span>Capital</span>: Berlin
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CountryItem;
