import { useState } from "react";

export default function TestimonialCarousel() {
    const featuredImages = ['img_photo', 'img_photo (1)'];
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(`STATE => ${currentIndex}`)

    const handleOnNextClick = () => {
        currentIndex === featuredImages.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    };

    const handleOnPrevClick = () => {
        const productsLength = featuredImages.length;
        setCurrentIndex((currentIndex + productsLength - 1) % productsLength);
        console.log(currentIndex)
    };

    return <>
        {/* <!-- TESTIMONIAL --> */}
        <div className="text-center mt-20">
            <h3 className="font-bold text-2xl mt-2">Testimonial</h3>
            <p className="mt-3">Berbagai review positif dari para pelanggan kami</p>
        </div>

        <div id="controls-carousel" className="mt-10 relative max-w-2xl h-64 mx-auto overflow-hidden rounded-lg shadow-lg">
            <div className="flex p-10 h-full items-center justify-center gap-10 bg-backgroundGrey">
                <img src={`/images/${featuredImages[currentIndex]}.png`} alt="Photo" />
                <div>
                    <div className="flex mb-2">
                        <img src="/images/icons/Star.svg" alt="Star" />
                        <img src="/images/icons/Star.svg" alt="Star" />
                        <img src="/images/icons/Star.svg" alt="Star" />
                        <img src="/images/icons/Star.svg" alt="Star" />
                        <img src="/images/icons/Star.svg" alt="Star" />
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta quibusdam sint corporis nostrum
                        neque, natus, reprehenderit quae asperiores atque ex debitis. Quasi adipisci aut sunt omnis eveniet
                        debitis libero."</p>
                    <p className="font-semibold mt-2">John Dee 32, Bromo</p>
                </div>
            </div>

            {/* <!-- Slider controls --> */}
            <button onClick={handleOnPrevClick} type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
                <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="hidden">Previous</span>
                </span>
            </button>
            <button onClick={handleOnNextClick} type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
                <span className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="hidden">Next</span>
                </span>
            </button>
        </div >
    </>
}