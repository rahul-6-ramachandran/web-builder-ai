import grapesjs from 'grapesjs';
// import GjsEditor from '@grapesjs/react';
import { useEffect, useRef } from 'react';

import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import "grapesjs-blocks-basic";


import tailwindPlugin from '../../plugins/tailwindPlugins';
// import Axios from '../../config/axios';

export default function DefaultEditor() {
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(!editorRef.current) return;

    const editor = grapesjs.init({
      container : editorRef.current,
      height : '100%',
      width : 'auto',
      storageManager : false,
      fromElement : true,
      plugins : [tailwindPlugin]
    })


   

    editor.on("load", () => {
      const iframe = editor.Canvas.getFrameEl();
      if (iframe) {
        const head = iframe.contentDocument?.head;
        if (head) {
          const tailwindCSS = document.createElement("link");
          tailwindCSS.rel = "stylesheet";
          tailwindCSS.href = '../../../dist/assets/css/tailwind.min.css';  
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

    const saveDesign = () => {
      const data = editor.getProjectData();
      console.log("DesignData",data)
      // Axios.post("http://localhost:3000/designs/save", { id: DESIGN_ID, data });
    };


    const undo = () => {
      editor.UndoManager.undo()
    };

    
    const redo = () => {
      editor.UndoManager.redo()
    };



    editor.Panels.addButton("options", {
      id: "save-button",
      className: "fa fa-save",
      command: saveDesign,
      attributes: { title: "Save Design" },
    }

  );

  
  editor.Panels.addButton("options", {
    id: "undo",
    className: "fa fa-undo",
    command: undo,
    attributes: { title: "Undo" },
  }
);

editor.Panels.addButton("options", {
  id: "redo",
  className: "fa fa-redo text-white",
  command: redo,
  attributes: { title: "Redo" },
}
);


  
  })
  return <div ref={editorRef} className="md:w-full  h-screen bg-gradient-to-r from-blue-900 via-gray-900 to-slate-950 hover:bg-gradient-to-br"></div>;
}