import personImage from "../../assets/portraitTwo.jpg";
import comapnyLogo from "../../assets/ProductOne.png";

const ReviewCard = ({desc}) => {
  return (
    <div className="mx-10 bg-white  text-black rounded-xl shadow-xl">
          <div className="flex flex-col justify-center items-center gap-2 px-8 pt-6 pb-3">
            <img
              src={personImage}
              alt="image"
              className="w-14 rounded-full aspect-square object-cover"
            />
            <div className="text-[#223555] text-center">
              <h1 className="text-base font-bold">Alice Danon</h1>
              <p className="text-sm">Project Coordinator, Web World</p>
            </div>
          </div>
          <div className="mb-4 px-4 md:px-8 text-xs">
            {desc}
          </div>

          <div className="mt-4 mb-1 border-t-2 border-gray-300 w-[90%] flex items-center justify-center mx-auto">
            <img src={comapnyLogo} alt="logo" className="w-16" />
          </div>
        </div>
  )
}

export default ReviewCard