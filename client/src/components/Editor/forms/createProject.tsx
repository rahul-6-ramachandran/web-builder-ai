import { useEffect, useState } from "react"
import { createNewProject } from "../../../actions/Projects/Project"
import { Project } from "../../../types.dto"


// @ts-ignore
import { onSuccess } from "../../Notifications/Notify"
import { useNavigate, useParams } from "react-router-dom"
import { useProject } from "../../../store/projectContext"

export default function CreateProject(){

    const [formData, setFormData] = useState<Project | null>({
        title : "",
        project : [],
        hosted : false,
        hostedURL : '',
        description : ''
      })
    
      const {id} = useParams()
      const {project} = useProject()

      console.log(project,"ProjectData")
      useEffect(() => {
        if (project) {
          setFormData(prev => {
            if (!prev) return null;
            return {
              ...prev,
              project,
            };
          });
        }
      }, [project]);
      
    // const handleSubmit = async()=>{
    //     createNewProject(formData)
    //     .then((res)=>{
    //         onSuccess("Project Created Successfully")
    //         navigate(`/editor/${id}`)
    //     })
    //   }

      console.log(project)
    return(<>
    <div className="w-full items-center justify-center flex h-screen">
    <form className="p-4 md:p-5 w-1/2 items-center">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Title</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                        <textarea id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>                    
                    </div>
                </div>
                <button  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Create Project
                </button>
            </form>

    </div>
    </>)
}