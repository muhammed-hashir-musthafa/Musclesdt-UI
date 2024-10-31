import React from "react";

export default function HomeBody() {
  const products = [
    {
      id: 1,
      title: "Skinny Jeans Blue",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      images: [
        "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
        "https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      ],
    },
    {
      id: 2,
      title: "Stylish Summer Dress",
      description: "Fashionable dress for summer outings and parties.",
      images: [
        "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
        "https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      ],
    },
    {
      id: 3,
      title: "Classic White Sneakers",
      description: "Comfortable and trendy sneakers for everyday wear.",
      images: [
        "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
        "https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      ],
    },
    {
      id: 4,
      title: "Elegant Watch",
      description: "A perfect accessory for formal occasions.",
      images: [
        "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
        "https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      ],
    },
    {
      id: 5,
      title: "Trendy Backpack",
      description: "Stylish and functional backpack for your adventures.",
      images: [
        "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
        "https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      ],
    },
    {
      id: 6,
      title: "Casual T-Shirt",
      description: "Comfortable t-shirt for casual wear.",
      images: [
        "https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
        "https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      ],
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                Summer Styles Are Finally Here!
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-gray-600 px-8 py-3 text-center font-medium text-white hover:bg-gray-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-16 py-5">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} href="#" className="group relative block rounded-lg border border-gray-200 overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="relative h-[200px] sm:h-[250px] overflow-hidden rounded-lg">
                <img
                  src={product.images[0]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src={product.images[1]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-gradient-to-t from-black to-transparent transition-all duration-300">
                <h3 className="text-xl font-medium text-white">{product.title}</h3>
                <p className="mt-1.5 text-xs text-gray-200">
                  {product.description}
                </p>
                <a
                  className="inline-block rounded-full  mt-2 p-2 bg-white text-orange-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="#"
                >
                  <span className="sr-only"> Download </span>

                  <svg
                    className="size-3 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-16 py-5">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative block rounded-lg border border-gray-200 overflow-hidden shadow-lg bg-gray-100"
            >
              <div className="relative h-[400px] sm:h-[450px] flex items-center justify-end  ">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-60 w-60 object-cover rounded-lg shadow-md  transition-transform transform hover:scale-105"
                />
              </div>

              <div className="absolute top-4 left-4">
                <h3 className="text-xl font-semibold text-white">{product.title}</h3>
              </div>

              <div className="absolute bottom-16 left-4">
                <p className="text-l text-gray-200">{product.description}</p>
              </div>

              <div className="absolute bottom-4 right-4">
                <a
                  className="inline-block px-4 py-2 rounded-3xl bg-white text-black font-normal hover:bg-gray-700  hover:text-white"
                  href="#"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
