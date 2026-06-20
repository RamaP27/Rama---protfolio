const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none w-full h-full justify-center items-center pointer-events-none select-none">
      <video
        src="/landing_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[480px] h-[480px] object-cover rounded-full border-4 border-accent/30 shadow-2xl shadow-accent/20"
      />
    </div>
  );
};

export default Avatar;
