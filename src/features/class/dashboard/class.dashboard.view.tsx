import ChatContainer from "../chat/class.chat.container";

const DashboardClass = () => {
  return (
    <main className="flex">
      <div className="w-2/3 bg-red-700">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/lonpW-0EybY?si=4rPMKJP6nLgYk5Gk&amp;start=70"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-1/3 bg-blue-700">
        <ChatContainer/>
      </div>
    </main>
  );
};


export default DashboardClass;
