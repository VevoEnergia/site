export default function HeroVideo({ isMobile }: { isMobile: boolean }) {
  const videoUrl = isMobile ? "/hero/mobile" : "/hero/desktop";

  return (
    <video
      className="z-0 absolute top-0 left-0 w-full h-full object-cover"
      preload="auto"
      autoPlay
      muted
      loop
      playsInline
      controlsList="none"
    >
      <source src={`${videoUrl}.webm`} type="video/webm" />
      <source src={`${videoUrl}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
