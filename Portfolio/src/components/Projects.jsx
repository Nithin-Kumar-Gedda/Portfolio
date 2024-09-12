
import React from "react";
import recognize from '../assets/recognize.png'
import analyser from '../assets/analyser.png'
import ml from '../assets/ml.jpg'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Face Detection' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={recognize} alt="" />
            </a>}
            {title=='Basket Analyser' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={analyser} alt="" />
            </a>}
            {title=='Basic ML Models' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={ml} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Basket Analyser',
        description:'The basic ML models in this project cover foundational techniques, including classification, regression, and clustering, aimed at providing a comprehensive understanding of machine learning algorithms.',
        image: {recognize},
        git:'https://github.com/Nithin-Kumar-Gedda/Mini-Projects.git',
        technologies:['APRIORI','ML','Python','Data Processing','3D Visuals']
    },
    {
        title:'Face Detection',
        description:'This project detects faces in an image using OpenCVs Haar Cascade. After converting the image to grayscale, it draws rectangles around detected faces and displays the result.',
        image: {analyser},
        git:"https://github.com/Nithin-Kumar-Gedda/Face-Recognition.git",
        technologies:[ 'OpenCV', 'Python']
    },
    {
        title:'Basic ML Models',
        description:'This project features basic ML models such as classification, regression, and clustering, showcasing key machine learning techniques for data analysis and prediction.',
        image: {ml},
        git:"https://github.com/Nithin-Kumar-Gedda/Face-Recognition.git",
        technologies:[ 'Supervised', 'Unsupervised','Python','EDA','Data Processing']
    }
]

export default Projects