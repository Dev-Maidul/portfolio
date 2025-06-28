import React, { useEffect, useState } from 'react';
import Project from '../Components/Project';


const Projects = () => {
    const [projects,setProjects]=useState(null);
    useEffect(()=>{
        fetch('projects.json').then((res)=>res.json())
        .then((data)=>setProjects(data))
    })
    // console.log(projects)
    return (
        <div className='py-12 mt-15'>
            <h1 className='font-semibold text-center text-4xl mb-4'>My Projects</h1>
            {
                projects?.map((project)=> <Project project={project} key={project.id}></Project>)
            }
        </div>
    );
};

export default Projects;