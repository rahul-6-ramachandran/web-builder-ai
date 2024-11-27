import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import NavBar from '../Navbar/NavBar'
import PricingCard from '../Pricing/PricingCard'

export default function Home() {


 
    return (
        <>
            <NavBar />
            <div className="h-screen bg-black py-5 text-white">
                <div className="flex flex-col lg:flex-row  justify-between py-3 px-2 mx-auto ">
                    <motion.div
                        variants={fadeIn("right", 0)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}



                        className="flex items-center text-center lg:text-start flex-col bg-gray-50 dark:bg-black rounded-lg p-8 md:p-12 lg:py-40 lg:pl-20 ">
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-medium my-5">From Concept to Clicks: Build Stunning Websites Instantly.</h1>
                        <p className="text-lg w-full lg:text-start  font-semibold text-gray-500 dark:text-gray-400 mb-3">Launch Your Vision. Leave the Hard Work to Us</p>
                        <div className="flex w-full justify-center lg:text-start lg:items-start lg:justify-start py-3">
                            <Link to={'/login'} className="inline-flex  justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Get Started
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div

                        variants={fadeIn("up", 0)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}

                        className="w-full h-full flex  mx-0 items-end text-end justify-center px-0 px-5">
                        <img className="w-4/5 h-4/5 p-2" src="public\images\445285-PF189N-685-Photoroom.png" alt="" />
                    </motion.div>
                </div>
            </div>
            <section id='about' className=' bg-black '>
                <div className=" flex flex-col text-center py-5 text-white px-5">
                    <h2 className="text-gray-900 dark:text-white text-4xl font-medium px-2 ">About Us</h2>
                    <div className="grid md:grid-cols-2  mt-3 gap-8">
                        <motion.div

                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}

                            className="bg-gray-50 dark:bg-black flex flex-col rounded-lg p-8 md:p-8">
                            <div>
                                <a href="#" className="bg-green-100 text-green-800 text-xs w-2/12 font-medium text-center inline-flex justify-center items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                                    </svg>
                                    Design
                                </a>
                            </div>
                            <h2 className="text-gray-900 dark:text-white text-center text-2xl font-medium mb-4 ">Revolutionizing Web Design with AI</h2>
                            <p className="md:text-xl text-lg font-medium text-center text-gray-500 dark:text-gray-400 mb-4">Welcome to <strong className='text-white'>buildUI</strong>, where creativity meets cutting - edge technology. Our AI - powered platform empowers anyone — regardless of technical skill — to create stunning, professional - grade websites effortlessly.
                                .
                                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>

                            </p>

                        </motion.div>


                    </div>
                    <div className="grid md:grid-cols-2 ">
                        <div>

                        </div>
                        <div


                            className="bg-gray-50 dark:bg-black rounded-lg p-8 md:p-8">
                            <motion.div

                                variants={fadeIn("left", 0)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                                    </svg>
                                    Code
                                </a>
                                <h2 className="text-gray-900 dark:text-white text-2xl  font-medium mb-2">Our Mission</h2>
                                <p className="md:text-xl text-xl font-medium   text-gray-500 dark:text-gray-400 mb-4">We believe that every idea deserves a digital home. Whether you're an entrepreneur, a small business owner, or a creative professional, our goal is to make website creation intuitive, accessible, and enjoyable

                                    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline  font-medium text-lg inline-flex items-center"> Read more
                                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </p>
                            </motion.div>

                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 bg:black  gap-8">

                        <motion.div

                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}

                            className="bg-gray-50 dark:bg-black rounded-lg p-8 md:p-8">
                            <a href="#" className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                                </svg>
                                Code
                            </a>
                            <h2 className="text-gray-900 dark:text-white text-2xl  font-medium mb-2">Our Vision for the Future</h2>
                            <p className="md:text-xl  text-lg  font-medium  text-gray-500 dark:text-gray-400 mb-4">At <strong className='text-white'>buildUI</strong>, we're redefining how websites are built. Our platform is not just a tool; it's your creative partner, helping you bring your ideas to life in ways you never thought possible.

                                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline  font-medium text-lg inline-flex items-center"> Read more
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </p>

                        </motion.div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>

            <section id='pricing'  className=' bg-black jumbotron p-4 n'>


            <div className='flex gap-4 justify-between md:p-10 h-screen mt-24'>
           <motion.div  
           className='w-full lg:p-10'
           variants={fadeIn("down", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           
           >
             <PricingCard caption={'Standard Plan'} price={50} features={  ['hellooo','hai','test']}  notAllowed={['Sketch Files','Complete documentation','24×7 phone & email support']}/> 
           </motion.div>

           <motion.div  
           className='w-full lg:p-10'
           variants={fadeIn("down", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           
           >
             <PricingCard  caption={'Premium'} price={144} features={  ['hellooo','hai','test']}  notAllowed={['Sketch Files','Complete documentation','24×7 phone & email support']}/> 
           </motion.div>

           <motion.div  
           className='w-full lg:p-10'
           variants={fadeIn("down", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           
           >
             <PricingCard  caption={'Standard Plan'} price={250} features={  ['hellooo','hai','test1']}  notAllowed={['Sketch Files','Complete documentation','24×7 phone & email support']}/> 
           </motion.div>

           <motion.div  
           className='w-full lg:p-10'
           variants={fadeIn("down", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           
           >
             <PricingCard  caption={'Standard Plan'} price={500} features={  ['hellooo','hai','test2']}  notAllowed={['Sketch Files','Complete documentation','24×7 phone & email support']}/> 
           </motion.div>

           
            </div>
               

            </section>




            <section id='service'
                className="bg-no-repeat bg-cover  bg-center h-screen flex items-center  justify-center text-white"

                style={{ backgroundImage: "url('/images/AdobeStock_216032849_Preview.jpeg')" }}>
                <div className="relative w-full h-full inset-0 bg-black bg-opacity-50">
                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}

                        className=" px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">

                        <h1 className="mb-4 text-xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-4xl">How It Works</h1>
                        <motion.div

                            className='flex flex-col text-center inset-0 bg-black bg-opacity-50 rounded-lg p-5 '>

                            <p className="mb-8 text-lg font-normal text-center text-gray-100 lg:text-2xl sm:px-16 lg:px-48"><strong>Start with a Conversation:</strong>  Share your vision, and our AI will suggest layouts, themes, and content tailored to your needs.</p>
                            <p className="mb-8 text-lg font-normal text-center  text-gray-100 lg:text-2xl sm:px-16 lg:px-48"><strong>  Drag, Drop, and Customize:</strong> Use our simple editor to tweak every element to perfection.</p>
                            <p className="mb-8 text-lg font-normal text-center  text-gray-100 lg:text-2xl sm:px-16 lg:px-48"><strong>Launch with Confidence: </strong>  Publish your site with lightning-fast hosting and optimized performance.</p>
                        </motion.div>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <Link to={'/login'} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Get started
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                            <HashLink to={''} className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                                Learn more
                            </HashLink>
                        </div>
                    </motion.div>

                </div>


            </section>

            <div className='bg-black'>
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}

                    className=" px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">

                    <h1 className="mb-4 text-xl font-medium tracking-tight leading-none text-white md:text-5xl lg:text-3xl">Why Choose  <strong className='text-white'>buildUI</strong> </h1>
                    <motion.div

                        className='flex flex-col text-start inset-0 bg-black  rounded-lg p-5 '>
                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='p-4'
                        >

                            <p className="mb-8 text-lg font-normal text-center text-gray-100 lg:text-xl sm:px-16 lg:px-48"><strong>AI-Driven Simplicity:</strong>  No coding required—our AI handles the heavy lifting so you can focus on your brand..</p></motion.div>
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className='p-4'
                        >  <p className="mb-8 text-lg font-normal text-center  text-gray-100 lg:text-2xl sm:px-16 lg:px-48"><strong>Tailored Designs</strong>  Personalized templates that align with your industry, audience, and goals.</p></motion.div>
                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className='p-4'
                        > <p className="mb-8 text-lg font-normal text-center  text-gray-100 lg:text-2xl sm:px-16 lg:px-48"><strong>Seamless Integration: </strong>Connect your favorite tools, from e-commerce to analytics, in just a few clicks.</p></motion.div>

                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className='p-4'
                        > <p className="mb-8 text-lg font-normal text-center  text-gray-100 lg:text-2xl sm:px-16 lg:px-48"><strong>Always Evolving:  </strong> Our AI learns from user feedback to continuously improve and provide even smarter suggestions.</p></motion.div>

                    </motion.div>


                </motion.div>
            </div>





        </>
    )
}