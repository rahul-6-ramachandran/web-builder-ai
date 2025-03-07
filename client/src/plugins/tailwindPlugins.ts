import { Editor } from "grapesjs";

export default function tailwindPlugin(editor : Editor){

    // Customisation in Components

    // Buttons
    editor.Components.addType("tailwind-button",{
        model:{
            defaults : {
                tagName : "button",
                attributes : {
                    class : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                },
                content : "Click Me",
                editable: true,
            draggable: true,
            highlightable: true,
                traits : [
                    // {
                    //     type : "text",
                    //     label : "Button Text",
                    //     name : "content",
                    //     changeProp : true,
                    // },
                    {
                        type: "select",
                        label: "Curve",
                        name: "borderRadius",
                        options: [
                          {
                              value: "rounded-none", name: "None",
                              id: "None"
                          },
                          {
                              value: "rounded-sm", name: "Small",
                              id: "Small"
                          },
                          {
                              value: "rounded", name: "Medium",
                              id: "Medium"
                          }, // Default Tailwind rounded
                          {
                              value: "rounded-lg", name: "Large",
                              id: "Large"
                          },
                          {
                              value: "rounded-full", name: "Full (Pill Shape)",
                              id: "Full (Pill Shape)"
                          },
                        ],
                        changeProp: true,
                      },
                    {
                        type : "select",
                        label : "Size",
                        name : "size",
                        options : [
                            {
                                value: "px-2 py-1 text-sm", name: "Small",
                                id: "Small"
                            },
                            {
                                value: "px-4 py-2", name: "Medium",
                                id: "Medium"
                            },
                            {
                                value: "px-6 py-3 text-lg", name: "Large",
                                id: "Large"
                            },
                        ],
                        changeProp : true,
                    },
                    {
                        type: "color",
                        label: "Background Color",
                        name: "bgColor",
                        changeProp: true,
                      },
                      {
                        type: "color",
                        label: "Text Color",
                        name: "textColor",
                        changeProp: true,
                      },
                      {
                        type: "color",
                        label: "Hover Background Color", 
                        name: "hoverBgColor",
                        changeProp: true,
                      },
                      {
                        type: "color",
                        label: "Hover Text Color", 
                        name: "hoverTextColor",
                        changeProp: true,
                      },

                ]
                
            },
            init() {
                this.on("change:content change:bgColor change:textColor change:size change:borderRadius", this.updateStyle);
              },

              updateStyle() {
                // const buttonText = this.get("content") || "Click Me";
                const bgColor = this.get("bgColor") || "#2563eb"; 
                const textColor = this.get("textColor") || "#ffffff"; 
                const borderRadius = this.get("borderRadius") || "rounded"
                const size = this.get("size") || "px-4 py-2";
                 const hoverText = this.get('hoverTextColor') || "#ffffff"
                 const hoverBg = this.get('hoverBgColor') ||  "#1d4ed8"
                // const buttonText = this.view?.el?.innerText || "Click Me" 

                // this.set("content", buttonText); // Updates button text
                this.addAttributes({ class: `${size} ${borderRadius} ` ,style :  `background-color: ${bgColor}; color: ${textColor};`});
                this.view?.el?.setAttribute("onmouseover", `this.style.backgroundColor='${hoverBg}'; this.style.color='${hoverText}'`);
  this.view?.el?.setAttribute("onmouseout", `this.style.backgroundColor='${bgColor}'; this.style.color='${textColor}'`);
              },
        },
        view: {
            onRender() {
              const el = this.el;
              el.style.cursor = "pointer";
        
              el.addEventListener("click", () => {
                const rte = this.em.get("Editor").RichTextEditor;
                rte.start(el); 
                el.focus();
              });
            },
          },
    })

    // Containers
    editor.Components.addType("Container",{
        model :{
            defaults : {
                tagName : "div",
                attributes : {class:"container mx-auto p-6"},
                highlightable: true,
                editable: true,
                draggable : true,
                droppable : true,
                content : "This is a Sample Container",
                traits : [
                    {
                        type: "text",
                        label: "Content",
                        name: "content",
                        changeProp: true,
                      },
                    {
                        type : "select",
                        label: "Width",
                        name: "width",
                        options: [
                            {
                                value: "w-full", name: "Full Width",
                                id: "Full Width"
                            },
                            {
                                value: "w-3/4", name: "75%",
                                id: "75"
                            },
                            {
                                value: "w-1/2", name: "50%",
                                id: "50"
                            },
                            {
                                value: "w-1/3", name: "33%",
                                id: "33"
                            },
                        ],
                        changeProp: true,

                    },
                    {
                        type: "color",
                        label: "Background Color",
                        name: "bgColor",
                        changeProp: true,
                      },
                      {
                        type: "text",
                        label: "Padding",
                        name: "padding",
                        changeProp: true,
                      },
                      {
                        type: "select",
                        label: "Margin-X",
                        name: "marginX",
                        options: [
                            {
                                value: "mx-2", name: "mx-2",
                                id: "mx-2"
                            },
                            {
                                value: "mx-4", name: "mx-4",
                                id: "mx-4"
                            },
                            {
                                value: "mx-6", name: "mx-6",
                                id: "mx-6"
                            },
                            {
                                value: "mx-8", name: "mx-8",
                                id: "mx-8"
                            },
                        ],
                        changeProp: true,
                      },
                      {
                        type: "select",
                        label: "Margin-Y",
                        name: "marginY",
                        options: [
                            {
                                value: "my-2", name: "mx-2",
                                id: "mx-2"
                            },
                            {
                                value: "my-4", name: "my-4",
                                id: "my-4"
                            },
                            {
                                value: "my-6", name: "my-6",
                                id: "my-6"
                            },
                            {
                                value: "my-8", name: "my-8",
                                id: "my-8"
                            },
                        ],
                        changeProp: true,
                      },
                ]
            },

            init() {
                this.on("change:width change:bgColor change:padding change:marginY change:marginX"  , this.updateStyle);
              },

              updateStyle() {
                const width = this.get("width") || "w-full";
                const bgColor = this.get("bgColor") || "#f3f4f6";
                const padding = this.get("padding") || "p-4";
                const marginX = this.get("marginX") || "mx-auto"
                const marginY = this.get('marginY') || "my-auto"
          
                this.addAttributes({
                  class: `${width} ${padding} ${marginX} ${marginY}`,
                  style: `background-color: ${bgColor};`,
                });
        }
    },
    view: {
        onRender() {
          this.el.addEventListener("dblclick", () => {
            this.el.setAttribute("contenteditable", "true");
            this.el.focus();
          });
        },
      },
    })


    // Tailwind Components

    editor.BlockManager.add('tailwind-button',{
        label:` <div class= "flex flex-col item-center text-center gap-2"><i class="fa fa-plus text-4xl text-gray-300 hover:text-gray-100"></i>
        <span style="margin-left: 5px; " class="text-sm font-bold">Button</span> <div>`,
    category: "Tailwind Components",
    content: { type: "tailwind-button" },
    })

    editor.BlockManager.add('tailwind-cards',{
        label : "Cards",
        category : 'Tailwind Components',
        content : `<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>`,
            
    })

    editor.BlockManager.add("tailwind-container", {
        label: "Container",
        category: "Tailwind Components",
        content: {type: "Container"}
      });
}