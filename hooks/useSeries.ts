import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useSeries = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/series', fetcher, {
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

export default useSeries;
