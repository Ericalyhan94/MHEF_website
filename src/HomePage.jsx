import labPhoto1 from './assets/lab_photo1.jpg';
import labPhoto2 from './assets/lab_photo2.jpg';
import labPhoto3 from './assets/lab_photo3.jpg';
import labPhoto5 from './assets/lab_photo5.jpg';

import company1 from './assets/company_1.png';
import company2 from './assets/company_2.png';
import company3 from './assets/company_3.png';
import company4 from './assets/company_4.png';
import company5 from './assets/company_5.png';
import company6 from './assets/company_6.png';
import company7 from './assets/company_7.png';

import { useRef } from "react";

const companyLogos = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7
];

const HomePage = () => {
  const picRef = useRef(null);

  return (
    <div className="">
      {/* --- Hero Section --- */}
      <div className="relative">
        <img
          className='w-screen h-screen object-cover'
          src={labPhoto2}
          alt="Lab"
        />
        <div className="absolute inset-0 w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center text-center justify-center">
          <div className="relative top-48 text-red-600 text-2xl md:text-4xl font-sans font-medium max-w-[450px]">
            <div className="shadow-lg bg-[rgba(245,245,245,1)] rounded-lg p-4">
              Exploring Hydrogen Embrittlement —
              <span className="text-gray-800"> Unlocking the Future of Materials Science </span>
            </div>
            <button
              className="block mx-auto border-2 border-red-600 text-3xl font-medium px-6 py-2 mt-4 bg-[rgba(245,245,245,0.6)] rounded-full hover:bg-[rgba(245,245,245,0.9)] transition"
              onClick={() => {
                picRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* --- Lab Description Sections --- */}
      {[labPhoto5, labPhoto1, labPhoto3].map((photo, index) => {
        const textContent = [
          {
            title: "",
            paragraphs: [
              "Hydrogen embrittlement (HE) is a phenomenon where metals—especially high-strength steels—become brittle and fracture due to the ingress of hydrogen atoms into their microstructure. Even small amounts of hydrogen can drastically reduce a material’s toughness and load-bearing capacity, often without visible warning.",
              "Hydrogen embrittlement is critically important in industries such as aerospace, automotive, energy, and construction, where structural components must withstand high stresses over long periods. Failures caused by HE can lead to catastrophic accidents"
            ]
          },
          {
            title: "",
            paragraphs: [
              "The McGill Hydrogen Embrittlement Facility was originally established to provide a scientific foundation for addressing the phenomenon of hydrogen embrittlement.",
              "Since then, it has evolved into a versatile resource offering consultation, technical support, and highly qualified personnel to both industrial sectors and academic institutions confronting this scientifically challenging and industrially critical issue."
            ]
          },
          {
            title: "",
            paragraphs: [
              "McGill University’s hydrogen embrittlement research program began in 2006 as a collaborative research and development (CRD) project, co-sponsored by a number of industrial partners and the government of Canada. The ongoing research follows multiple distinct tracks such as:",
              "i) Susceptibility of fastener and pipeline materials to HE",
              "ii) Coating processes and embrittlement",
              "iii) Susceptibility of aerospace materials and coating processes",
              "iv) Multiscale HE studies involving experiments, finite element Analyses (FEA) and atomistic simulations"
            ]
          }
        ][index];

        return (
          <div className="relative" key={index}>
            <img
              className='w-screen h-screen object-cover'
              src={photo}
              ref={index === 0 ? picRef : null}
              alt={`Lab photo ${index + 1}`}
            />
            <div className={`absolute top-4 ${index % 2 === 0 ? "right-4" : "left-4"} max-w-6xl flex flex-col-reverse md:flex-row py-4 px-4`}>
              <div className="shadow-lg text-black text-sm md:text-xl font-lato font-medium max-w-[400px] bg-[rgba(245,245,245,0.8)] p-4 space-y-2">
                {textContent.paragraphs.map((para, idx) => (
                  <div key={idx}>{para}</div>
                ))}
              </div>
            </div>
          </div>
        )
      })}

      {/* --- Collaborators Section --- */}
      <div className="bg-red-50 py-10">
        <div className="text-red-600 text-3xl md:text-4xl font-serif_title font-medium max-w-[450px] p-10">
          Our collaborators:
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 px-4">
          {companyLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-2 bg-white rounded-lg shadow hover:scale-105 transition-transform duration-300">
              <img src={logo} alt={`Company ${index + 1}`} className="object-contain h-20 md:h-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
