import * as React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row w-full items-center justify-center">
      <div className="flex justify-center items-start py-16 w-full px-5 max-w-[1400px]">

        <div className="flex relative flex-col w-6/12">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col gap-6 max-md:max-w-full max-sm:mb-10">
                <h2 className="text-lg font-bold text-black max-md:max-w-full">Contacts:</h2>
                <div className="flex gap-5 justify-between text-black max-md:flex-wrap">
        
                  <div className="flex flex-col">
                    <p className="mb-8 text-base">BEAUTY ONE</p>
                    <p className="mb-2.5 text-sm">OneEntry street, 10</p>
                    <div className="flex gap-1 text-sm font-bold leading-7">
                      <img loading="lazy"
                        src=""
                        alt="Phone Icon" className="w-2.5 aspect-square" />
                      <a href="tel:+78007840098" className="text-base font-medium text-gray-900">+7 800 784 00 98</a>
                    </div>
                  </div>
        
                  <div className="flex flex-col">
                    <p className="mb-8 text-base">BEAUTY TWO</p>
                    <p className="mb-2.5 text-sm">Happy avenue, 108</p>
                    <div className="flex flex-col justify-center text-sm font-bold leading-7">
                      <div className="flex gap-1">
                        <img loading="lazy"
                          src=""
                          alt="Phone Icon" 
                          className="w-2.5 aspect-[0.91]" 
                        />
                        <a href="tel:+78007840098" className="text-base font-medium text-gray-900">+7 800 784 00 98</a>
                      </div>
                    </div>
                  </div>
        
                  <div className="flex flex-col self-start">
                    <p className="mb-8 text-base">BEAUTY THREE</p>
                    <p className="mb-2.5 text-sm">Oak alley, 55</p>
                    <div className="flex flex-row justify-center text-sm font-bold leading-7">
                      <img loading="lazy"
                        src=""
                        alt="Phone Icon" 
                        className="w-2.5 aspect-[0.91]" 
                      />
                      <a href="tel:+78007840098" className="text-base font-medium text-gray-900">+7 800 784 00 98</a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-6 max-w-full w-[134px]">
                  <p className="mb-5 text-sm font-bold text-black">Follow us:</p>
                  <div className="flex gap-5 justify-around items-end mb-5">
                    <img loading="lazy"
                      src=""
                      alt="Social Icon 1" 
                      className="shrink-0 aspect-[0.97] fill-black h-[30px] w-[30px]" 
                    />
                    <img loading="lazy"
                      src=""
                      alt="Social Icon 2" 
                      className="shrink-0 aspect-[0.97] fill-black h-[30px] w-[30px]" 
                    />
                    <img loading="lazy"
                      src=""
                      alt="Social Icon 3" 
                      className="shrink-0 self-start mt-1.5 aspect-[1.2] fill-black h-[30px] w-[30px]" 
                    />
                  </div>
                </div>
        
                <p className="text-base font-medium text-left text-black max-md:max-w-full">
                  <span className="leading-5">@ 2024 OneEntry, by</span>
                  <span className="leading-5 text-black">oneentry.cloud</span>
                </p>
        
              </div>
            </div>
        
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col gap-6 self-center w-auto max-sm:mr-auto">
                <h2 className="text-lg font-bold leading-8">Services</h2>
                <ul className="box-border flex relative flex-col shrink-0 gap-4">
                  <li>Hair Cut</li>
                  <li>Manicure</li>
                  <li>Pedicure</li>
                  <li>Haircolor</li>
                  <li>Styling</li>
                </ul>
              </div>
            </div>
        
          </div>
        </div>
        
        <div className="flex-auto w-2/5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <nav className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-start">
                <h2 className="mb-6 text-lg font-bold leading-8">About us</h2>
                <div className="flex flex-col justify-center text-base">
                  <div className="flex flex-col gap-4">
                    <a href="#">Our Specialist</a>
                    <a href="#">Prices</a>
                    <a href="#">Reviews</a>
                  </div>
                </div>
              </div>
            </nav>
        
            <aside className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-5 text-black border border-black border-solid max-md:mt-10">
                <h2 className="text-lg font-bold">Opening Time</h2>
                <div className="flex flex-col mt-4 text-base whitespace-nowrap">
                  <p className="gap-5 justify-between">Monday</p>
                  <p>08.00-22.00</p>
                  <div className="flex gap-5 justify-between mt-2">
                    <p>Tuesday</p>
                    <p>08.00-22.00</p>
                  </div>
                  <div className="flex gap-5 justify-between mt-2">
                    <p>Wednesday</p>
                    <p>08.00-22.00</p>
                  </div>
                  <div className="flex gap-5 justify-between mt-2">
                    <p>Thursday</p>
                    <p>08.00-22.00</p>
                  </div>
                  <div className="flex gap-5 justify-between mt-2">
                    <p>Friday</p>
                    <p>08.00-22.00</p>
                  </div>
                  <div className="flex gap-5 justify-between mt-2">
                    <p>Saturday</p>
                    <p>12.00-22.00</p>
                  </div>
                  <div className="flex gap-5 justify-between mt-2">
                    <p>Sunday</p>
                    <p>12.00-22.00</p>
                  </div>
                </div>
              </div>
            </aside>
        
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;