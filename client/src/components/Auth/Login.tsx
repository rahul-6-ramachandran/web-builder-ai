import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import { useState } from 'react'
import { CreateUser } from '../../types.dto'
import { Link, useNavigate } from 'react-router-dom'
import { signIn, } from '../../actions/Auth/Auth'

// @ts-ignore
import { onError, onSuccess } from '../Notifications/Notify'

export default function Login(){
    
    const navigate = useNavigate()

    const [user,setUser] = useState<CreateUser>({
        email: '',
        password: ''
    })
    const [error,setError] = useState('') 

    const [loading,setLoading] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async(e:any)=>{
       
        e.preventDefault()
        // console.log(user,"uswe")
        setLoading(true)
        if(user.password.length < 6){
            setError("Password Must be 6 characters long")
            setLoading(false)
            return;
        }
        setError("")
        try {
            
            const res= await signIn(user)
            if(res?.userDetails){
                onSuccess("Login Successful")
               navigate(`/${res.userDetails._id}`)
                }
        
           

        } catch (error:any) {
            onError("Something Went Wrong")
            console.error(error.message);
        }
            
           
        
       
    }
return (
<>



<div 



className='flex items-center mt-0 h-screen   '
>
<motion.div
variants={fadeIn("up", 0.3)}
initial="hidden"
whileInView={"show"}
viewport={{ once: false, amount: 0.7 }}
 className="flex w-full max-w-sm mx-auto  bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
    <div className="hidden  bg-cover lg:block lg:w-1/2" style={{backgroundImage: "url('images/4827591.jpg')"}} ></div>

    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src="/images/Untitled design (1) (1).png" alt="" />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
        </p>
        <form onSubmit={ handleSubmit}>

        <a href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 hover:bg-gray-200 hover:text-black">
            <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                </svg>
            </div>

            <span className="w-5/6  py-3 font-bold text-center">Sign in with Google</span>
        </a>

        <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <div className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 ">or login
                with email</div>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
            <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" 
            type="email"
            onChange={onChange}
            value={user.email}
            name='email'
             
            
            />
        </div>

        <div className="mt-4">
            <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
            </div>

            <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
             type="password"
             value={user.password}
             onChange={onChange}
             name='password'
              />
                {error && (
  <span className="text-sm text-red-500 mt-1">{error}</span>
)}
        </div>

        
        <div className="mt-6">
            <button type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-200 hover:text-black focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
               {

                !loading ? ('Sign In')  : (
                    <div role="status">
                    <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
                )
               }
               
            </button>
        </div>
        </form>

        <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link to={'/signup'} className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
    </div>
</motion.div>

</div>
</>
)
}