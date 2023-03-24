import React from "react";

const Banner = ({ name }) => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-white font-medium title-font mb-2">
                {name}
              </h2>
              <p className="leading-relaxed">
                Skateboard +1 mustache fixie paleo lumbersexual.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
