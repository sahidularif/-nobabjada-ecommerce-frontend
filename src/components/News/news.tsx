import React from "react";
import smartwatch from "../../images/news1.jpg";
const News = () => {
  return (
    <div className="container">
      
      
      <div className="news-wrapper">
        <div className="news">
          <div className="news-img">
            <img src={smartwatch} alt="news image" />
          </div>
          <div className="news-description">
            <h6>October 5, 2019</h6>
            <h5>How to choose perfect gadgets</h5>
            <p>
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the uppers ...
            </p>
          </div>
        </div>
        <div className="news">
          <div className="news-img">
            <img src={smartwatch} alt="news image" />
          </div>
          <div className="news-description">
            <h6>October 5, 2019</h6>
            <h5>How to choose perfect gadgets</h5>
            <p>
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the uppers ...
            </p>
          </div>
        </div>
        <div className="news">
          <div className="news-img">
            <img src={smartwatch} alt="news image" />
          </div>
          <div className="news-description">
            <h6>October 5, 2019</h6>
            <h5>How to choose perfect gadgets</h5>
            <p>
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the uppers ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
