import Button from '../../components/button/Button';
import classes from './Country.module.scss';

const CountryPage = () => {
  return (
    <main>
      <Button />

      <div className={classes['main-content']}>
        <div className={classes['img-cover']}></div>

        <div className={classes['content']}>
          <div className={classes['first-info']}>
            <h2 className={classes['title']}>Belgium</h2>

            <ul className='desc-lst'>
              <li className='item'>
                <span className='bold'>Native Name:</span> Belgie
              </li>
              <li className='item'>
                <span className='bold'>Population:</span> 11,319,511
              </li>
              <li className='item'>
                <span className='bold'>Sub Region:</span> Europe
              </li>
              <li className='item'>
                <span className='bold'>Capital:</span> Brussels
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
