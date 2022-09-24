import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = 'Pop';

  if (isFetching) return <Loader title='Loading songs' />;
  if (error) return <Error />;
  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
        <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2>
        <select
          onChange={() => {}}
          value=''
          className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
          {genres.map(({ title, value }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((song, i) => {
          const { layout, type, key, title, subtitle, share, images, hub, artists, url, highlightsurls, properties } =
            song;
          return <SongCard key={key} song={title} i={i} />;
        })}
      </div>
    </div>
  );
};

export default Discover;
