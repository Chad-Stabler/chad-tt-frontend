import {
  createContext,
  useContext,
  useState
} from 'react';

const ClipContext = createContext();

export default function ClipProvider({ children }) {
  const [clips, setClips] = useState([]);    
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  const clipState = {
    clips, setClips, page, setPage, perPage, setPerPage
  };

  return <ClipContext.Provider value={clipState}>
    {children}
  </ClipContext.Provider>;
}

export function useClipContext() {
  return useContext(ClipContext);
}
