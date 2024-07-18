import personImage from "../../assets/portraitTwo.jpg";
import comapnyLogo from "../../assets/ProductOne.png";

const ReviewCard = () => {
  return (
    <div className="mx-10  bg-white text-black rounded-xl shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center gap-4 px-8 py-6">
            <img
              src={personImage}
              alt="image"
              className="w-20 rounded-full aspect-square object-cover"
            />
            <div className="text-[#223555]">
              <h1 className="text-xl font-bold">Alice Danon</h1>
              <p>Project Coordinator, Web World</p>
            </div>
          </div>
          <div className="my-4 px-4 md:px-8">
            &rdquo;Crush Code Software Company excels in delivering
            cutting-edge, reliable software solutions tailored to diverse
            business needs. Their team is highly skilled, responsive, and
            dedicated to ensuring customer satisfaction.&rdquo;
          </div>

          <div className="mt-10 mb-1 border-t-2 border-gray-300 w-[90%] flex items-center justify-center mx-auto">
            <img src={comapnyLogo} alt="logo" className="w-32" />
          </div>
        </div>
  )
}

export default ReviewCard