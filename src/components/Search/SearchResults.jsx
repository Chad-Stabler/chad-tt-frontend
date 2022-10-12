
import SearchResultCard from './SearchResultsCard.jsx';
import styles from './Search.css';


export default function SearchResults({ results, infinScrollRef }) {
  return <ul className = {styles.SearchResults}>
    {results.map((result, i) => {
      const ref = i == results.length - 3 ? infinScrollRef : undefined;
      return <SearchResultCard 
        key={result._id}
        games={result}
        infinScrollRef={ref}
      />;
    })}
  </ul>;
}
