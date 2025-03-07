import { Link, useParams } from "react-router-dom";

export default function EditorSidebar(){
	const {id} = useParams()
    return(
        <>
        
        
       



   <div className="h-full w-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black">
      <ul className="space-y-2 font-medium py-3">
      <li className="space-y-2 font-medium py-3">
            <Link to={`/${id}`} className="flex items-center p-2 text-gray-900 rounded-lg md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white hover:bg-zinc-800 dark:hover:bg-gray-800 group">
<i className="fa fa-home"> </i>
            </Link>
         </li>

         <li className="space-y-2 font-medium py-3">
            <Link to={`/${id}/projects`} className="flex items-center p-2 text-gray-900 rounded-lg md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white hover:bg-zinc-800 dark:hover:bg-gray-800 group">
            <svg fill="#9CA3AF" className="w-5 h-5 text-2xl text-gray-900 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3,20V10H8V21H4A1,1,0,0,1,3,20ZM21,4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V8H21ZM20,21a1,1,0,0,0,1-1V10H10V21Z"/></svg>
              
            </Link>
         </li>
         <li className="space-y-2 font-medium py-3">
            <Link to="/live" className="flex items-center p-2 text-gray-900 rounded-lg  md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group">
               
               <svg fill="#9CA3AF" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400  group-hover:text-gray-900 dark:group-hover:text-white"  height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 472.615 472.615" xmlSpace="preserve">
<g>
	<g>
		<path d="M246.164,10.516v117.458c29.941-1.279,58.783-8.32,85.349-20.641C312.004,53.742,280.997,16.496,246.164,10.516z"/>
	</g>
</g>
<g>
	<g>
		<path d="M76.202,62.203c14.116,14.087,29.857,25.894,46.654,35.65c15.827-42.792,38.936-75.698,66.378-93.405
			C146.157,13.148,107.336,33.558,76.202,62.203z"/>
	</g>
</g>
<g>
	<g>
		<path d="M283.379,4.449c27.44,17.705,50.549,50.61,66.377,93.399c16.801-9.756,32.555-21.541,46.674-35.627
			C365.292,33.567,326.466,13.15,283.379,4.449z"/>
	</g>
</g>
<g>
	<g>
		<path d="M119.803,246.165c0.832,35.723,6.162,69.593,14.883,99.503c28.599-12.958,59.622-20.358,91.765-21.614v-77.889H119.803z"
			/>
	</g>
</g>
<g>
	<g>
		<path d="M140.898,364.737c19.496,53.883,50.598,91.361,85.552,97.363V344.008C196.425,345.288,167.515,352.359,140.898,364.737z"
			/>
	</g>
</g>
<g>
	<g>
		<path d="M410.372,76.163c-16.336,16.303-34.586,29.978-54.2,40.932c9.732,32.468,15.524,69.566,16.352,109.355h100.091
			C470.24,168.558,447.081,116.041,410.372,76.163z"/>
	</g>
</g>
<g>
	<g>
		<path d="M62.248,76.155C25.536,116.037,2.376,168.554,0,226.451h100.089c0.828-39.785,6.62-76.884,16.351-109.348
			C96.827,106.147,78.587,92.461,62.248,76.155z"/>
	</g>
</g>
<g>
	<g>
		<path d="M134.854,126.386c-8.818,30.049-14.213,64.117-15.051,100.064h106.648v-78.525
			C194.373,146.672,163.408,139.297,134.854,126.386z"/>
	</g>
</g>
<g>
	<g>
		<path d="M141.098,107.338c26.563,12.32,55.404,19.357,85.352,20.635V10.516C191.615,16.497,160.607,53.745,141.098,107.338z"/>
	</g>
</g>
<g>
	<g>
		<path d="M100.089,246.165H0C2.369,303.899,25.399,356.29,61.934,396.13c16.37-16.398,34.663-30.148,54.336-41.157
			C106.638,322.639,100.912,285.728,100.089,246.165z"/>
	</g>
</g>
<g>
	<g>
		<path d="M372.524,246.165c-0.823,39.566-6.55,76.477-16.183,108.814c19.619,10.978,37.874,24.675,54.207,41.007l0.148,0.121
			c36.511-39.836,59.551-92.221,61.92-149.942H372.524z"/>
	</g>
</g>
<g>
	<g>
		<path d="M396.611,409.924c-14.111-14.109-29.87-25.905-46.67-35.682c-15.832,43.041-39.01,76.148-66.562,93.925
			c43.243-8.733,82.206-29.258,113.391-58.077L396.611,409.924z"/>
	</g>
</g>
<g>
	<g>
		<path d="M337.76,126.383c-28.558,12.913-59.526,20.289-91.596,21.542v78.525H352.81
			C351.972,190.502,346.579,156.434,337.76,126.383z"/>
	</g>
</g>
<g>
	<g>
		<path d="M122.67,374.236c-16.859,9.812-32.662,21.67-46.811,35.849c31.193,28.815,70.136,49.351,113.375,58.082
			C161.682,450.39,138.503,417.28,122.67,374.236z"/>
	</g>
</g>
<g>
	<g>
		<path d="M246.164,344.007V462.1c34.952-6.002,66.053-43.477,85.549-97.359C305.093,352.363,276.182,345.288,246.164,344.007z"/>
	</g>
</g>
<g>
	<g>
		<path d="M246.164,246.165v77.889c32.133,1.256,63.161,8.658,91.764,21.617c8.721-29.913,14.05-63.782,14.882-99.506H246.164z"/>
	</g>
</g>
</svg>

              
            </Link>
         </li>
         <li className="space-y-2 font-medium py-3">
            <Link to="/templates" className="flex items-center  md:hover:text-blue-700  md:dark:hover:text-blue-500 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group">
              
               <svg fill="#9CA3AF" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
	 width="800px" height="800px" viewBox="0 0 300 300"
	 >
<g>
	<g>
		<path d="M263.029,0H13.226C5.921,0,0.006,5.924,0.006,13.22v249.814c0,7.302,5.915,13.223,13.22,13.223h249.803
			c7.302,0,13.222-5.933,13.222-13.223V13.229C276.25,5.93,270.331,0,263.029,0z M249.806,26.454v33.885H26.452V26.454H249.806z"/>
		<rect x="34.342" y="35.438" width="19.843" height="19.843"/>
		<rect x="64.096" y="35.438" width="19.843" height="19.843"/>
		<rect x="93.849" y="35.438" width="19.843" height="19.843"/>
	</g>
</g>
</svg>


            </Link>
         </li>
         <li className="space-y-2 font-medium py-3">
            <Link to="/pricing" className="flex items-center  md:hover:text-blue-700  md:dark:hover:text-blue-500 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group">
               
               <svg width="800px" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.27259 4.13189 7.25637 5.15147 7.25179 6.02566C5.22954 6.09171 4.01536 6.32778 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34314 22 6.22876 22 9.99998 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.9846 6.32778 18.7705 6.09171 16.7482 6.02566C16.7436 5.15147 16.7274 4.13189 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25ZM15.2479 6.00188C15.2434 5.15523 15.229 4.24407 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.771 4.24407 8.75661 5.15523 8.75208 6.00188C9.1435 6 9.55885 6 10 6H14C14.4412 6 14.8565 6 15.2479 6.00188ZM12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V10.0102C13.8388 10.2845 14.75 11.143 14.75 12.3333C14.75 12.7475 14.4142 13.0833 14 13.0833C13.5858 13.0833 13.25 12.7475 13.25 12.3333C13.25 11.9493 12.8242 11.4167 12 11.4167C11.1758 11.4167 10.75 11.9493 10.75 12.3333C10.75 12.7174 11.1758 13.25 12 13.25C13.3849 13.25 14.75 14.2098 14.75 15.6667C14.75 16.857 13.8388 17.7155 12.75 17.9898V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.9898C10.1612 17.7155 9.25 16.857 9.25 15.6667C9.25 15.2525 9.58579 14.9167 10 14.9167C10.4142 14.9167 10.75 15.2525 10.75 15.6667C10.75 16.0507 11.1758 16.5833 12 16.5833C12.8242 16.5833 13.25 16.0507 13.25 15.6667C13.25 15.2826 12.8242 14.75 12 14.75C10.6151 14.75 9.25 13.7903 9.25 12.3333C9.25 11.143 10.1612 10.2845 11.25 10.0102V10C11.25 9.58579 11.5858 9.25 12 9.25Z" fill="#9CA3AF"/> </g>

</svg>

            </Link>
         </li>
         <li className="space-y-2 font-medium py-3">
            <Link to="/products" className="flex items-center  md:hover:text-blue-700  md:dark:hover:text-blue-500 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>

            </Link>
         </li>
         {/* <li>
            <Link to="#" className="flex items-center p-2 text-gray-900  md:hover:text-red-700  md:dark:hover:text-red-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
            </Link>
         </li> */}
         {/* <li>
            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </Link>
         </li> */}
      </ul>
   </div>



        </>
    )
}