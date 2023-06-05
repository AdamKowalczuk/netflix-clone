import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useFilms = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/films', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useFilms;
