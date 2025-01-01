const ServiceCard = ({ service, color }) => {
  return (
    <div className={`bg-[${color}] w-full h-full shadow-lg rounded-xl pb-6 overflow-hidden relative hover:scale-105 transition-transform duration-300 ease-in-out`}
    style={{ backgroundColor: color }}
    >
      <img
        src={service.image}
        alt={service.heading}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="bg-white absolute bottom-14 left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
        <img src={service.icon} alt="Icon" className="w-8 h-8" />
      </div>
      <h3 className={`text-xl bg-[${color}] mt-10 font-semibold text-gray-800 text-center px-4`}>
        {service.heading}
      </h3>
    </div>
  );
};

export default ServiceCard;
