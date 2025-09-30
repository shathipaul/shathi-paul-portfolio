"use client";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const ReviewCards = () => {
  const reviewData = [
    {
      clientname: "Sabri Bulbul",
      rating: 5,
      reviewDate: "March, 2025",
      review:
        "Working with Shathi Paul on the Grand Duchy platform was an exceptional experience from start to finish. Her attention to detail truly shines through in every aspect of the website's development - from the elegant typography choices to the seamless navigation between sections. What impressed me most was her professionalism throughout the entire project. 😊",
    },
    {
      clientname: "Torbay Constructions",
      rating: 5,
      reviewDate: "March, 2025",
      review:
        "Shathi Paul's work was nothing short of exceptional! The professional touch, meticulous attention to details, and ability to exceed expectations were truly impressive. Her proactive communication and polite nature made collaboration a breeze. WELL DONE, Shathi! 😊 Happy to continue our business relationship!",
    },
    {
      clientname: "Laura Barry",
      rating: 5,
      reviewDate: "January, 2025",
      review:
        "Collaborating with Shathi on this project has been great. Shathi professionalism and deep understanding of her profession makes bringing to life the product vision a pleasure 💞",
    },
    {
      clientname: "Lance Riddle",
      rating: 5,
      reviewDate: "December, 2024",
      review:
        "Working with Shathi Paul was an outstanding experience! Her professionalism and attention to detail were exceptional, and she truly exceeded my expectations. Plus, her proactive communication made the process smooth and efficient. 👍",
    },
    {
      clientname: "Pamela Dawson",
      rating: 5,
      reviewDate: "April, 2023",
      review:
        "Working with Shathi was a great experience. She is very professional, detail-oriented, and has a wealth of knowledge and understanding of what I needed for my project. As with prior projects Shathi has worked on, the work is always excellent. I highly recommend Shathi.",
    },
  ];
  return (
    <div className="relative z-30">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          1280: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        spaceBetween={10}
        centeredSlides={true}
        speed={1500}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="reviewSwiper mt-16"
      >
        {reviewData.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="bg-secondary p-10 rounded-[30px] shadow-2xl cursor-pointer">
              <div className="mt-1">
                <div className="mb-3 flex flex-col md:flex-row gap-3 items-center justify-between">
                  <div className="text-center md:text-start">
                    <h5 className="text-lg font-medium">{data.clientname}</h5>
                    <p className="text-lightGray text-sm">{data.reviewDate}</p>
                  </div>
                  <div className="flex text-gold">
                    {[...Array(data.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="mb-3 text-xs leading-6 md:text-sm text-justify md:leading-7 font-medium">
                  {data.review}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCards;
