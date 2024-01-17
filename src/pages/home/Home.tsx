import SearchInput from '../../components/search/Search';
import classes from './Home.module.scss';

const HomePage = () => {
  return (
    <main className={classes.main}>
      <SearchInput />
    </main>
  );
};

export default HomePage;
