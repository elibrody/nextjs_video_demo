import SampleVideo from '@/components/SampleVideo';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

function changeURLWithoutRerender(newURL: string) {
  window.history.replaceState({ ...window.history.state, as: newURL, url: newURL }, "", newURL);
}

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const router = useRouter();

  const handleOpenVideo = useCallback(() => {
    setShowVideo(true);
    changeURLWithoutRerender('/video');
  }, []);

  return (
    <>
      {showVideo ? <SampleVideo /> :
        <main
          className={`flex min-h-screen flex-col items-center p-24 gap-2`}
        >
          <div>
            <button onClick={handleOpenVideo} style={{ border: '2px solid blue', padding: 15 }}>Open Video 1</button>
          </div>
          <div>
            <button onClick={() => router.push('/video', undefined, {shallow: true})} style={{ border: '2px solid blue', padding: 15 }}>Open Video 2</button>
          </div>
        </main>
      }
    </>
  )
}
