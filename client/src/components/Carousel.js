import React from "react";
import Carousel from "react-bootstrap/Carousel";


function MyCarousel() {


  return (
    <div id="carname">
      <p id="carname">And a little more...</p>
      <Carousel id="car">
        <Carousel.Item>
          <iframe id="car1"
            width="1600" height="757" src="https://www.youtube.com/embed/jq9fqBpIr_Y" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
            title="1 slide"></iframe>
        </Carousel.Item>

        <Carousel.Item>
          <iframe id="car1" width="1600" height="757" src="https://www.youtube.com/embed/uc1oMulOZ5c" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="2 slide" ></iframe>
        </Carousel.Item>

        <Carousel.Item>
          <iframe id="car1" width="1583" height="588" src="https://www.youtube.com/embed/JRykedv5CJ4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="3 slide"></iframe>
        </Carousel.Item>

        <Carousel.Item>
          <iframe id="car1" width="1583" height="588" src="https://www.youtube.com/embed/AjgD3CvWzS0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="4 slide"></iframe>
        </Carousel.Item>

        <Carousel.Item>
          <iframe id="car1" width="1583" height="588" src="https://www.youtube.com/embed/KvYh1e93BII" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="5 slide"></iframe>
        </Carousel.Item>

        <Carousel.Item>
          <iframe id="car1" width="1583" height="588" src="https://www.youtube.com/embed/_PobWSUG2WY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="6 slide"></iframe>
        </Carousel.Item>

        <Carousel.Item>
          <iframe id="car1" width="1583" height="588" src="https://www.youtube.com/embed/fkV4tmFSQz4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="7 slide"></iframe>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default MyCarousel;