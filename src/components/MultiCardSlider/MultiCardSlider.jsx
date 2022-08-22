import React from "react";
import { Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MultiCardSlider.css";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// // Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import "./styles.css";
// import "swiper/modules/pagination/pagination.min.css"
// // import required modules
// import { Pagination, Navigation } from "swiper";

export const MultiCardSlider = () => {
    return (
        <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card className="bg-dark text-white">
            <Card className="bg-dark text-white">
              <Card.Img src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.comC/O https://placeholder.com/" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                <Button variant="primary" size="lg">
                  Large button
                </Button>{' '}
              </Card.ImgOverlay>
              </Card>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
    );
}