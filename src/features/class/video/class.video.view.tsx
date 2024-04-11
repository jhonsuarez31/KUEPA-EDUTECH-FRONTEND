const VideoView = () => {
  return (
    <div className="w-full h-96 flex justify-center items-center">
     <iframe width="780"
      height="450" 
      src="https://www.youtube.com/embed/lonpW-0EybY?si=4rPMKJP6nLgYk5Gk&amp;start=70" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; 
      autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
};

export default VideoView;
