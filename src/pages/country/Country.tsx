import { useEffect, useState } from 'react';
import BorderButton from '../../components/border-button/BorderButton';
import Button from '../../components/button/Button';
import classes from './Country.module.scss';
import { Country } from '../../shared/data.model';
import { useParams } from 'react-router-dom';

const CountryPage = () => {
  const { name } = useParams();
  const [[country], setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getNativeName = (object: any) => {
    const [key] = Object.keys(object);

    return object[key];
  };

  const fetchCountryHandler = async () => {
    setIsLoading(true);
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data: Country[] = await response.json();

    setCountries(() => data);
    console.log(data[0]);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchCountryHandler();
  }, []);

  return (
    <main className={classes['main']}>
      <Button />

      <div className={classes['main-content']}>
        {isLoading && (
          <div className={`${classes['img-cover']} skeleton index`}>
            <img width='320px' height='229px' loading='lazy' alt='' />
          </div>
        )}
        {!isLoading && (
          <div className={classes['img-cover']}>
            <img
              width='320px'
              height='229px'
              loading='lazy'
              src={country.flags.svg}
              alt=''
            />
          </div>
        )}

        <div className={classes['content']}>
          <div className={classes['info']}>
            <div className={classes['first-info']}>
              {isLoading && (
                <h2 className={`${classes['title']} skeleton`}>Belgium</h2>
              )}
              {!isLoading && (
                <h2 className={classes['title']}>{country.name.common}</h2>
              )}

              <ul className={classes['desc-list']}>
                {isLoading && (
                  <li className={`${classes['item']} skeleton`}>
                    <span className={classes['bold']}>Native Name:</span>
                    <span> Bundesrepublik Deutschland</span>
                  </li>
                )}

                {!isLoading && (
                  <li className={classes['item']}>
                    <span className={classes['bold']}>Native Name:</span>
                    <span>
                      {' ' + getNativeName(country.name.nativeName).official}
                    </span>
                  </li>
                )}

                {isLoading && (
                  <li className={`${classes['item']} skeleton`}>
                    <span className={classes['bold']}>Population:</span>
                    <span> 11,319,511</span>
                  </li>
                )}

                {!isLoading && (
                  <li className={classes['item']}>
                    <span className={classes['bold']}>Population:</span>
                    <span> {country.population}</span>
                  </li>
                )}

                {isLoading && (
                  <li className={`${classes['item']} skeleton`}>
                    <span className={classes['bold']}>Sub Region:</span>
                    <span> Europe</span>
                  </li>
                )}

                {!isLoading && (
                  <li className={classes['item']}>
                    <span className={classes['bold']}>Sub Region:</span>
                    <span> {country.continents[0]}</span>
                  </li>
                )}

                <li className={classes['item']}>
                  <span className={classes['bold']}>Capital:</span>
                  <span> Brussels</span>
                </li>
              </ul>
            </div>

            <ul className={classes['desc-list']}>
              <li className={classes['item']}>
                <span className={classes['bold']}>Top Level Domain:</span> be
              </li>
              <li className={classes['item']}>
                <span className={classes['bold']}>Currencies:</span> Euro
              </li>
              <li className={classes['item']}>
                <span className={classes['bold']}>Languages:</span> Dutch,
                French, German
              </li>
            </ul>
          </div>

          <div className={classes['bottom-info']}>
            <h3 className={classes['bottom-info__title']}>Border Countries:</h3>

            <ul className={classes['button-list']}>
              <li className={classes['button-item']}>
                <BorderButton>France</BorderButton>
              </li>
              <li className={classes['button-item']}>
                <BorderButton>Germany</BorderButton>
              </li>
              <li className={classes['button-item']}>
                <BorderButton>Netherlands</BorderButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
