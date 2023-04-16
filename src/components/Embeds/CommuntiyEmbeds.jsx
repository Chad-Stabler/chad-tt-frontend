import { getAllVideos } from '../../services/fetch-utils';
import { useEffect } from 'react';
import styles from './Embeds.css';
import CommunityEmbed from './CommunityEmbed';
import { useClipContext } from '../../state/ClipContext';
import { useInView } from 'react-intersection-observer';

export default function EmbedList() {
  const { clips, setClips, page,
    setPage, perPage, setPerPage } = useClipContext();

  useEffect(() => {
    setClips([]);
  }, []);
    
  async function allVideos() {
    setPerPage(7);
    const from = 0;
    const to = page * perPage;
    const data = await getAllVideos(from, to);
    setClips(data);
  }
    
  const nextPage = async () => {
    const firstClips = clips;
    setPage(page + 1);
    const moreClips = await allVideos();
    const newLoad = firstClips.concat(moreClips);
    setClips(newLoad);
  };
    
  const infiniteScrollRef = useInView({
    triggerOnce: true, 
    onChange: (inView) => {
      if (inView) nextPage();
    }
  }).ref;
    
  useEffect(() => {
    allVideos();
  }, [clips]);

  return <div className={styles.communityVid}>
    <div className={styles.EmbedList}>
      {
        clips.map((clip, i) => {
          const ref = i == clips.length - 1 ? infiniteScrollRef : undefined;
          if (clip) return (<CommunityEmbed key={clip.id + i} 
            clip={clip}
            allVideos={allVideos}
            infiniteScrollRef={ref} />);
        })
      }
    </div>
  </div>;
}
