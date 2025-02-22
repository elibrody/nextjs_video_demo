import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SampleVideo(){
  const router = useRouter();

  useEffect(() => {
    const el = document.getElementById('my_video_el') as HTMLVideoElement;
    if (el) {
      el.muted = false;
      el.play();
    }
  }, []);

  return (
    <div>
      <video
        id="my_video_el"
        style={{ width: "100%" }}
        autoPlay
        muted={true}
        controls
        playsInline>
        <source src="https://dev.html-videoplayer.pages.dev/assets/video.mp4" type="video/mp4" />
      </video>
      <div style={{padding: 15}}><button onClick={() => router.push('/', undefined, {shallow: true})} style={{border: '2px solid black', padding: 15}}>Go Back</button></div>
    </div>
  );
}
