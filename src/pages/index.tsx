import SampleVideo from '@/components/SampleVideo';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

function changeURLWithoutRerender(newURL: string) {
  window.history.replaceState({ ...window.history.state, as: newURL, url: newURL }, "", newURL);
}

export default function Home() {
  const router = useRouter();
  const [_, nextTick] = useState(Date.now());

  const handleOpenVideo = useCallback(() => {
    changeURLWithoutRerender('/video');
    nextTick(Date.now());
  }, []);

  useEffect(() => {
    handleOpenVideo();
  }, [handleOpenVideo]);

  const showVideo = typeof window !== "undefined" && window.location.href.indexOf('/video') !== -1;

  return (
    <>
      {showVideo ? <SampleVideo /> :
        <main className={`flex min-h-screen flex-col items-center p-24 gap-2`}>
          <div>
            <button onClick={handleOpenVideo} style={{ border: '2px solid blue', padding: 15 }}>Open Video 1</button>
          </div>
          <div>
            <button onClick={() => router.push('/video', undefined, { shallow: true })} style={{ border: '2px solid blue', padding: 15 }}>Open Video 2</button>
          </div>
        </main>
      }
    </>
  )
}
