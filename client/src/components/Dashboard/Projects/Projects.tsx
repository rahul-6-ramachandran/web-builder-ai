import { lazy, Suspense, useEffect, useState } from "react";
import { getUserProjects } from "../../../actions/Projects/Project";
import { Project } from "../../../types.dto";

const Templates = lazy(() => import("../Templates/Template"));

export default function Projects() {

  const [allProjects,setAllProjects] = useState<Project[] | null>()

  useEffect(()=>{
    getAllUserProjects()
  },[])

  const getAllUserProjects = async()=>{
      getUserProjects()
      .then((res)=>{
        setAllProjects(res)
      })
  }

  return (
    <>
      <div className="text-white">
        <h2 className="text-xl font-medium">My Projects</h2>
        <div className="mt-5 p-1 flex gap-3">
          {
            allProjects?.map((project)=>(
              <>
                <Suspense
             fallback={<span className="loading loading-bars loading-xl"></span>}
           >
             <Templates  projectDetails={project} isTemplate= {false} />
           </Suspense>
              </>
            ))
           
          }
         
        </div>
        <h2 className="text-xl font-medium mt-4">Recommended</h2>
        {/* <div className="mt-5 p-1 flex gap-3">
          <Suspense
            fallback={<span className="loading loading-bars loading-xl"></span>}
          >
            <Templates  />
            <Templates />
          </Suspense>
        </div> */}
      </div>
    </>
  );
}
