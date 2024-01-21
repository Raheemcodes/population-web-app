import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { Country } from '../shared/data.model';

type CountriesContextType = {
  countries: Country[];
  isLoading: boolean;
};

export const CountriesContext = createContext<CountriesContextType>({
  countries: [],
  isLoading: false,
});

export const CountriesContextProvider = (props: PropsWithChildren) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCountriesHandler = async () => {
    setIsLoading(true);
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data: Country[] = await response.json();
    console.log(data[0]);
    setCountries(() => data);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchCountriesHandler();
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, isLoading }}>
      {props.children}
    </CountriesContext.Provider>
  );
};
