import lab1 from "../assets/lab_equipment_1.png";
import lab2 from "../assets/lab_equipment_2.png";
import lab3 from "../assets/lab_equipment_3.png";
import lab4 from "../assets/lab_equipment_4.png";
import lab5 from "../assets/lab_equipment_5.png";

import model1 from "../assets/simulation_modeling_1.png";
import model2 from "../assets/simulation_modeling_2.png";
import model3 from "../assets/simulation_modeling_3.png";
import model4 from "../assets/simulation_modeling_4.png";
import model5 from "../assets/simulation_modeling_5.png";
 
const ResearchData = [
  {
    id: 1,
    title: "Mechanical Testing - Incremental Step Load (ISL) Tests",
    description:
      "We perform Incremental Step Load (ISL) tests to measure the mechanical properties of the samples and evaluate their hydrogen embrittlement (HE) susceptibility by determining the corresponding stress thresholds.",
    image: lab1,
  },
  {
    id: 2,
    title: "Mechanical Testing - Slow Strain Rate (SSR) Tests",
    description:
      "We can perform mechanical testing using a universal testing machine (UTM) with variable displacement control, including tensile tests in accordance with ASTM E18 and Slow Strain Rate (SSR) tensile tests in accordance with ASTM G129.",
    image: lab2,
  },
  {
    id: 3,
    title: "Electrochemical Permeation Tests",
    description:
      "We can determine the apparent diffusivity, subsurface hydrogen concentration, lattice hydrogen concentration, and the amounts of reversible and irreversible trapped hydrogen from discharge profiles, providing a comprehensive view of hydrogen behavior and trapping in the material.",
    image: lab3,
  },
  
    {
    id: 4,
    title: "Thermal Desorption Spectroscopy (TDS) Analysis",
    description:
      "We use Thermal Desorption Spectroscopy (TDS) to quantify lattice and trapped hydrogen in metals, providing insight into hydrogen distribution and trapping mechanisms.",
    image: lab4,
  },
  
    {
    id: 5,
    title: "New Additions",
    description:
      "We can use mass spectrometry to measure diffusible and trapped hydrogen, achieving detection limits in the low ng/g range, equivalent to just a few hydrogen molecules per particle.",
    image: lab5,
  },
      {
    id: 6,
    title: "Concurrent Multiscale Modeling",
    description:
      "We employ concurrent multiscale modeling to investigate hydrogen diffusion along dislocation cores, capturing the atomistic mechanisms while linking them to mesoscale transport behavior.",
    image: model1,
  },
        {
    id: 7,
    title: "Molecular Dynamics (MD) Simulations",
    description:
      "We perform MD simulations to study hydrogen diffusion, its impact on the mechanical properties of metals, and to capture the material’s transition from ductile to brittle behavior.",
    image: model2,
  },
          {
    id: 8,
    title: "Atomistic Simulations",
    description:
      "At the atomic scale, we employ VASP-based atomistic simulations to explore the energetics and intrinsic mechanical characteristics of materials.",
    image: model3,
  },
  
            {
    id: 9,
    title: "Finite Element Analysis",
    description:
      "At the continuum scale, finite element analysis (FEA) is employed to model stress distribution and macroscopic deformation. We also study the hydrogen diffusion process and its impact on the mechanical properties of metals.",
    image: model4,
  },
              {
    id: 10,
    title: "Computer Vision",
    description:
      "We can use computer-vision-based machine learning to perform phase analysis, image processing, and phase classification, achieving high accuracy, objectivity, and efficiency.",
    image: model5,
  },
];

export default ResearchData;
