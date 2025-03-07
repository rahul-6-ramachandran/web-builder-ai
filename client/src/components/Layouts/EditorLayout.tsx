

import DefaultEditor from "../Editor/Editor";
import EditorSidebar from "../Editor/EditorSidebar";

export default function EditorLayout(){
    return(
        <>
        <div className="flex flex-col">
        <div className="h-screen  fixed  left-0   text-white  flex flex-row items-center  ">


<EditorSidebar/>

 </div>
           <div className="container pl-16 h-screen bg-black">
           
          
           
           <DefaultEditor/>
           </div>
        
        </div>
        </>
    )
}