import Templates from "../Templates/Template";

export default function Projects(){
    return(
        <>
        <div className="text-white">
           <h2 className="text-xl font-medium">My Projects</h2>
           <div className="mt-5 p-1 flex gap-3">
            <Templates/>
            <Templates/>
           </div>
           <h2 className="text-xl font-medium mt-4">Recommended</h2>
           <div className="mt-5 p-1 flex gap-3">
            <Templates/>
            <Templates/>
           </div>
        </div>
        </>
    )
}