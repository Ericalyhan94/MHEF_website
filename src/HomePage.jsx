
import labPhoto1 from './assets/lab_photo1.jpg'
import labPhoto2 from './assets/lab_photo2.jpg'
import labPhoto3 from './assets/lab_photo3.jpg'
import labPhoto5 from './assets/lab_photo5.jpg'
import companies from './assets/companies.jpg'
import {useRef} from "react";

const HomePage = () => {
    const picRef=useRef(null)
    return (
        <div className=" ">
            <div >
                <div className="relative">
                    <img
                        className='  w-screen h-screen object-cover '

                        src={labPhoto2}
                    />


                    <div className=" absolute  inset-0   w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center 
                    text-center justify-center">
                        <div className="relative top-48 text-red-600 text-2xl md:text-4xl font-sans font-medium max-w-[450px] ">
                            <div className=" shadow-lg  bg-[rgba(245,245,245,1)] rounded-lg">
                                Exploring Hydrogen Embrittlement  —
                                <span className="text-gray-800"> Unlocking the Future of Materials Science </span> {" "}

                            </div>
                            <button className="block mx-auto  border-2 border-red-600 text-3xl font-medium px-6 py-2 mt-4 
                            bg-[rgba(245,245,245,0.6)] rounded-full hover:bg-[rgba(245,245,245,0.9)]"
                            onClick={()=>{
                                    picRef.current.scrollIntoView({
                                        behavior:"smooth"
                                    })
                                }}>
                                Learn More
                                
                            </button>
                        </div>

                    </div>





                </div>

                <div className="relative">
                    <img
                        className='  w-screen h-screen object-cover '

                        src={labPhoto5}
                        ref={picRef}
                    />

                    <div className="  absolute top-4  left-4  max-w-6xl  flex flex-col-reverse md:flex-row  py-4 px-4">
                        <div className=" shadow-lg text-black-600 text-sm md:text-xl font-lato font-medium max-w-[360px] bg-[rgba(245,245,245,0.9)] p-4 mb-2">
                            <div className="mb-4">
                                Hydrogen embrittlement (HE) is a phenomenon where metals—especially high-strength steels—become brittle and fracture due to the ingress of hydrogen atoms into their microstructure. Even small amounts of hydrogen can drastically reduce a material’s toughness and load-bearing capacity, often without visible warning.                            </div>
                            <div >
                                Hydrogen embrittlement is critically important in industries such as aerospace, automotive, energy, and construction, where structural components must withstand high stresses over long periods. Failures caused by HE can lead to catastrophic accidents                        </div>

                        </div>
                    </div>
                </div>



                <div className="relative">
                    <img
                        className='  w-screen h-screen object-cover '

                        src={labPhoto1}
                    />

                    <div className="  absolute top-4  right-4  max-w-6xl  flex flex-col-reverse md:flex-row  py-4 px-4">
                        <div className=" shadow-lg text-black-600 text-sm md:text-xl font-lato font-medium max-w-[360px] bg-[rgba(245,245,245,0.8)] p-4">
                            <div className="mb-4">
                                The McGill Hydrogen Embrittlement Facility was originally established to provide a scientific foundation for addressing the phenomenon of hydrogen embrittlement.
                            </div>
                            <div >
                                Since then, it has evolved into a versatile resource offering consultation, technical support, and highly qualified personnel to both industrial sectors and academic institutions confronting this scientifically challenging and industrially critical issue.
                            </div>

                        </div>
                    </div>
                </div>






                <div className="relative">
                    <img
                        className='  w-screen h-screen object-cover '

                        src={labPhoto3}
                    />

                    <div className="  absolute top-4  right-4  max-w-6xl  flex flex-col-reverse md:flex-row  py-4 px-4">
                        <div className=" shadow-lg  text-black-600 text-sm md:text-xl font-lato font-medium max-w-[400px] bg-[rgba(245,245,245,0.8)] p-4">
                            <div className="mb-4">
                                McGill University’s hydrogen embrittlement research program began in 2006 as a collaborative research and development (CRD) project, co-sponsored by a number of industrial partners and the government of Canada. The ongoing research follows multiple distinct tracks such as:

                            </div>
                            <div >
                                i) Susceptibility of fastener and pipeline materials to HE </div>
                            <div > ii) Coating processes and embrittlement </div>
                            <div > iii) Susceptibility of aerospace materials and coating processes </div>
                            <div >iv) Multicale HE studies involving experiments, finite element Analyses (FEA) and atomistic simulations              </div>                        </div>


                    </div>
                </div>
                <div className="bg-red-50">
                    <div className="text-red-600 text-3xl md:text-4xl font-serif_title font-medium max-w-[450px] p-10" > Our collaborators: </div>

                    <img
                        className='  w-screen object-cover '

                        src={companies}
                    />
                </div>

            </div>



        </div>


    );


};

export default HomePage