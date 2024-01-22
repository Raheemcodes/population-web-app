import classes from './CountryList.module.scss';
import CountryItem from '../country-item/CountryItem';
import { useContext } from 'react';
import { CountriesContext } from '../../store/countries.context';
import { Country } from '../../shared/data.model';

const CountryList = () => {
  const countriesCxt = useContext(CountriesContext);

  return (
    <ul className={classes['ul']}>
      {countriesCxt.isLoading &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((country: any, idx) => (
          <CountryItem
            key={idx}
            country={country}
            isLoading={countriesCxt.isLoading}
          />
        ))}
      {!countriesCxt.isLoading &&
        !!countriesCxt.countries.length &&
        countriesCxt.countries.map((country: Country) => (
          <CountryItem
            key={country.name.official}
            country={country}
            isLoading={countriesCxt.isLoading}
          />
        ))}
      {!countriesCxt.isLoading && !countriesCxt.countries.length && (
        <p>No Country was Found!</p>
      )}
    </ul>
  );
};

export default CountryList;
