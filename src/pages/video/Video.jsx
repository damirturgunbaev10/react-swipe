import "./Video.scss";

const Video = () => {
  return (
    <section className="video">
      <div className="video__container container">
        <div className="video__top">
          <h3 className="video__title subtopic">Watch video to discover advantages</h3>

          <hr className="video__hr title__hr" />
        </div>
        <div className="video__bottom">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ObBvywiONJA?si=B23uZOpnrQPW_R7g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
