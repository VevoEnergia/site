export default function HeroVideo({ isMobile }: { isMobile: boolean }) {
  const videoUrl = isMobile ? "/hero/mobile.webm" : "/hero/desktop.webm";

  return (
    <video
      className="z-0 absolute top-0 left-0 w-full h-full object-cover"
      preload="none"
      autoPlay
      muted
      loop
      playsInline
      controlsList="none"
    >
      <source src={videoUrl} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
