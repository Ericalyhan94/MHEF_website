import MyMap from "./PageContact/MyMap"
import contact1 from "./assets/contact1.jpg"

const PageContact = () => {
    return (
        <>
            <div>
                <img className='  w-screen  object-cover ' src={contact1} />

            </div>

            <div className=" flex flex-col-reverse md:flex-row 
                                justify-between p-12">

                <div className=" w-[800px] h-[400px]  flex-col 
                                  text-5xl p-8 font-lato text-red-600">
                    Contact us：

                    <div className=" mt-8 items-start text-2xl text-black font-lato  text-center">

                        <p> McGill University</p>
                        <p> Department of Materials Engineering</p>
                        <p> Room 2160, Wong Building</p>
                        <p> 3610 Rue University</p>
                        <p> Montreal, H3A 0C5</p>
                        <p> Canada</p>
                        <p>Cell:  	+1 514 944 3358</p>
                        <p>Fax:  	+1 514 398 4492</p>
                        <a href="mailto:salim.brahimi@mcgill.ca"><p className="hover:text-slate-500">E-mail: salim.brahimi@mcgill.ca</p></a>
                    </div>
                </div>
                <div className=" w-[600px] h-[400px]  max-w-6xl flex flex-col-reverse md:flex-row items-center 
                                text-center justify-center shadow-lg">

                    <MyMap />

                </div>
            </div>

        </>
    )

}

export default PageContact