import { useEffect, useState } from 'react';
import BorderButton from '../../components/border-button/BorderButton';
import Button from '../../components/button/Button';
import classes from './Country.module.scss';
import { Country } from '../../shared/data.model';

const CountryPage = () => {
  const [country, setCountry] = useState<Country[]>([]);
  // const

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={classes['main']}>
      <Button />

      <div className={classes['main-content']}>
        <div className={classes['img-cover']}>
          <img
            width='320px'
            height='229px'
            loading='lazy'
            src='https://flagcdn.com/de.svg'
            alt=''
          />
        </div>

        <div className={classes['content']}>
          <div className={classes['info']}>
            <div className={classes['first-info']}>
              <h2 className={classes['title']}>Belgium</h2>

              <ul className={classes['desc-list']}>
                <li className={classes['item']}>
                  <span className={classes['bold']}>Native Name:</span>
                  <span> Belgie</span>
                </li>
                <li className={classes['item']}>
                  <span className={classes['bold']}>Population:</span>
                  <span> 11,319,511</span>
                </li>
                <li className={classes['item']}>
                  <span className={classes['bold']}>Sub Region:</span>
                  <span> Europe</span>
                </li>
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
