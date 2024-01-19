import CountryList from '../../components/country-list/CountryList';
import Filter from '../../components/filter/Filter';
import SearchInput from '../../components/search/Search';
import classes from './Home.module.scss';

const HomePage = () => {
  return (
    <main className={classes.main}>
      <section className={classes['search-filter']}>
        <SearchInput />

        <Filter />
      </section>

      <section className={classes['country-list__container']}>
        <CountryList />
      </section>
    </main>
  );
};

export default HomePage;
