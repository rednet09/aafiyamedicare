import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hospitals = () => {
  const doctors = [
    {
      name: "Apollo Hospital",
      address: "Banglore",
    },
    {
      name: "Medanta Hopital",
      address: "Gurgam",
    },
    {
      name: "Jaslok hopital",
      address: "Mumbai",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <section className=" text-center py-11">
        <h3 className="text-red-500 italic">Hospitals</h3>
        <h2 className="text-2xl font-bold">
          Recommended <span className="text-blue-500 ">Hopitals</span>
        </h2>

        <div className="w-3/4 m-auto ">
          <div className="mt-20 "></div>
          <Slider {...settings}>
            {doctors.map((doc) => {
              return (
                <>
                  <div
                    key={doc.name}
                    className="bg-white h-[350px] text-black rounded-xl border-dashed border-2 border-red-500 mb-10"
                  >
                    <div className="h-56 bg-orange-300 flex justify-center items-center rounded-t-xl">
                      <img
                        src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg"
                        alt="img"
                        className="h-56 w-full"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 p-4 mt-6">
                      <p>{doc.name}</p>
                      <p className="text-red-500 italic">{doc.address}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>

        <p>
          Don't hesitate, contact us for better help and services.{" "}
          <span className="underline text-red-500 cursor-pointer">
            Explore All Hospitals
          </span>
        </p>
      </section>
    </>
  );
};

export default Hospitals;
