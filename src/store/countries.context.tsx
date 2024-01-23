import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Country } from '../shared/data.model';

type CountriesContextType = {
  countries: Country[];
  isLoading: boolean;
  fetchCountries: () => void;
};

export const CountriesContext = createContext<CountriesContextType>({
  countries: [],
  isLoading: false,
  fetchCountries: () => {},
});

export const CountriesContextProvider = (props: PropsWithChildren) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const fetchCountriesHandler = async () => {
    const [key, val] = searchParams.entries().next().value || [];
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://restcountries.com/v3.1/${!val ? 'all' : `${key}/${val}`}`
      );

      if (!response.ok) throw new Error('Something went wrong');

      const data: Country[] = await response.json();

      setCountries(() => data);
      setTimeout(() => {
        setIsLoading(false);
      }, 20000);
    } catch (err) {
      setCountries(() => []);

      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountriesHandler();
  }, [searchParams]);

  return (
    <CountriesContext.Provider
      value={{ countries, fetchCountries: fetchCountriesHandler, isLoading }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};
