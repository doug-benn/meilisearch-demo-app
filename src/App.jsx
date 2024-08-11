import { InstantSearch, SearchBox, InfiniteHits } from 'react-instantsearch';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import 'instantsearch.css/themes/satellite.css';
import CustomInfiniteHits from './components/CustomInfiniteHits';

const { searchClient } = instantMeiliSearch('http://localhost:7700', import.meta.env.VITE_SEARCH_KEY);

const App = () => (
  <InstantSearch indexName="movies" searchClient={searchClient}>
    <SearchBox />
    {/* <InfiniteHits hitComponent={Hit} /> */}
    <CustomInfiniteHits />
  </InstantSearch>
);

const Hit = ({ hit }) => (
  <article key={hit.id}>
    <h1>{hit.title}</h1>
    <p>${hit.overview}</p>
  </article>
);

export default App;
