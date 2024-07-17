import portraitOne from "../assets/portraitTwo.jpg";
import portraitTwo from "../assets/portraitThree.jpg";
import portraitThree from "../assets/portraitTen.jpg";
const MeetOurTeam = () => {
  return (
    <div className="min-h-screen my-20 mt-28 w-full">
      <div className="w-[80%] mx-auto">
        <div>
          <div>
            <h1 className="text-4xl font-bold mb-8">
              Meet our team of <i>creators</i>, <br /> <i>designers</i>, and
              world-class <br />
              <i>problem solvers</i>
            </h1>
            <p className="text-xl text-gray-600">
              Discover the talent behind our innovative solutions
            </p>
            <p className="text-xl text-gray-600">
              and experience excellence in every project we undertake
            </p>
          </div>
          <div className="mt-8 min-h-72 grid gap-8 grid-cols-1 md:grid-cols-3">
            <div>
              <div className="h-[80%] w-full">
                <img
                  src={portraitOne}
                  alt="portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-gray-700">
                    <h1 className="text-xl font-bold">Ahmed Khan</h1>
                    <p><i>Lead Software Engineer</i></p>
              </div>
            </div>
            <div>
              <div className="h-[80%] w-full">
                <img
                  src={portraitThree}
                  alt="portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-gray-700">
                    <h1 className="text-xl font-bold">Omar Malik</h1>
                    <p><i>Product Manager</i></p>
              </div>
            </div>
            <div>
              <div className="h-[80%] w-full">
                <img
                  src={portraitTwo}
                  alt="portrait"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-gray-700">
                    <h1 className="text-xl font-bold">Hassan Ali</h1>
                    <p><i>UX/UI Designer</i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
