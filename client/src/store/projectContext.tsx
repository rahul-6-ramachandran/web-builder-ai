import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {  } from "../types.dto";
import { ProjectData } from "grapesjs";




const ProjectContext = createContext<{
  project : ProjectData | null;
  setProject : Dispatch<SetStateAction<ProjectData | null>>;
  loading: boolean;
}>({
    project: null,
    setProject: () => {},
  loading: false,
});

export const useProject = () => useContext(ProjectContext);
export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(false);



  return (
    <ProjectContext.Provider value={{ project, setProject, loading }}>
      {children}
    </ProjectContext.Provider>
  );
};

