export default function Prompt() {
    return (
        <>
            <div className="w-3/5 ">



                <form className="w-full ">
                    <div className="mb-4 border-2 border-transparent  bg-white rounded-lg text-white bg-gradient-to-r from-blue-900 via-gray-900 to-slate-950 hover:bg-gradient-to-br   rounded-lg  bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="border-2 border-transparent  bg-white rounded-lg text-white bg-gradient-to-r from-blue-900 via-gray-900 to-slate-950 hover:bg-gradient-to-br    dark:bg-gray-800">
                            <label htmlFor="editor" className="sr-only">Publish post</label>
                            <textarea id="editor" rows={8} className="focus:ring-0 italic  resize-none focus:outline-none block font-light text-xl w-full p-4 text-sm text-gray-800  dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" placeholder="Tell us about your idea" required ></textarea>
                        </div>
                        <div className="items-end text-end m-4">
                        <button type="submit" className="inline-flex  items-center px-5 py-2.5 text-sm font-medium text-center text-gray-500 rounded-lg md:hover:text-blue-700  md:dark:hover:text-gray-100 dark: text-gray-400 hover:bg-zinc-800 dark:hover:bg-gray-800 bg-zinc-900   focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Generate
                        </button>
                        </div>
                    </div>
                   
                </form>
            </div>


        </>
    )
}