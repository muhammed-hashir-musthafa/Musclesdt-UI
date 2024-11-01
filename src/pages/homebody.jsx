import React, { useEffect, useRef, useState } from "react";
import '../App.css'
import machine from '/src/assets/vending machine.png'
import Marquee from "react-fast-marquee";

export default function HomeBody() {
  const products = [
    {
      id: 1,
      title: "Whey protein Espresso Roast",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      images: [
        "https://media.licdn.com/dms/image/v2/D5622AQG9vLDMzfItoA/feedshare-shrink_800/feedshare-shrink_800/0/1729243934809?e=1733356800&v=beta&t=YKwGY5uFaS9uKBQuzvBLhX0nMpMqaJ11G6V5_QuXaXQ",
        "https://media.licdn.com/dms/image/v2/D5622AQEFJx2EDSg--g/feedshare-shrink_800/feedshare-shrink_800/0/1728810315908?e=1733356800&v=beta&t=BQ72ffz20ODRyykq7tSW9fXEgcE7C9FC6rU-PelcYYY",
      ],
    },
    {
      id: 2,
      title: "Whey protein Isolate ",
      description: "Fashionable dress for summer outings and parties.",
      images: [
        "https://media.licdn.com/dms/image/v2/D4D22AQE8ZK82vZMUMA/feedshare-shrink_800/feedshare-shrink_800/0/1702044992629?e=1733356800&v=beta&t=1w5_YXT-faOVmJiCluqbbILPbZmiiS3qaoheMP9SB_4",
        "https://media.licdn.com/dms/image/v2/D4D22AQFWvwQcS-SsOw/feedshare-shrink_800/feedshare-shrink_800/0/1701938285774?e=1733356800&v=beta&t=IERskHvJB9rzxBF86mwpy4asLufIb8ubRkHhCheDB4c",
      ],
    },
    {
      id: 3,
      title: "Whey protein MyPctPro",
      description: "Comfortable and trendy sneakers for everyday wear.",
      images: [
        "https://media.licdn.com/dms/image/v2/D4D22AQH7bBcLlLQjXQ/feedshare-shrink_800/feedshare-shrink_800/0/1703609536797?e=1733356800&v=beta&t=GIGO5xcGbiJFnKQelHy_mbv3VEuFCmlgAI6wzE7Ho8c",
        "https://media.licdn.com/dms/image/v2/D4D22AQFPg5qHGN22FQ/feedshare-shrink_800/feedshare-shrink_800/0/1701667996485?e=1733356800&v=beta&t=3nnLgkfNF8ugCAYpLNZPjQuWIdEYmrDkh4NxhFe7SyA",
      ],
    },
    {
      id: 4,
      title: "Whey protein Beauty smoothie  ",
      description: "A perfect accessory for formal occasions.",
      images: [
        "https://media.licdn.com/dms/image/v2/D4D22AQFGwPEivm8VRw/feedshare-shrink_800/feedshare-shrink_800/0/1702309095030?e=1733356800&v=beta&t=DmA2d98F8UBAXC0oT8TSxCGG8T9lwR5ORO7sv1xkzNo",
        "https://media.licdn.com/dms/image/v2/D4D22AQE_UCJwz7UbWg/feedshare-shrink_800/feedshare-shrink_800/0/1701917573452?e=1733356800&v=beta&t=gLZVvAuoH6q6QWpVZ25OfIn1Qa_KV7Rl8IA-XTQX3jk",
      ],
    },
    {
      id: 5,
      title: "Whey protein Alphonse Mango",
      description: "Stylish and functional backpack for your adventures.",
      images: [
        "https://media.licdn.com/dms/image/v2/D5622AQHNjJVsn4W5yw/feedshare-shrink_800/feedshare-shrink_800/0/1728669365750?e=1733356800&v=beta&t=4ifq19yVKKTHO3c7PCgNZv6g0eVz1ydeVfzmAwHDOpc",
        "https://media.licdn.com/dms/image/v2/D4D22AQFi0DpM32i2rw/feedshare-shrink_800/feedshare-shrink_800/0/1702394223606?e=1733356800&v=beta&t=6-uvzEZpNwnrho3WZiFGyhZHMq9k3olnh8sFCS9QiJ0",
      ],
    },
    {
      id: 6,
      title: "Whey protein Pumb droll",
      description: "Comfortable t-shirt for casual wear.",
      images: [
        "https://media.licdn.com/dms/image/v2/D4D22AQEasLADtICrXQ/feedshare-shrink_800/feedshare-shrink_800/0/1701602264158?e=1733356800&v=beta&t=UDTiFMtcYhDRcOPut-5yK6mKwl34Lh5JCbqdQlT_G3c",
        "https://media.licdn.com/dms/image/v2/D4D22AQFXL51vnrRC-w/feedshare-shrink_800/feedshare-shrink_800/0/1701522541417?e=1733356800&v=beta&t=arNt0pZpSjBg7jenrXijTDrOnOVYsJq4CYq63PpvqZw",
      ],
    },
  ];


  const images = [
    "https://media.licdn.com/dms/image/v2/D4D22AQEQ822D9rUhXg/feedshare-shrink_800/feedshare-shrink_800/0/1705940642942?e=1733356800&v=beta&t=VBpfLL5XK7I5PhS-FJdAR2stQXOZNdJHN_00JZYAOW0",
    "https://media.licdn.com/dms/image/v2/D4D22AQE8MTfGZTUExw/feedshare-shrink_800/feedshare-shrink_800/0/1705940643251?e=1733356800&v=beta&t=st1ZLV-oEjXVPlV_sxQhYWncwkAS6g0cfkw80tiV8T0",
    "https://media.licdn.com/dms/image/v2/D5622AQHjr6IcSIRaoA/feedshare-shrink_800/feedshare-shrink_800/0/1705851174249?e=1733356800&v=beta&t=qDrsiWoDSJZcyUITX5GkrE4zEu2C94S27rcLtpS8r5M",
    "https://media.licdn.com/dms/image/v2/D5622AQFyRzFEojbcuw/feedshare-shrink_800/feedshare-shrink_800/0/1725288495527?e=1733356800&v=beta&t=PGVWCi6eL90WpWcYFG8hp9TB1e0DfRzVFxTeceaHW4I",
    "https://media.licdn.com/dms/image/v2/D5622AQF_BJxTxRBJ3Q/feedshare-shrink_800/feedshare-shrink_800/0/1720349228052?e=1733356800&v=beta&t=Rwjeg8KDLI7pj8tWkO77Roj_umlLTTPVOdD_SgZr1t4",
    "https://media.licdn.com/dms/image/v2/D5622AQEGLumjiOnW-g/feedshare-shrink_800/feedshare-shrink_800/0/1711550944133?e=1733356800&v=beta&t=2PnPyevD46SlqkYTg4JrkOg9Y9BmjDQJ0yYxk94BHxM",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-6xl px-4 sm:static sm:px-6 lg:px-6">
            <div className="sm:max-w-lg">
              <h1 className="font-black tracking-tight text-gray-900 sm:text-6xl">
                All in One Machine!
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Fresh, organic, and bio-certified beverage vending machines offering a world of drinks in one place, from protein shakes to cold brews. Made in Germany.
              </p>
            </div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center justify-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-[450px] w-full overflow-hidden rounded-lg sm:h-[300px] lg:h-[550px] md:end-7">
                        <img
                          alt="Vending Machine"
                          src={machine}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="inline-block rounded-md border border-transparent bg-gray-600 px-8 py-3 text-center font-normal text-white hover:bg-gray-700"
              >
                Shop Collection
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto my-16 py-5">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-300 relative block rounded-lg border border-gray-200 overflow-hidden shadow-lg"
            >
              <div className="relative flex items-center justify-end h-[100px] sm:h-[150px]  rounded-lg p-4 pb-1">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="sm:mt-0 mt-12 absolute h-32 w-32 object-cover rounded-xl opacity-100 group-hover:opacity-0 transform transition-transform duration-300 group-hover:scale-110"
                />
                <img
                  src={product.images[1]}
                  alt={product.title}
                  className="sm:mt-0 mt-12 absolute h-32 w-32 object-cover rounded-xl opacity-0 group-hover:opacity-100 transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-4 flex flex-col items-start justify-between h-[100px]">
                <h3 className="text-xl font-normal text-black">{product.title}</h3>
                <div className="mt-2">
                  <a
                    className="inline-block rounded-full p-2 bg-white text-gray-400 focus:outline-none focus:ring active:bg-indigo-500 transform -translate-x-12 transition-transform duration-300 group-hover:translate-x-0"
                    href="#"
                  >
                    <span className="sr-only">View More</span>
                    <svg
                      className="size-3"
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
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-16">
        <div
          className="relative bg-gradient-to-r from-orange-800 to-gray-800 p-10 rounded-3xl shadow-lg text-white"
          style={{ width: '100%', height: '500px' }}
        >
          <div className="absolute inset-0 w-full h-full">
            <img
              src={images[currentIndex]}
              alt={`carousel-image-${currentIndex}`}
              className="h-full w-full object-cover rounded-3xl transition-transform duration-500 transform blur-xl"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:space-x-10 h-full justify-center">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={images[currentIndex]}
                alt={`carousel-image-${currentIndex}`}
                className="rounded-xl shadow-md transition-transform duration-500 transform max-h-96"
              />
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-4">PROTEINBOT</h1>
              <p className="text-lg"> de facto standard in protein vending machines.</p>
            </div>
          </div>
        </div>
        <div className="w-auto bg-white py-14">
          <h2 className="text-center text-3xl font-bold text-gray-600 mb-6">Everything You Need, All in One Place!</h2>
          <div className="w-full flex justify-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQHKh1pwWOIfHA/feedshare-shrink_800/feedshare-shrink_800/0/1728753855816?e=1733356800&v=beta&t=-wWbHOTlz-VRXw_J1hX5M-CbSN70rYD9uAsNj5yF1t0"
              alt="All products"
              className="w-full h-auto object-cover max-w-5xl rounded-lg"
            />
          </div>
          <p className="text-center text-lg text-gray-600 mt-6 px-6 max-w-3xl mx-auto">
            Discover a range of top-quality items that meet all your needs in one convenient collection. Experience the best products designed for excellence.
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto my-16 py-5 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative block overflow-hidden rounded-xl border border-gray-200 shadow-lg bg-white transform hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-[400px] sm:h-[450px] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-semibold mb-2 transition duration-300">{product.title}</h3>
                <p className="text-base text-gray-300 mb-4">{product.description}</p>
                <a
                  href="#"
                  className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-normal text-sm transition duration-300 hover:bg-purple-700 hover:shadow-lg"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Marquee autoFill='true'>
        <div className="w-full flex justify-between bg-gray-600 p-5 gap-24 ps-10">
          <div className="flex flex-col items-center">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.46967 1.46967C1.76256 1.17678 2.23744 1.17678 2.53033 1.46967L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L1.46967 2.53033C1.17678 2.23744 1.17678 1.76256 1.46967 1.46967Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M10.4453 9.55463C10.7382 9.84752 10.7382 10.3224 10.4453 10.6153L3.3606 17.7C3.36056 17.7 3.36063 17.7 3.3606 17.7C2.97109 18.09 2.7522 18.6188 2.7522 19.17C2.7522 19.721 2.97084 20.2495 3.36011 20.6394C3.74884 21.0277 4.27538 21.2464 4.82479 21.2478C5.37363 21.2491 5.90074 21.0335 6.29128 20.648C6.29172 20.6476 6.29216 20.6471 6.2926 20.6467L13.3796 13.5596C13.6725 13.2667 14.1474 13.2667 14.4403 13.5596C14.7332 13.8525 14.7332 14.3274 14.4403 14.6203L7.34736 21.7132C6.67495 22.3782 5.76672 22.7501 4.82103 22.7478C3.87534 22.7454 2.969 22.3689 2.29993 21.7006C1.62941 21.0293 1.2522 20.1187 1.2522 19.17C1.2522 18.2212 1.62883 17.3112 2.29935 16.6399L9.38464 9.55463C9.67754 9.26174 10.1524 9.26174 10.4453 9.55463Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.24997 16C3.24997 15.5857 3.58576 15.25 3.99997 15.25H12C12.4142 15.25 12.75 15.5857 12.75 16C12.75 16.4142 12.4142 16.75 12 16.75H3.99997C3.58576 16.75 3.24997 16.4142 3.24997 16Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M17.5303 2.46967C17.8232 2.76256 17.8232 3.23744 17.5303 3.53033L13.5303 7.53033C13.2374 7.82322 12.7626 7.82322 12.4697 7.53033C12.1768 7.23744 12.1768 6.76256 12.4697 6.46967L16.4697 2.46967C16.7626 2.17678 17.2374 2.17678 17.5303 2.46967ZM21.5303 6.46967C21.8232 6.76256 21.8232 7.23744 21.5303 7.53033L17.5303 11.5303C17.2374 11.8232 16.7626 11.8232 16.4697 11.5303C16.1768 11.2374 16.1768 10.7626 16.4697 10.4697L20.4697 6.46967C20.7626 6.17678 21.2374 6.17678 21.5303 6.46967Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967L22.5303 7.46967C22.8232 7.76256 22.8232 8.23744 22.5303 8.53033C22.2374 8.82322 21.7626 8.82322 21.4697 8.53033L15.4697 2.53033C15.1768 2.23744 15.1768 1.76256 15.4697 1.46967Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.25 16C3.25 15.5858 3.58579 15.25 4 15.25H12C12.4142 15.25 12.75 15.5858 12.75 16C12.75 16.4142 12.4142 16.75 12 16.75H4C3.58579 16.75 3.25 16.4142 3.25 16Z" fill="white"></path>
            </svg>
            <p className="mt-2 text-sm  text-white">No artificial flavourings</p>
          </div>
          <div className="flex flex-col items-center">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.46967 1.46967C1.76256 1.17678 2.23744 1.17678 2.53033 1.46967L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L1.46967 2.53033C1.17678 2.23744 1.17678 1.76256 1.46967 1.46967Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.65403 9.20734C9.81567 9.58872 9.63753 10.0289 9.25615 10.1905C8.15873 10.6557 7.22867 11.4525 6.60048 12.4752C5.88355 13.6424 5.60684 15.0271 5.82018 16.3802C6.03352 17.7333 6.72289 18.9657 7.76417 19.8557C8.80545 20.7457 10.1302 21.2347 11.5 21.2347C12.8698 21.2347 14.1946 20.7457 15.2359 19.8557C15.96 19.2368 16.514 18.4522 16.856 17.5766C17.0067 17.1908 17.4416 17.0002 17.8275 17.1509C18.2133 17.3016 18.4039 17.7365 18.2532 18.1223C17.822 19.2263 17.1235 20.2156 16.2104 20.996C14.8975 22.1181 13.2271 22.7347 11.5 22.7347C9.7729 22.7347 8.10252 22.1181 6.7896 20.996C5.47668 19.8738 4.60748 18.3199 4.33849 16.6138C4.0695 14.9078 4.41838 13.1618 5.32233 11.6901C6.11443 10.4005 7.2871 9.39591 8.67083 8.80946C9.0522 8.64783 9.4924 8.82596 9.65403 9.20734Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M4.27002 16C4.27002 15.5858 4.60581 15.25 5.02002 15.25H15.98C16.3942 15.25 16.73 15.5858 16.73 16C16.73 16.4142 16.3942 16.75 15.98 16.75H5.02002C4.60581 16.75 4.27002 16.4142 4.27002 16Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.50002 1.25C9.91423 1.25 10.25 1.58579 10.25 2V4C10.25 4.41421 9.91423 4.75 9.50002 4.75C9.0858 4.75 8.75002 4.41421 8.75002 4V2C8.75002 1.58579 9.0858 1.25 9.50002 1.25Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.5 1.24001C13.9142 1.24001 14.25 1.57579 14.25 1.99001V7.30001C14.25 7.71422 13.9142 8.05001 13.5 8.05001C13.0858 8.05001 12.75 7.71422 12.75 7.30001V1.99001C12.75 1.57579 13.0858 1.24001 13.5 1.24001Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.25002 2C7.25002 1.58579 7.5858 1.25 8.00002 1.25H15C15.4142 1.25 15.75 1.58579 15.75 2C15.75 2.41421 15.4142 2.75 15 2.75H8.00002C7.5858 2.75 7.25002 2.41421 7.25002 2Z" fill="white"></path>
            </svg>
            <p className="mt-2 text-sm  text-white">No artificial colourings</p>
          </div>
          <div className="flex flex-col items-center">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.48043 20.3621L9.82919 9.66459L11.1708 10.3354L5.82207 21.0329C5.77221 21.1327 5.84473 21.25 5.95624 21.25H18.7513C18.8537 21.25 18.926 21.1497 18.8936 21.0526L18.2885 19.2372L19.7115 18.7628L20.3167 20.5782C20.6728 21.6466 19.8775 22.75 18.7513 22.75H5.95624C4.72966 22.75 3.93189 21.4592 4.48043 20.3621Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M10 1.25C10.4142 1.25 10.75 1.58579 10.75 2V4.343C10.75 4.75721 10.4142 5.093 10 5.093C9.58579 5.093 9.25 4.75721 9.25 4.343V2C9.25 1.58579 9.58579 1.25 10 1.25Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M14 1.25C14.4142 1.25 14.75 1.58579 14.75 2V8.343C14.75 8.75721 14.4142 9.093 14 9.093C13.5858 9.093 13.25 8.75721 13.25 8.343V2C13.25 1.58579 13.5858 1.25 14 1.25Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.75 2C7.75 1.58579 8.08579 1.25 8.5 1.25H15.5C15.9142 1.25 16.25 1.58579 16.25 2C16.25 2.41421 15.9142 2.75 15.5 2.75H8.5C8.08579 2.75 7.75 2.41421 7.75 2Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.25 16C7.25 15.5858 7.58579 15.25 8 15.25L16 15.25C16.4142 15.25 16.75 15.5858 16.75 16C16.75 16.4142 16.4142 16.75 16 16.75L8 16.75C7.58579 16.75 7.25 16.4142 7.25 16Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.46967 1.46967C1.76256 1.17678 2.23744 1.17678 2.53033 1.46967L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L1.46967 2.53033C1.17678 2.23744 1.17678 1.76256 1.46967 1.46967Z" fill="white"></path>
            </svg>
            <p className="mt-2 text-sm  text-white">Non-GMO</p>
          </div>

          <div className="flex flex-col items-center">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.77631 2.29293C8.92818 1.74614 12.0427 6.48361 12.621 9.7066C12.6395 9.8098 12.6467 9.90847 12.6467 10.0023L12.6467 20.858C12.6467 21.2722 12.3109 21.608 11.8967 21.608C11.4825 21.608 11.1467 21.2722 11.1467 20.858L11.1467 13.2889C11.1244 13.2897 11.1022 13.2904 11.0801 13.2911C9.95756 13.3274 8.91155 13.3612 6.97162 12.7145C5.15079 12.1076 4.23118 10.8713 3.71555 9.61908C3.46345 9.00682 3.306 8.38818 3.18181 7.85C3.15157 7.71898 3.12379 7.59536 3.09751 7.47844C3.01031 7.09045 2.93971 6.77628 2.85112 6.51053C2.7654 6.25337 2.58428 5.90318 2.34695 5.48907C2.26326 5.34303 2.16945 5.18394 2.07455 5.02301C1.92425 4.76813 1.77122 4.50861 1.65132 4.28895C1.41533 3.85666 1.41299 3.35508 1.66901 2.94378C1.91425 2.5498 2.33666 2.33201 2.77631 2.29293ZM11.1467 11.7869V10.0023C11.1467 9.9859 11.1455 9.97673 11.1446 9.9715C10.6592 7.2662 8.09372 3.41931 3.08148 3.77329C3.16313 3.91632 3.25044 4.0641 3.34267 4.2202C3.43944 4.38399 3.54163 4.55696 3.64838 4.74323C3.88461 5.15543 4.136 5.62176 4.27415 6.03618C4.38911 6.38107 4.48233 6.79704 4.57256 7.19969C4.59626 7.30546 4.61976 7.41031 4.64339 7.51271C4.76336 8.03256 4.89891 8.55335 5.10257 9.04796C5.49848 10.0095 6.14151 10.8567 7.44596 11.2915C9.12053 11.8497 9.91717 11.825 10.9933 11.7916C11.0438 11.79 11.0949 11.7885 11.1467 11.7869Z" fill="white"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M21.5444 10.4518C22.3622 9.47204 21.8906 7.83182 20.4456 7.722C19.0272 7.61421 17.2197 7.66992 15.5339 8.1874C13.8409 8.70711 12.2114 9.71415 11.2888 11.5429L12.628 12.2186C13.3107 10.8653 14.5343 10.0633 15.9741 9.62136C17.4212 9.17715 19.0262 9.11845 20.3319 9.21769C20.3767 9.2211 20.397 9.23387 20.4063 9.24101C20.4178 9.24994 20.4307 9.26505 20.4398 9.28923C20.4576 9.33656 20.4582 9.41227 20.3928 9.49061L19.5283 10.5263C19.242 10.8693 18.9751 11.3027 18.7239 11.7106C18.6556 11.8215 18.5884 11.9306 18.5223 12.0355C18.1932 12.5577 17.8408 13.0661 17.3777 13.5143C16.4904 14.3733 15.0943 15.1109 12.4225 14.9712L12.3441 16.4692C15.3737 16.6276 17.1948 15.779 18.421 14.5921C19.0146 14.0174 19.443 13.3878 19.7913 12.8353C19.8816 12.692 19.9642 12.5581 20.0417 12.4327C20.2802 12.0462 20.4692 11.7399 20.6798 11.4876L21.5444 10.4518Z" fill="white"></path>
            </svg>
            <p className="mt-2 text-sm  text-white">100% vegan</p>
          </div>

          <div className="flex flex-col items-center">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="6" width="18" height="12" stroke="white" strokeWidth="1" rx="2" />
              <path d="M8 6L8 3L16 3L16 6" stroke="white" strokeWidth="1" />
              <path d="M16 16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16C8 15.4477 8.22386 14.9216 8.58579 14.5858C9.16879 13.8787 10.4069 13.6145 12 14C13.5931 13.6145 14.8312 13.8787 15.4142 14.5858C15.7761 14.9216 16 15.4477 16 16Z" fill="white" />
            </svg>

            <p className="mt-2 text-sm  text-white">Eco-Friendly Packaging</p>
          </div>

          <div className="flex flex-col items-center">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L14 8H20L18 2H16Z" fill="white" />
              <path d="M4 16C4 11.5817 7.58172 8 12 8C13.1976 8 14.3478 8.25539 15.384 8.72865L18 8L16 12H10L12 8" stroke="white" strokeWidth="1" fill="none" />
              <path d="M14 20L12 16L18 16L16 20H14Z" fill="white" />
              <path d="M4 8C4 12.4183 7.58172 16 12 16C13.1976 16 14.3478 15.7446 15.384 15.2713L18 16L16 20H10L12 16" stroke="white" strokeWidth="1" fill="none" />
            </svg>

            <p className="mt-2 text-sm  text-white">Biodegradable</p>
          </div>

          <div className="flex flex-col items-center">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21V12" stroke="white" strokeWidth="1" strokeLinecap="round" />
              <path d="M12 12C15 12 18 9 18 6C18 4.5 16.5 3 15 3C13.5 3 12 4.5 12 6C12 4.5 10.5 3 9 3C7.5 3 6 4.5 6 6C6 9 9 12 12 12Z" fill="white" />
            </svg>

            <p className="mt-2 text-sm  text-white">Organic Ingredients</p>
          </div>
        </div>
      </Marquee>

      <div className=" bg-gray-100 flex items-center justify-center  py-12">
        <div className="flex flex-col md:flex-row bg-white  ">

          <div className="md:w-1/2 h-auto md:h-auto">
            <img
              src="https://media.istockphoto.com/id/1441759606/photo/happy-sportswoman-with-earbuds-running-in-the-park.jpg?s=612x612&w=0&k=20&c=_RHiYpQFiZRxESWzCsr8k9SsOr-T-Qj3OcpINB1aVrg=" // Replace with your image path
              alt="Running Man"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-600">Fueling Health: 100+ Benefits of Nutrient-Rich Vending Solutions</h1>
            <p className="text-gray-600 mb-6">
              Musclesdt is providing vending services to the health and fitness industry, we have successfully built on our own expertise and can still tap into the extensive health network.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.6448 3.2802L5.42821 13.7443H11.1159C11.8951 13.7443 12.4844 14.4495 12.346 15.2163L11.355 20.7085L18.5716 10.2443H12.8839C12.1047 10.2443 11.5154 9.53918 11.6538 8.77235L12.6448 3.2802ZM12.0675 1.47524C12.8313 0.367804 14.5656 1.08299 14.3267 2.40689L13.1831 8.74433L19.0477 8.74433C20.055 8.74433 20.6486 9.87477 20.0767 10.704L11.9323 22.5134C11.1685 23.6209 9.43424 22.9057 9.67314 21.5818L10.8167 15.2443H4.9521C3.9448 15.2443 3.35121 14.1139 3.92309 13.2847L12.0675 1.47524Z" fill="#0C0C0D"></path></svg>                <p className="text-gray-800 font-normal">Energy metabolism</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19.2314 4.06986C18.8285 4.04581 18.4308 4.17026 18.1135 4.41967C17.846 4.62991 17.4704 4.63375 17.1987 4.42902C17.0168 4.29197 16.8085 4.19406 16.5869 4.14146C16.3653 4.08887 16.1352 4.08272 15.9111 4.1234C15.687 4.16409 15.4737 4.25073 15.2848 4.37787C15.0958 4.50501 14.9352 4.6699 14.8131 4.86215C14.6218 5.16333 14.2447 5.28803 13.9116 5.16031C13.6327 5.0534 13.33 5.02421 13.0358 5.07583C12.7416 5.12746 12.4669 5.25798 12.2411 5.45347C12.0152 5.64896 11.8467 5.90208 11.7535 6.18584C11.6602 6.46959 11.6457 6.77334 11.7116 7.06469C11.7572 7.26686 11.7172 7.47893 11.601 7.65055C11.4895 7.81511 11.3176 7.92842 11.1232 7.96621C11.0721 7.98209 11.0196 7.99236 10.9668 7.99705C10.6083 8.08444 10.288 8.28999 10.0588 8.58252C9.80198 8.9103 9.67861 9.32305 9.7134 9.73799C9.7482 10.1529 9.93859 10.5394 10.2464 10.8198C10.5458 11.0926 10.9349 11.2455 11.3392 11.25H11.3785C11.3796 11.25 11.3807 11.25 11.3818 11.25H12.6893L16.4697 7.46967C16.7626 7.17678 17.2374 7.17678 17.5303 7.46967C17.8232 7.76256 17.8232 8.23744 17.5303 8.53033L14.8107 11.25H19.2266C19.2181 11.1944 19.2069 11.1391 19.193 11.0843C19.0983 10.7107 19.3022 10.3261 19.6646 10.1948C19.9072 10.1069 20.1259 9.96332 20.303 9.77555C20.4801 9.58778 20.6106 9.36108 20.6842 9.11368C20.7578 8.86628 20.7722 8.60507 20.7265 8.35105C20.6808 8.09703 20.5761 7.85729 20.4208 7.65109C20.2162 7.37935 20.2201 7.00396 20.4303 6.73654C20.6797 6.41922 20.8042 6.02148 20.7801 5.61859C20.7561 5.2157 20.5852 4.8356 20.2998 4.5502C20.0144 4.26481 19.6343 4.09392 19.2314 4.06986ZM19.9363 12.75C19.946 12.7502 19.9557 12.7502 19.9653 12.75H20.2159C20.0413 14.663 19.203 16.4642 17.8336 17.8336C16.2865 19.3808 14.188 20.25 12 20.25C9.81196 20.25 7.71354 19.3808 6.16637 17.8336C4.79697 16.4642 3.9587 14.663 3.78414 12.75H4.52697C4.53611 12.7502 4.54527 12.7502 4.55443 12.75H11.332C11.3491 12.7501 11.3661 12.7501 11.3832 12.75H19.9363ZM8.67428 11.25C8.41804 10.8332 8.26021 10.3589 8.21865 9.86333C8.15222 9.07118 8.38775 8.2832 8.878 7.65745C9.0464 7.4425 9.24057 7.25216 9.45476 7.08981C9.21484 6.9682 8.95942 6.87629 8.694 6.8172C8.05853 6.67573 7.39517 6.72898 6.7904 6.97002C6.18564 7.21105 5.66751 7.62868 5.30355 8.16847C4.93959 8.70826 4.74669 9.34518 4.74999 9.9962L4.75001 10C4.75 10.4426 4.84061 10.8634 5.00331 11.25H8.67428ZM3.41897 11.25C3.30964 10.8534 3.25017 10.4353 3.25 10.0019C3.24556 9.05014 3.52774 8.11907 4.05984 7.3299C4.5923 6.5402 5.35031 5.92922 6.23506 5.5766C7.11981 5.22399 8.09028 5.14608 9.01995 5.35304C9.46751 5.45268 9.89561 5.61611 10.292 5.83632C10.3033 5.79653 10.3155 5.75692 10.3284 5.7175C10.5065 5.17578 10.8282 4.69255 11.2594 4.31935C11.6905 3.94615 12.2148 3.69698 12.7765 3.59841C13.1488 3.53307 13.5283 3.53554 13.8969 3.6041C14.0613 3.42699 14.2459 3.26892 14.4474 3.13333C14.8082 2.89061 15.2153 2.7252 15.6431 2.64753C16.0709 2.56986 16.5102 2.5816 16.9333 2.68201C17.1794 2.74043 17.4169 2.82811 17.6409 2.94276C18.1526 2.66755 18.7338 2.53748 19.3208 2.57253C20.09 2.61845 20.8156 2.9447 21.3605 3.48954C21.9053 4.03439 22.2315 4.76003 22.2775 5.52919C22.3125 6.11623 22.1824 6.69754 21.9072 7.20925C22.0478 7.48424 22.1477 7.7793 22.2027 8.08521C22.2901 8.57015 22.2624 9.06882 22.122 9.54114C21.9816 10.0135 21.7323 10.4462 21.3943 10.8047C21.2362 10.9723 21.0607 11.1215 20.8714 11.25H21C21.1989 11.25 21.3897 11.329 21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12C21.75 14.5859 20.7228 17.0658 18.8943 18.8943C18.368 19.4206 17.7878 19.8804 17.1666 20.2686C17.5006 20.3443 17.75 20.643 17.75 21C17.75 21.4142 17.4142 21.75 17 21.75H7C6.58579 21.75 6.25 21.4142 6.25 21C6.25 20.643 6.49937 20.3443 6.83339 20.2686C6.2122 19.8804 5.63197 19.4206 5.10571 18.8943C3.27723 17.0658 2.25 14.5859 2.25 12C2.25 11.8011 2.32902 11.6103 2.46967 11.4697C2.61032 11.329 2.80109 11.25 3 11.25H3.41897Z" fill="#0C0C0D"></path></svg>
                <p className="text-gray-800 font-normal ">Digestive support</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.7295 2.84827C9.90746 4.43847 7.2411 5.75001 5 5.75001C4.9337 5.75001 4.87011 5.77635 4.82322 5.82323C4.77634 5.87012 4.75 5.9337 4.75 6.00001V13C4.75 15.302 5.54684 16.9895 6.80787 18.281C8.08933 19.5935 9.88405 20.5298 11.9148 21.2311L11.9318 21.2372C11.985 21.257 12.0433 21.2581 12.0972 21.2404C14.1219 20.5342 15.9131 19.5958 17.1929 18.2828C18.4532 16.9898 19.25 15.3019 19.25 13V6.00001C19.25 5.9337 19.2237 5.87011 19.1768 5.82323C19.1299 5.77635 19.0663 5.75001 19 5.75001C16.7595 5.75001 14.1031 4.44901 12.2704 2.8482C12.1947 2.78451 12.099 2.74956 12 2.74956C11.901 2.74956 11.8052 2.78454 11.7295 2.84827ZM10.7528 1.70978C11.1005 1.41275 11.5427 1.24956 12 1.24956C12.4573 1.24956 12.8995 1.41275 13.2472 1.70978L13.2537 1.71534L13.2537 1.71537C14.9208 3.17293 17.2422 4.25001 19 4.25001C19.4641 4.25001 19.9092 4.43438 20.2374 4.76257C20.5656 5.09076 20.75 5.53588 20.75 6.00001V13C20.75 15.6981 19.7968 17.7602 18.2671 19.3297C16.7577 20.8783 14.7205 21.9145 12.5869 22.6582L12.5807 22.6604L12.5807 22.6603C12.2027 22.7884 11.7924 22.7834 11.4178 22.6464C9.28122 21.9078 7.24392 20.8747 5.73463 19.329C4.20316 17.7605 3.25 15.6981 3.25 13V6.00001C3.25 5.53588 3.43438 5.09076 3.76256 4.76257C4.09075 4.43438 4.53587 4.25001 5 4.25001C6.75729 4.25001 9.08871 3.16343 10.7466 1.71517L10.7528 1.70975L10.7528 1.70978ZM12 8.25001C12.4142 8.25001 12.75 8.58579 12.75 9.00001V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25V9.00001C11.25 8.58579 11.5858 8.25001 12 8.25001Z" fill="#0C0C0D"></path></svg>
                <p className="text-gray-800 font-normal">Immune health</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.6787 2.47217C11.9279 2.32687 12.2111 2.25 12.5 2.25C12.7889 2.25 13.0721 2.32687 13.3213 2.47217L16.4341 4.27351C16.6834 4.41926 16.8893 4.62815 17.032 4.87828C17.1748 5.12834 17.2497 5.4113 17.25 5.69887V9.30037C17.2497 9.58794 17.1748 9.87166 17.032 10.1217C16.8893 10.3719 16.6834 10.5807 16.4341 10.7265L16.4312 10.7282L13.323 12.5268C13.3224 12.5272 13.3219 12.5275 13.3213 12.5278C13.0721 12.6731 12.7889 12.75 12.5 12.75C12.2111 12.75 11.9279 12.6731 11.6787 12.5279C11.6781 12.5275 11.6776 12.5272 11.677 12.5268L8.56879 10.7282L8.56589 10.7265C8.31661 10.5807 8.11072 10.3719 7.96795 10.1217C7.82522 9.87166 7.75029 9.5887 7.75 9.30113L7.75 5.69963C7.75029 5.41206 7.82522 5.12834 7.96795 4.87828C8.11072 4.62815 8.31661 4.41927 8.56589 4.27352L8.56879 4.27182L11.6787 2.47217ZM12.5 3.75C12.4775 3.75 12.4548 3.75598 12.4341 3.76805L12.4312 3.76975L9.32218 5.56891C9.3018 5.58101 9.28375 5.59895 9.27068 5.62185C9.25743 5.64506 9.25007 5.6721 9.25 5.70018V9.29982C9.25007 9.3279 9.25743 9.35494 9.27068 9.37815C9.28376 9.40106 9.30181 9.41899 9.32219 9.4311C9.32246 9.43126 9.32192 9.43094 9.32219 9.4311L12.4341 11.2319C12.4548 11.244 12.4775 11.25 12.5 11.25C12.5225 11.25 12.5452 11.244 12.5659 11.2319L12.5688 11.2303L15.677 9.43158C15.6773 9.43142 15.6767 9.43174 15.677 9.43158C15.6974 9.41947 15.7162 9.40106 15.7293 9.37815C15.7426 9.35495 15.7499 9.32793 15.75 9.29987C15.75 9.29978 15.75 9.29996 15.75 9.29987V5.70039C15.75 5.7003 15.75 5.70048 15.75 5.70039C15.7499 5.67233 15.7426 5.64505 15.7293 5.62185C15.7162 5.59895 15.6982 5.58102 15.6778 5.56891L12.5659 3.76806C12.5452 3.75598 12.5225 3.75 12.5 3.75Z" fill="#0C0C0D"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.17867 12.2222C6.42786 12.0769 6.71112 12 7 12C7.28888 12 7.57214 12.0769 7.82133 12.2222L10.9341 14.0235C11.1834 14.1693 11.3893 14.3781 11.532 14.6283C11.6748 14.8783 11.7497 15.1613 11.75 15.4489V19.0504C11.7497 19.3379 11.6748 19.6217 11.532 19.8717C11.3893 20.1219 11.1834 20.3307 10.9341 20.4765L10.9312 20.4782L7.823 22.2768C7.82243 22.2772 7.82186 22.2775 7.82129 22.2778C7.57211 22.4231 7.28887 22.5 7 22.5C6.71113 22.5 6.42789 22.4231 6.17871 22.2779C6.17814 22.2775 6.17757 22.2772 6.177 22.2768L3.06879 20.4782L3.06589 20.4765C2.81661 20.3307 2.61072 20.1219 2.46795 19.8717C2.32522 19.6217 2.25029 19.3387 2.25 19.0511L2.25 15.4496C2.25029 15.1621 2.32522 14.8783 2.46795 14.6283C2.61072 14.3781 2.81661 14.1693 3.06589 14.0235L3.06879 14.0218L6.17867 12.2222ZM7 13.5C6.97746 13.5 6.95477 13.506 6.93411 13.5181L6.93121 13.5198L3.82218 15.3189C3.8018 15.331 3.78375 15.3489 3.77068 15.3718C3.75743 15.3951 3.75007 15.4221 3.75 15.4502V19.0498C3.75007 19.0779 3.75743 19.1049 3.77068 19.1282C3.78376 19.1511 3.80181 19.169 3.82219 19.1811C3.82246 19.1813 3.82192 19.1809 3.82219 19.1811L6.93412 20.9819C6.95477 20.994 6.97746 21 7 21C7.02254 21 7.04523 20.994 7.06589 20.9819L7.06879 20.9803L10.177 19.1816C10.1773 19.1814 10.1767 19.1817 10.177 19.1816C10.1974 19.1695 10.2162 19.1511 10.2293 19.1282C10.2426 19.1049 10.2499 19.0779 10.25 19.0499C10.25 19.0498 10.25 19.05 10.25 19.0499V15.4504C10.25 15.4503 10.25 15.4505 10.25 15.4504C10.2499 15.4223 10.2426 15.395 10.2293 15.3718C10.2162 15.3489 10.1982 15.331 10.1778 15.3189L7.06588 13.5181C7.04523 13.506 7.02254 13.5 7 13.5Z" fill="#0C0C0D"></path><path fillRule="evenodd" clipRule="evenodd" d="M17.1787 12.2222C17.4279 12.0769 17.7111 12 18 12C18.2889 12 18.5721 12.0769 18.8213 12.2222L21.9341 14.0235C22.1834 14.1693 22.3893 14.3781 22.532 14.6283C22.6748 14.8783 22.7497 15.1613 22.75 15.4489V19.0504C22.7497 19.3379 22.6748 19.6217 22.532 19.8717C22.3893 20.1219 22.1834 20.3307 21.9341 20.4765L21.9312 20.4782L18.823 22.2768C18.8224 22.2772 18.8219 22.2775 18.8213 22.2778C18.5721 22.4231 18.2889 22.5 18 22.5C17.7111 22.5 17.4279 22.4231 17.1787 22.2779C17.1781 22.2775 17.1776 22.2772 17.177 22.2768L14.0688 20.4782L14.0659 20.4765C13.8166 20.3307 13.6107 20.1219 13.468 19.8717C13.3252 19.6217 13.2503 19.3387 13.25 19.0511L13.25 15.4496C13.2503 15.1621 13.3252 14.8783 13.468 14.6283C13.6107 14.3781 13.8166 14.1693 14.0659 14.0235L14.0688 14.0218L17.1787 12.2222ZM18 13.5C17.9775 13.5 17.9548 13.506 17.9341 13.5181L17.9312 13.5198L14.8222 15.3189C14.8018 15.331 14.7838 15.3489 14.7707 15.3718C14.7574 15.3951 14.7501 15.4221 14.75 15.4502V19.0498C14.7501 19.0779 14.7574 19.1049 14.7707 19.1282C14.7838 19.1511 14.8018 19.169 14.8222 19.1811C14.8225 19.1813 14.8219 19.1809 14.8222 19.1811L17.9341 20.9819C17.9548 20.994 17.9775 21 18 21C18.0225 21 18.0452 20.994 18.0659 20.9819L18.0688 20.9803L21.177 19.1816C21.1773 19.1814 21.1767 19.1817 21.177 19.1816C21.1974 19.1695 21.2162 19.1511 21.2293 19.1282C21.2426 19.1049 21.2499 19.0779 21.25 19.0499C21.25 19.0498 21.25 19.05 21.25 19.0499V15.4504C21.25 15.4503 21.25 15.4505 21.25 15.4504C21.2499 15.4223 21.2426 15.395 21.2293 15.3718C21.2162 15.3489 21.1982 15.331 21.1778 15.3189L18.0659 13.5181C18.0452 13.506 18.0225 13.5 18 13.5Z" fill="#0C0C0D"></path></svg>
                <p className="text-gray-800 font-normal">Skin, hair and nails</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.92186 1.24198C9.42172 1.23156 9.91861 1.3212 10.3833 1.50563C10.848 1.69006 11.2712 1.96555 11.6278 2.3159C11.7627 2.4484 11.8871 2.59059 12 2.74115C12.1129 2.59059 12.2373 2.4484 12.3722 2.3159C12.7288 1.96555 13.152 1.69006 13.6167 1.50563C14.0814 1.3212 14.5783 1.23156 15.0781 1.24198C15.578 1.2524 16.0707 1.36267 16.5273 1.5663C16.9839 1.76993 17.3952 2.06281 17.737 2.42772C18.0788 2.79263 18.3441 3.22219 18.5174 3.69115C18.6229 3.97643 18.693 4.27277 18.7267 4.57358C19.2179 4.76516 19.6751 5.03769 20.0787 5.38106C20.6277 5.84806 21.0632 6.43386 21.3522 7.09408C21.6412 7.7543 21.7762 8.47163 21.747 9.19175C21.7258 9.71427 21.6185 10.2283 21.4307 10.7135C21.827 11.1271 22.1463 11.6103 22.3718 12.1404C22.6747 12.8525 22.7991 13.6279 22.734 14.3991C22.6689 15.1702 22.4164 15.9138 21.9984 16.5651C21.6687 17.0788 21.2439 17.5229 20.7484 17.8743C20.7608 18.3581 20.6992 18.8419 20.5649 19.3089C20.3854 19.9328 20.0799 20.5134 19.6673 21.0146C19.2546 21.5159 18.7436 21.9272 18.1657 22.2233C17.5879 22.5193 16.9555 22.6937 16.3076 22.7358C15.6597 22.7778 15.01 22.6866 14.3988 22.4677C13.7875 22.2489 13.2276 21.907 12.7537 21.4633C12.4651 21.1931 12.2121 20.8887 12 20.5575C11.7879 20.8887 11.5349 21.1931 11.2463 21.4633C10.7724 21.907 10.2125 22.2489 9.60121 22.4677C8.98995 22.6866 8.34031 22.7778 7.69241 22.7358C7.04451 22.6937 6.41211 22.5193 5.83426 22.2233C5.25641 21.9272 4.74538 21.5159 4.33274 21.0146C3.9201 20.5134 3.6146 19.9328 3.43511 19.3089C3.30079 18.8419 3.23918 18.3581 3.25155 17.8743C2.75608 17.5229 2.33131 17.0788 2.00161 16.5651C1.58362 15.9138 1.3311 15.1702 1.26602 14.3991C1.20094 13.6279 1.32526 12.8525 1.62818 12.1404C1.85366 11.6103 2.17302 11.1271 2.56931 10.7135C2.38152 10.2283 2.27423 9.71427 2.253 9.19175C2.22376 8.47163 2.35876 7.7543 2.64779 7.09408C2.93683 6.43386 3.37231 5.84806 3.92125 5.38106C4.32489 5.03769 4.78208 4.76515 5.27333 4.57358C5.30704 4.27277 5.37713 3.97643 5.48256 3.69115C5.65588 3.2222 5.92123 2.79263 6.263 2.42772C6.60476 2.06281 7.01605 1.76993 7.47267 1.5663C7.92928 1.36267 8.42201 1.2524 8.92186 1.24198ZM5.43111 6.15225C5.24039 6.2573 5.0601 6.38158 4.8932 6.52357C4.51761 6.84309 4.21965 7.2439 4.02189 7.69563C3.82413 8.14736 3.73176 8.63817 3.75177 9.13088C3.76072 9.3512 3.79203 9.56932 3.84482 9.78197C4.17573 9.68153 4.54317 9.82144 4.71778 10.1361C4.91878 10.4982 4.78811 10.9548 4.42594 11.1558C4.25676 11.2497 4.09791 11.3566 3.95062 11.4765L3.94991 11.4771C3.53893 11.811 3.21576 12.2402 3.0085 12.7275C2.80124 13.2148 2.71618 13.7453 2.76071 14.2729C2.80524 14.8006 2.97801 15.3093 3.264 15.7549C3.54995 16.2005 3.94042 16.5695 4.40146 16.8298C4.88982 17.1052 5.44043 17.2503 5.99965 17.25C6.41386 17.2498 6.7498 17.5854 6.75 17.9997C6.75019 18.4139 6.41456 18.7498 6.00035 18.75C5.59561 18.7502 5.19444 18.6984 4.80621 18.5975C4.825 18.6973 4.84849 18.7963 4.87666 18.8942C4.99946 19.3211 5.20849 19.7183 5.49082 20.0613C5.77316 20.4043 6.12281 20.6857 6.51818 20.8883C6.91355 21.0908 7.34624 21.2101 7.78954 21.2389C8.23284 21.2677 8.67733 21.2053 9.09556 21.0555C9.51379 20.9058 9.89689 20.6719 10.2212 20.3683C10.5455 20.0647 10.8041 19.6978 10.981 19.2903C11.158 18.8829 11.2495 18.4434 11.25 17.9992V12.4361C10.6908 13.0047 10.007 13.4408 9.24889 13.7075C8.85814 13.845 8.42996 13.6396 8.2925 13.2489C8.15504 12.8582 8.36037 12.43 8.75111 12.2925C9.45074 12.0464 10.0617 11.5983 10.5067 11.005C10.9478 10.4169 11.2062 9.7122 11.25 8.97864V5.0012C11.25 4.995 11.25 4.9888 11.25 4.98261C11.2489 4.68779 11.1898 4.39602 11.0761 4.12389C10.9605 3.8471 10.7907 3.59621 10.5767 3.386C10.3627 3.17579 10.1088 3.0105 9.82999 2.89984C9.55117 2.78919 9.25304 2.7354 8.95312 2.74165C8.65321 2.74791 8.35757 2.81407 8.0836 2.93624C7.80964 3.05842 7.56286 3.23415 7.3578 3.4531C7.15274 3.67204 6.99353 3.92978 6.88954 4.21116C6.78555 4.49254 6.73887 4.79187 6.75225 5.09154L6.75238 5.09437C6.7672 5.45717 6.86962 5.81099 7.05087 6.12562C7.25764 6.48454 7.1343 6.94311 6.77538 7.14988C6.41647 7.35665 5.95789 7.2333 5.75112 6.87439C5.61886 6.64479 5.51178 6.40267 5.43111 6.15225ZM12.75 5.0012V8.97864C12.7938 9.7122 13.0522 10.4169 13.4933 11.005C13.9383 11.5983 14.5493 12.0464 15.2489 12.2925C15.6396 12.43 15.845 12.8582 15.7075 13.2489C15.57 13.6396 15.1419 13.845 14.7511 13.7075C13.993 13.4408 13.3092 13.0047 12.75 12.4361V17.9992C12.7505 18.4434 12.842 18.8829 13.019 19.2903C13.1959 19.6978 13.4545 20.0647 13.7788 20.3683C14.1031 20.6719 14.4862 20.9058 14.9044 21.0555C15.3227 21.2053 15.7672 21.2677 16.2105 21.2389C16.6538 21.2101 17.0864 21.0908 17.4818 20.8883C17.8772 20.6857 18.2268 20.4043 18.5092 20.0613C18.7915 19.7183 19.0005 19.3211 19.1233 18.8942C19.1515 18.7963 19.175 18.6973 19.1938 18.5975C18.8056 18.6984 18.4044 18.7502 17.9996 18.75C17.5854 18.7498 17.2498 18.4139 17.25 17.9997C17.2502 17.5854 17.5861 17.2498 18.0003 17.25C18.5595 17.2503 19.11 17.1052 19.5983 16.8299M12.75 5.0012C12.75 4.995 12.75 4.9888 12.75 4.98261C12.7511 4.68779 12.8102 4.39602 12.9238 4.12389C13.0395 3.8471 13.2093 3.59621 13.4233 3.386C13.6373 3.17579 13.8912 3.0105 14.17 2.89984C14.4488 2.78919 14.747 2.7354 15.0469 2.74165C15.3468 2.74791 15.6424 2.81407 15.9164 2.93624C16.1904 3.05842 16.4371 3.23415 16.6422 3.4531C16.8473 3.67204 17.0065 3.92978 17.1105 4.21116C17.2144 4.49253 17.2611 4.79186 17.2477 5.09154L17.2476 5.0939C17.2325 5.4578 17.1304 5.81148 16.9494 6.12515C16.7424 6.48392 16.8654 6.94258 17.2241 7.14961C17.5829 7.35663 18.0416 7.23362 18.2486 6.87486C18.3813 6.64497 18.4883 6.4027 18.5689 6.15228C18.7596 6.25733 18.9399 6.3816 19.1068 6.52357C19.4824 6.84309 19.7803 7.2439 19.9781 7.69563C20.1759 8.14736 20.2682 8.63817 20.2482 9.13088C20.2393 9.3512 20.208 9.56932 20.1552 9.78198C19.8243 9.68154 19.4568 9.82144 19.2822 10.1361C19.0812 10.4982 19.2119 10.9548 19.5741 11.1558C19.7432 11.2497 19.9021 11.3566 20.0494 11.4765L20.0501 11.4771C20.4611 11.811 20.7842 12.2402 20.9915 12.7275C21.1988 13.2148 21.2838 13.7453 21.2393 14.2729C21.1948 14.8006 21.022 15.3093 20.736 15.7549C20.45 16.2005 20.0596 16.5695 19.5985 16.8298M20.9963 10.3132C20.9964 10.3133 20.9965 10.3134 20.9966 10.3135L20.523 10.895L20.9959 10.3129C20.996 10.313 20.9962 10.3131 20.9963 10.3132Z" fill="#0C0C0D"></path></svg>
                <p className="text-gray-800 font-normal">Cognitive function</p>
              </div>
              <div className="flex items-center space-x-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.75931 7.48847C10.1275 7.64523 10.5434 7.75 10.9958 7.75C11.9764 7.75 12.6793 7.26071 13.1151 6.75519C13.6935 6.08431 13.786 5.20765 13.6634 4.48569C13.5122 3.59624 13.144 2.78052 12.5104 2.18277C11.8675 1.57628 11.0097 1.25 9.99581 1.25C7.63086 1.25 5.86507 2.23749 4.58696 3.75036C3.33192 5.23592 2.56115 7.20717 2.07934 9.19864C1.20442 12.815 1.23125 16.7369 1.24349 18.5265C1.24473 18.7068 1.24581 18.8655 1.24581 19C1.24581 20.0381 2.04253 20.7183 2.84841 21.1443C3.68951 21.589 4.80499 21.9059 5.9763 22.1359C8.33262 22.5986 11.1351 22.75 12.9958 22.75C15.3727 22.75 17.7802 22.092 19.6149 20.8009C21.4663 19.498 22.7458 17.5347 22.7458 15C22.7458 12.4768 21.5995 10.9899 20.2619 10.1725C18.9782 9.38805 17.5763 9.25 16.9958 9.25C15.8296 9.25 14.5658 9.67944 13.5902 10.3066C12.8752 10.7663 12.1693 11.4316 11.8812 12.2373C11.8055 12.2358 11.7293 12.2359 11.6528 12.2377C10.7806 12.2586 9.90146 12.4989 9.06039 13.024C9.17607 12.2699 9.24577 11.4152 9.24577 10.5C9.24577 9.36894 9.4029 8.52931 9.58582 7.95128C9.64407 7.76723 9.70351 7.61393 9.75931 7.48847ZM2.74366 18.5149C2.7448 18.6971 2.74581 18.8596 2.74581 19C2.74581 19.1619 2.86576 19.4567 3.54947 19.8182C4.19795 20.161 5.14497 20.4441 6.26533 20.6641C8.49234 21.1014 11.1898 21.25 12.9958 21.25C15.119 21.25 17.2114 20.658 18.7517 19.5741C20.2753 18.502 21.2458 16.9653 21.2458 15C21.2458 13.0232 20.3921 12.0101 19.4797 11.4525C18.5134 10.8619 17.4153 10.75 16.9958 10.75C16.1621 10.75 15.1758 11.0706 14.4014 11.5684C13.9145 11.8814 13.5984 12.2039 13.422 12.4876C14.4867 12.8106 15.3893 13.3952 15.9975 13.9425C16.3054 14.2196 16.3303 14.6939 16.0532 15.0017C15.7761 15.3096 15.3019 15.3346 14.994 15.0575C14.251 14.3888 13.0039 13.7058 11.6887 13.7373C10.4486 13.767 8.95799 14.4378 7.6561 16.8556C7.45973 17.2203 7.00488 17.3567 6.64018 17.1604C6.27547 16.964 6.13902 16.5091 6.3354 16.1444C6.39047 16.0422 6.44611 15.9422 6.50232 15.8445C6.58419 15.6505 6.68182 15.4419 6.78365 15.2243C7.04146 14.6733 7.32617 14.0649 7.45023 13.4914C7.62571 12.6803 7.74577 11.6503 7.74577 10.5C7.74577 9.23106 7.92198 8.23736 8.15572 7.49872C8.25846 7.17406 8.3757 6.88833 8.49977 6.64634C8.22517 6.38708 8.01126 6.12532 7.87173 5.91603C7.64196 5.57138 7.7351 5.10573 8.07974 4.87596C8.42439 4.6462 8.89004 4.73933 9.1198 5.08397C9.24013 5.26446 9.50377 5.57268 9.85946 5.82918C10.215 6.08561 10.6053 6.25 10.9958 6.25C11.4291 6.25 11.7468 6.04511 11.9791 5.77572C12.1727 5.55116 12.2599 5.18058 12.1846 4.73693C12.0741 4.08683 11.8235 3.5969 11.4811 3.27388C11.1479 2.9596 10.6724 2.75 9.99581 2.75C8.11077 2.75 6.75155 3.51251 5.73279 4.71839C4.69096 5.95158 3.99298 7.66783 3.53728 9.55136C2.70907 12.9746 2.7324 16.7113 2.74366 18.5149Z" fill="#0C0C0D"></path></svg>
                <p className="text-gray-800 font-normal">Muscle function</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
