import useSWR from "swr";
import { Movie } from "@prisma/client";

import fetcher from "@/lib/fetcher";

const useMovieList = () => {
  const { data, error, isLoading } = useSWR<Movie[]>("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useMovieList;
