
import about2 from './assets/about2.jpg'
import about3 from './assets/about3.jpg'


const PageAbout = () => {
    return (
        <>
            <>
                <div className="   w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center text-center justify-center font-serif_title">
                    <div className="text-red-600 text-2xl md:text-4xl font-sans font-medium max-w-[450px] m-10 font-serif_title">
                        Who We Are
                    </div>

                </div>

                <img
                    className='  w-screen object-cover '

                    src={about2}
                />

            </>
            <div className="flex justify-center items-center ">
                <div className="    left-4  max-w-6xl  flex flex-col-reverse  md:flex-row  py-4 ">
                    <div className="  text-black-600 mt-4 text-sm md:text-3xl font-lato font-medium  p-4 mb-2">

                        <span className="text-red-500 font-semibold text-xl md:text-4xl font-lato "> The McGill Hydrogen Embrittlement Facility </span>   is located within the Department of Materials Engineering at McGill University. It brings together a team of dedicated professors, postdoctoral fellows, and exceptionally talented Ph.D. students. Among its leading members are Dr. Song, Dr. Yue, and Dr. Brahimi, all internationally recognized for their expertise in hydrogen embrittlement. With extensive publication records in top-tier journals and long-standing partnerships with industry, the group plays a key role at the intersection of academic research and real-world application.

                        <div className="mt-4 text-sm md:text-3xl">
                            McGill University, located in Montreal, Canada, is one of the world’s leading research institutions, consistently ranked among the top 30 globally in the QS World University Rankings. It is renowned for its rigorous academic environment and unwavering pursuit of excellence.

                            Montreal is a dynamic and multicultural city where individuals of diverse races, genders, and identities come together in the shared pursuit of knowledge. The McGill Hydrogen Embrittlement Facility embodies this spirit of inclusion, collaboration, and innovation in all aspects of its work.
                        </div>
                    </div>
                </div>

            </div>

                <div className="   bg-red-50 w-full  mx-auto flex flex-col-reverse md:flex-row items-center text-center justify-center font-serif_title shadow-lg">
                    <div className="text-red-600 text-2xl md:text-4xl  font-medium max-w-[450px] p-4 m-4 font-serif_title ">
                       Our Value
                    </div>

                </div>

            <div className="flex items-center md:ml-16 md:p-4 flex flex-col md:flex-row ">



                <img className=' w-[660px]    mt-16 md:object-cover md:max-w-3xl  object-cover items-center shadow-lg'

                    src={about3}

                />
                <div className="  text-black-600 text-sm md:text-3xl font-lato font-medium  mt-4 md:p-4 md:mb-2">
                    Beyond research, our team shares a passion for learning and discovery. We foster a culture of collaboration, open communication, and mutual support. We genuinely care for one another, and our guiding value is simple:{" "} 
                      <span className="text-red-500 font-semibold text-xl md:text-4xl font-lato ">we thrive together. </span>

                </div>
            </div>

        </>

    )

}

export default PageAbout