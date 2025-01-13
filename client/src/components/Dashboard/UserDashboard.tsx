// import Prompt from "../Prompt/prompt";

import Prompt from "../Prompt/prompt";
import Templates from "./Templates/Template";

export default function Userdashboard() {



    return (
        <>
            
                <div className="w-full h-full justify-center flex flex-col items-center">
                    
                <div className=" flex flex-col items-center  p-5">
                    <h2 className="mb-3 w-2/3 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Create Stunning Websites with Ease: Build, Design, and Launch Your Perfect Site</h2>
                    <p className="mb-3 flex items-center justify-center text-gray-500 dark:text-gray-400 text-center">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast. simplicity, creativity, and speed.</p>
                </div>
                    <Prompt />
                   <div className="w-full text-start">
                   <h4 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Recommended</h4>
                   </div>
                    <div className=" flex gap-3 px-3">
                        
                    <Templates />
                    <Templates />
                    <Templates />
                    <Templates />
                    </div>
                   
                </div>
          


        </>
    )
}