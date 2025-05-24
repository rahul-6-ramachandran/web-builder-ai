import { lazy, Suspense,  } from "react";
import EditorSidebar from "../Editor/EditorSidebar";

const DefaultEditor = lazy(() => import("../Editor/Editor"));
export default function EditorLayout() {
      
    
  return (
    <>
      <div className="flex flex-col">
        <div className="h-screen  fixed  left-0   text-white  flex flex-row items-center  ">
          <EditorSidebar />
        </div>
        <div className="container pl-16 h-screen bg-black">
          <Suspense
            fallback={<span className="loading loading-bars loading-xl"></span>}
          >
            <DefaultEditor />
          </Suspense>
        </div>
      </div>
    </>
  );
}
