import grapesjs from "grapesjs";
// import GjsEditor from '@grapesjs/react';
import { useEffect, useRef, useState } from "react";

import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import "grapesjs-blocks-basic";



// @ts-ignore
import { onSuccess } from "../Notifications/Notify"

import tailwindPlugin from "../../plugins/tailwindPlugins";
import CreateProject from "./forms/createProject";
import { createNewProject } from "../../actions/Projects/Project";
import { Project} from "../../types.dto";
import { useNavigate, useParams } from "react-router-dom";
import { useProject } from "../../store/projectContext";
// import Axios from '../../config/axios';

export default function DefaultEditor() {
  const editorRef = useRef<HTMLDivElement>(null);

  const {setProject} = useProject()
  const {id} = useParams()
  const [saveModelOpen, setSaveModelOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (!editorRef.current) return;

    const editor = grapesjs.init({
      container: editorRef.current,
      height: "100%",
      width: "auto",
      storageManager: false,
      fromElement: true,
      plugins: [tailwindPlugin],
    });

    editor.on("load", () => {
      const iframe = editor.Canvas.getFrameEl();
      if (iframe) {
        const head = iframe.contentDocument?.head;
        if (head) {
          const tailwindCSS = document.createElement("link");
          tailwindCSS.rel = "stylesheet";
          tailwindCSS.href =
            "https://buildui-frontend.onrender.com/assets/css/tailwind.min.css";
          head.appendChild(tailwindCSS);
        }
      }
    });

    // Load saved design
    // axios.get(`http://localhost:3000/designs/${DESIGN_ID}`).then((res) => {
    //   if (res.data) {
    //     editor.loadProjectData(res.data.data);
    //   }
    // });

   
    editor.Commands.add('save-design', {
      async run(editor, sender) {
        const data = editor.getProjectData();
        setProject(data)
        console.log("DesignData", data);
        createNewProject(data)
        .then((res)=>{
                    onSuccess("Project Created Successfully")
                    navigate(`/projects/${id}`)
                })
      },
    });


    const undo = () => {
      editor.UndoManager.undo();
    };

    const redo = () => {
      editor.UndoManager.redo();
    };

    editor.Panels.addButton("options", {
      id: "save-button",
      className: "fa fa-save",
      command: 'save-design',
      attributes: { title: "Save Design" },
    });

    editor.Panels.addButton("options", {
      id: "undo",
      className: "fa fa-undo",
      command: undo,
      attributes: { title: "Undo" },
    });

    editor.Panels.addButton("options", {
      id: "redo",
      className: "fa fa-redo text-white",
      command: redo,
      attributes: { title: "Redo" },
    });

    return () => editor.destroy()
  });

  // Project Submit function
 
  return (
   <>
    <div
      ref={editorRef}
      className="md:w-full  h-screen bg-gradient-to-r from-blue-900 via-gray-900 to-slate-950 hover:bg-gradient-to-br"
    >
      
    </div>
    {/* {saveModelOpen &&
          <div className="w-full"  style={{ position: 'fixed', zIndex: 9999, top: 0, left: 0, right: 0, bottom: 0 }}>
          <CreateProject setSaveModelOpen={setSaveModelOpen}/>
        </div>
      } */}
      
   </>
  );
}
