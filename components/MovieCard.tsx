import { Movie } from "@prisma/client";
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";

interface MovieCardProps {
  data: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="col-span group relative h-[12vw] bg-zinc-900">
      <Image
        fill
        className="h-[12vw] w-full cursor-pointer rounded-md object-cover shadow-xl transition delay-300 group-hover:opacity-90 sm:group-hover:opacity-0"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />
      <div className="invisible absolute top-0 z-10 w-full scale-0 opacity-0  transition delay-300 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:scale-110 group-hover:opacity-100 sm:visible">
        <img
          className="h-[12vw] w-full cursor-pointer rounded-t-md object-cover shadow-xl transition"
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />
        <div className="absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => {}}
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10"
            >
              <BsFillPlayFill size={30} />
            </div>
            <p className="mt-4 font-semibold text-green-400">
              New <span className="text-white">2023</span>
            </p>
            <div className="mt-4 flex flex-row items-center gap-2">
              <p className="text-[10px] text-white lg:text-sm">
                {data.duration}
              </p>
            </div>
            <div className="mt-4 flex flex-row items-center gap-2">
              <p className="text-[10px] text-white lg:text-sm">{data.genre}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
