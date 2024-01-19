import classes from './CountryList.module.scss';
import CountryItem from '../country-item/CountryItem';

const CountryList = () => {
  return (
    <ul className={classes['ul']}>
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
      <CountryItem />
    </ul>
  );
};

export default CountryList;
