import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Faique Falke",
      address: "Musaffah industrial - Abu Dhabi",
      specialty: "Doctor Degree & Specialist",
    },
    {
      name: "Dr. Faique Falke",
      address: "Musaffah industrial - Abu Dhabi",
      specialty: "Doctor Degree & Specialist",
    },
    {
      name: "Dr. Faique Falke",
      address: "Musaffah industrial - Abu Dhabi",
      specialty: "Doctor Degree & Specialist",
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
      <section className="bg-cyan-100 text-center py-11">
        <h3 className="text-red-500 italic">Doctors</h3>
        <h2 className="text-2xl font-bold">
          Top Orthopedic <span className="text-blue-500 ">Doctors</span>
        </h2>

        <div className="w-3/4 m-auto">
          <div className="mt-20"></div>
          <Slider {...settings}>
            {doctors.map((doc) => {
              return (
                <>
                  <div
                    key={doc.name}
                    className="bg-white h-[450px] text-black rounded-xl"
                  >
                    <div className="h-56 bg-orange-300 flex justify-center items-center rounded-t-xl">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBDox39ubeWBKcvnjRzPyPY2-z9AUIlNv_w&s"
                        alt="img"
                        className="h-44 w-44"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 p-4 mt-6">
                      <p>{doc.name}</p>
                      <p>{doc.address}</p>
                      <p>{doc.specialty}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default Doctors;
