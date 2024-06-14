const HomeHero = () => {

  return (
    <section class="flex flex-col justify-center text-center">
      <div class="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
        <div class="flex relative flex-col justify-between items-end py-20 pr-36 pl-16 mx-auto w-full max-w-[1400px] min-h-[675px] max-md:flex-wrap max-md:px-5 max-md:max-w-full max-sm:mr-auto">
          
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa61261938a2ba77e8cf1cfd33085fbec925c900f3ba7aa7b45333f5f552b784?apiKey=cb2d2c8250e84f648429de6f26d35390&" 
            alt="" 
            class="object-cover absolute inset-0 size-full" 
          />

          <div class="flex relative flex-col mr-auto font-black text-white max-md:mt-10">
            
            <div class="mb-9 text-left text-[210px] max-md:text-4xl max-md:leading-4 max-sm:mb-5 max-sm:text-8xl max-sm:text-left max-sm:leading-[110px]">
              -30 <span class="text-6xl leading-[70px]">%</span>
            </div>

            <div class="text-7xl leading-[78px] max-md:mt-10 max-md:text-4xl max-md:leading-10">
              COLORING<br/> 
              <span class="font-light">+ CUTTING</span>
            </div>
          </div>

          <button class="relative justify-center px-9 py-1.5 ml-auto text-xl leading-10 uppercase bg-white text-zinc-800 tracking-[3.98px] max-md:px-5 max-md:mt-10 max-sm:mr-auto" data-el="discover-more" tabindex="0">
            Discover more
          </button>
          
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
