const ViewBlog = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className=" min-h-screen">
        {/* Header */}
        <header className="pt-10">
          <div className="w-[80%] mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-800">How to Choose the Right Software Development Company in Dubai</h1>
            <p className="text-gray-600 mt-2">
              Published on July 19, 2024 by Author Name
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className=" px-4 pb-10">
          <div className="w-[80%] mx-auto">
           
            <article className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1699004642520-b48fa2465840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
                alt="Blog Cover"
                className="rounded-lg shadow-lg mb-4 h-44 object-cover md:h-96"
              />
              <p className="text-xl text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Pellentesque in ipsum id
                orci porta dapibus.
              </p>
              <p className="mt-4 text-gray-700">
  
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum.
              </p>
              <p className="mt-4 text-gray-700">
                Sed consequat, leo eget bibendum sodales, augue velit cursus
                nunc.
              </p>
              {/* Add more paragraphs or sections as needed */}
            </article>

            {/* Author Section */}
            <section className="mt-8">
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Author"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Author Name
                  </h2>
                  <p className="text-gray-600">Author Bio or Description</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewBlog;
