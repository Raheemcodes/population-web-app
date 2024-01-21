import { Link } from 'react-router-dom';
import { Country } from '../../shared/data.model';
import classes from './CountryItem.module.scss';

const CountryItem = ({
  country,
  isLoading,
}: {
  country: Country;
  isLoading: boolean;
}) => {
  return (
    <>
      {isLoading && (
        <li className={classes['li']}>
          <div className={`${classes['img-container']} skeleton`}></div>

          <div className={classes['content']}>
            <h2 className={`${classes['country-name']} skeleton`}>Germany</h2>

            <ul className={classes['desc-list']}>
              <li className={`${classes['item']} skeleton`}>
                <span>Population</span>: 81,770,900
              </li>

              <li className={`${classes['item']} skeleton`}>
                <span>Region</span>: Europe
              </li>

              <li className={`${classes['item']} skeleton`}>
                <span>Capital</span>: Berlin
              </li>
            </ul>
          </div>
        </li>
      )}
      {!isLoading && (
        <li className={classes['li']}>
          <Link to={country.name.common}>
            <div className={classes['img-container']}>
              <img
                loading='lazy'
                src={country.flags.svg}
                alt={country.flags.alt}
              />
            </div>

            <div className={classes['content']}>
              <h2 className={classes['country-name']}>{country.name.common}</h2>

              <ul className={classes['desc-list']}>
                <li className={classes['item']}>
                  <span>Population</span>: {country.population}
                </li>

                <li className={classes['item']}>
                  <span>Region</span>: {country.continents[0]}
                </li>

                <li className={classes['item']}>
                  <span>Capital</span>: {country.capital}
                </li>
              </ul>
            </div>
          </Link>
        </li>
      )}
    </>
  );
};

export default CountryItem;
