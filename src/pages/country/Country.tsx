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

  const getCurrency = (object: any) => {
    const [key] = Object.keys(object);

    return object[key];
  };

  const manipulatedLanguages = (): string => {
    const languages = Object.values(country.languages);

    return languages.join(', ');
  };

  const fetchCountryHandler = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );

      if (!response.ok) throw new Error('Something went wrong!');

      const data: Country[] = await response.json();

      setCountries(() => data);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch {
      setCountries(() => []);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
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
        {!isLoading && !country && <p>No Country was Found!</p>}
        {isLoading && (
          <div className={`${classes['img-cover']} skeleton index`}>
            <img loading='lazy' alt='' />
          </div>
        )}
        {!isLoading && country && (
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
              {!isLoading && country && (
                <h2 className={classes['title']}>{country.name.common}</h2>
              )}

              <ul className={classes['desc-list']}>
                {isLoading && (
                  <li className={`${classes['item']} skeleton`}>
                    <span className={classes['bold']}>Native Name:</span>
                    <span> Bundesrepublik Deutschland</span>
                  </li>
                )}
                {!isLoading && country && (
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
                {!isLoading && country && (
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
                {!isLoading && country && (
                  <li className={classes['item']}>
                    <span className={classes['bold']}>Sub Region:</span>
                    <span> {country.continents[0]}</span>
                  </li>
                )}

                {isLoading && (
                  <li className={`${classes['item']} skeleton`}>
                    <span className={classes['bold']}>Capital:</span>
                    <span> Brussels</span>
                  </li>
                )}
                {!isLoading && country && (
                  <li className={classes['item']}>
                    <span className={classes['bold']}>Capital:</span>
                    <span> {country.capital}</span>
                  </li>
                )}
              </ul>
            </div>

            <ul className={classes['desc-list']}>
              {isLoading && (
                <li className={`${classes['item']} skeleton`}>
                  <span className={classes['bold']}>Top Level Domain:</span> .be
                </li>
              )}
              {!isLoading && country && (
                <li className={classes['item']}>
                  <span className={classes['bold']}>Top Level Domain:</span>{' '}
                  {country.tld}
                </li>
              )}

              {isLoading && (
                <li className={`${classes['item']} skeleton`}>
                  <span className={classes['bold']}>Currencies:</span> Euro
                </li>
              )}
              {!isLoading && country && (
                <li className={classes['item']}>
                  <span className={classes['bold']}>Currencies:</span>{' '}
                  {getCurrency(country.currencies).name}
                </li>
              )}

              {isLoading && (
                <li className={`${classes['item']} skeleton`}>
                  <span className={classes['bold']}>Languages:</span> Dutch,
                  French, German
                </li>
              )}
              {!isLoading && country && (
                <li className={classes['item']}>
                  <span className={classes['bold']}>Languages:</span>
                  {' ' + manipulatedLanguages()}
                </li>
              )}
            </ul>
          </div>

          <div className={classes['bottom-info']}>
            {isLoading && (
              <h3 className={`${classes['bottom-info__title']} skeleton`}>
                Border Countries:
              </h3>
            )}
            {!isLoading && country && (
              <h3 className={classes['bottom-info__title']}>
                Border Countries:
              </h3>
            )}

            <ul className={classes['button-list']}>
              {isLoading &&
                ['France', 'Germany', 'Nigeria'].map((countryName) => (
                  <li
                    className={`${classes['button-item']} skeleton`}
                    key={countryName}
                  >
                    <BorderButton>France</BorderButton>
                  </li>
                ))}
              {!isLoading &&
                country &&
                country.borders &&
                country.borders.map((countryName) => (
                  <li className={classes['button-item']} key={countryName}>
                    <BorderButton>{countryName}</BorderButton>
                  </li>
                ))}
              {!isLoading && country && !country.borders && <span>None</span>}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
