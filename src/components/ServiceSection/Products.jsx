import ProductOne from "../../assets/ProductOne.png";
import ProductTwo from "../../assets/ProductTwo.png";
import ProductThree from "../../assets/ProductThree.png";
import ProductFour from "../../assets/ProductFour.png";
import { GrShare } from "react-icons/gr";
import { NavLink } from "react-router-dom";
const Products = () => {
    const products = [
        {
          name: "Web World",
          image: ProductOne,
          description:
            "We can help you unlock your business potential with our cutting-edge Machine Learning and Artificial Intelligence capabilities.",
        },
        {
          name: "Global Tech",
          image: ProductTwo,
          description:
            "We provide custom-tailored solutions for each phase of development from designing to coding and implementation.",
        },
        {
          name: "Infinity",
          image: ProductThree,
          description:
            "We build native apps optimized for iOS and Android to provide users with a seamless mobile experience that leverages the full power of the OS.",
        },
        {
          name: "Alexander",
          image: ProductFour,
          description:
            "We bring your ideas to life with our turnkey solutions that are custom-designed to fit into your enterprise software ecosystem.",
        },
      ];
  return (
    <div className=" w-full text-black grid grid-cols-1 md:grid-cols-2">
      {products.map((product, index) => (
        <div key={index} className="py-8 border border-gray-200 font-googleFonts">
          <div className="mt-10 mr-5 px-4 md:px-10">
            <img src={product.image} alt="logos" className="w-28"/>
            <h1 className="text-2xl whitespace-nowrap md:text-5xl mt-4 font-bold text-gray-700">{product.name}</h1>
            <p className="text-xl mt-4 text-gray-700">{product.description}</p>
            <button className="hover:bg-blue-800 transition-all border border-blue-800 text-blue-800 hover:text-white text-lg px-4 py-2 mt-8 rounded-full">
            <NavLink
            to={"/view-service/:1"}
            >Learn More</NavLink>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products