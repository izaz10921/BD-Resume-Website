import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Home = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_s1ur3ki',         // Replace with your EmailJS service ID
            'template_qxzq5bi',        // Replace with your EmailJS template ID
            form.current,
            '9ySfBognItWWngiVd'             // Replace with your EmailJS user ID (public key)
        ).then((result) => {
            console.log(result.text);
            alert('Message Sent Successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Message Failed to Send. Try again.');
        });

        e.target.reset(); // Clear form after submission
    };



    return (
        <div>

            {/* Navbar section */}
            <div className="navbar bg-base-100" id="navbar-section">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#navbar-section">HOME</a></li>
                            <li><a href="#our-services-section">OUR SERVICES</a></li>
                            <li><a href="#pricing-section">PRICING</a></li>
                            <li><a href="#sample-resume-section">SAMPLE RESUME</a></li>
                            <li><a href="#contact-section">CONTACT</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"></a>
                </div>
                <div className="navbar-center text-xl font-semibold hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#navbar-section">HOME</a></li>
                        <li><a href="#our-services-section">OUR SERVICES</a></li>
                        <li><a href="#pricing-section">PRICING</a></li>
                        <li><a href="#sample-resume-section">SAMPLE RESUME</a></li>
                        <li><a href="#contact-section">CONTACT</a></li>
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>

            <div
                className="hero min-h-[600px] relative"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/gS1Lzj0/rb1.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-full text-left text-white">
                    <div className="">
                        <div className="p-10">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">DIAMOND RESUME WRITING SERVICE</h1>

                        </div>
                    </div>
                </div>
            </div>

            <div className="p-16 text-center text-blue-600 font-semibold text-2xl">
                <p>


                    Are you lost? Are you frustrated while searching for the perfect job? We are a team of dedicated professionals to help you achieve your dream career. We craft your resume based on understanding your background, characteristics, and goals. We do not leave you wondering what to do with your job and career. We put you on the right path.
                </p>
            </div>

            <div className="bg-slate-300">
                <div className="text-center p-10 md:p-20">
                    <h1 className="font-bold text-2xl md:text-4xl">
                        Get our free resume review
                    </h1>
                    <p className="font-medium text-lg md:text-2xl mt-4">
                        Please send your resume to
                    </p>
                    <p className="font-medium text-lg md:text-2xl mt-2">
                        diamond.resume.bd@gmail.com
                    </p>
                </div>
            </div>


            <div className="p-5">
                <h2 className="text-2xl font-bold mb-4">Here's how we do things</h2>
                <div className="w-full max-w-screen-lg mx-auto">
                    <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                        <iframe
                            src="https://drive.google.com/file/d/1QEibG697YDEhcxEO5-OcRVlfQ_kDIkou/preview"
                            title="Video"
                            className="absolute top-0 left-0 w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>

            <div className="p-10 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 ">
                <div className="pb-6">
                    <h1 className="text-red-500 font-bold text-3xl">01</h1>
                    <h1 className="font-bold text-2xl">Tell us about yourself </h1>
                    <p className="text-xl">Complete a quick 5-minute questionnaire <br /> to prepare your future writer.</p>

                </div>
                <div className="pb-6">
                    <h1 className="text-red-500 font-bold text-3xl">02</h1>
                    <h1 className="font-bold text-2xl">Meet your match </h1>
                    <p className="text-xl">We'll match you with the writer best suited to work <br /> with your industry and experience. </p>

                </div>
                <div>
                    <h1 className="text-red-500 font-bold text-3xl">03</h1>
                    <h1 className="font-bold text-2xl">Review first draft</h1>
                    <p className="text-xl">Have notes on the first draft? Send them <br /> to your writer to edit and update.</p>


                </div>
                <div>
                    <h1 className="text-red-500 font-bold text-3xl">04</h1>
                    <h1 className="font-bold text-2xl">Receive your resume </h1>
                    <p className="text-xl">Download your final draft and get ready for <br /> a renewed job search.</p>

                </div>
            </div>

            <div className="pl-20 pr-20 p">
                <div className="pb-6">
                    <h1 className="font-bold text-2xl">1-On-1 Time</h1>
                    <p className="text-xl">Our writers take the necessary time to learn about your career goals and what you'd like to see in your new resume.</p>
                    <p className="text-xl">While other resume services only have you filling out a form, you'll be working directly with our writers. They'll set up an initial consultation with you to discuss your resume concerns and answer any sort of questions you may have.</p>



                </div>
                <div>
                    <h1 className="font-bold text-2xl">Unlimited Revisions</h1>
                    <p className="text-xl">Our writers are here to help every step of the way. Even after you've been sent your new resume, they'll be glad to continue providing revisions and updates to for up to 14 days.</p>

                </div>
            </div>

            {/* Our Services section */}

            <div className="bg-blue-200 py-8 mt-6 " id="our-services-section">
                <h2 className="text-3xl font-bold text-center text-black mb-6">Our Services Includes</h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    <div className="bg-lime-400 rounded-md p-4 text-black text-lg">
                        Professional CV/Resume Writing
                    </div>
                    <div className="bg-lime-400 rounded-md p-4 text-black text-lg">
                        CV/Resume for Study or Job Abroad
                    </div>
                    <div className="bg-lime-400 rounded-md p-4 text-black text-lg">
                        Cover Letter Writing
                    </div>
                    <div className="bg-lime-400 rounded-md p-4 text-black text-lg">
                        Bdjobs Profile Create/Update
                    </div>
                    <div className="bg-lime-400 rounded-md p-4 text-black text-lg">
                        LinkedIn Profile Update/Optimization
                    </div>
                    <div className="bg-lime-400 rounded-md p-4 text-black text-lg">
                        Indeed Profile Update/Optimization
                    </div>
                    <div className="bg-lime-400 rounded-md p-4 text-black text-lg">
                        Recommendation Letter Writing
                    </div>
                </div>
            </div>

            {/* Pricing section */}


            <div className="p-10" id="pricing-section">

                <div><h1 className="font-extrabold text-center text-5xl">Our Pricing <span className="text-red-600 font-semibold text-2xl">for BD</span></h1></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-9 gap-6 justify-items-center">
                    <div>
                        <div className="card bg-teal-300  text-primary-content w-96">
                            <div className="card-body">
                                <h2 className="text-center text-4xl text-black font-bold ">Starter</h2>
                                <h2 className="text-center text-4xl text-black font-bold "><span className="font-semibold text-2xl">BDT</span>750</h2>
                                <h2 className="text-center text-lg text-black font-bold ">(Freshers)</h2>

                                <ul className="text-black list-disc list-inside text-xl px-3 py-4">
                                    <li className="pb-2">Delivery in Word and PDF file</li>
                                    <li className="pb-2">One-on-One Discussion to Understand Career Goals</li>
                                    <li className="pb-2">Professional Content to Grab
                                        Employer's Attention
                                    </li>
                                    <li className="pb-2">Opportunity for Modifications Based on Feedback</li>
                                    <li className="pb-2">5 to 7 Working Days Delivery</li>
                                    <li className="pb-2">90 Days of Career Support</li>
                                    <li className="pb-2">Lifetime Career advice</li>
                                </ul>
                                <div className="card-actions justify-center">
                                    <button className="btn"><a href="#contact-section">Get it</a></button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="card bg-teal-300  text-primary-content w-96">
                            <div className="card-body">
                                <h2 className="text-center text-4xl text-black font-bold ">Premium</h2>
                                <h2 className="text-center text-4xl text-black font-bold "><span className="font-semibold text-2xl">BDT</span>1000</h2>
                                <h2 className="text-center text-lg text-black font-bold ">(Experienced Professionals)</h2>

                                <ul className="text-black list-disc list-inside text-xl px-3 py-4">
                                    <li className="pb-2">Delivery in Word and PDF file</li>
                                    <li className="pb-2">One-on-One Discussion for Tailored Career Guidance</li>
                                    <li className="pb-2">Professionally Tailored Content to Stand Out to Recruiters
                                    </li>
                                    <li className="pb-2">Modification Opportunities Until You're Satisfied</li>
                                    <li className="pb-2">7 to 10 Working Days Delivery</li>
                                    <li className="pb-2">90 Days of Career Support</li>
                                    <li className="pb-2">Lifetime Career advice</li>
                                </ul>
                                <div className="card-actions justify-center">
                                    <button className="btn"><a href="#contact-section">Get it</a></button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="card bg-teal-300  text-primary-content w-96">
                            <div className="card-body">
                                <h2 className="text-center text-4xl text-black font-bold ">Ultimate</h2>
                                <h2 className="text-center text-4xl text-black font-bold "><span className="font-semibold text-2xl">BDT</span>1500</h2>

                                <h2 className="text-center text-lg text-black font-bold ">(International CV or Resume)</h2>



                                <ul className="text-black list-disc list-inside text-xl px-3 py-4">
                                    <li className="pb-2">Delivery in Word and PDF file</li>
                                    <li className="pb-2">One-on-One Career Discussion to Ensure Alignment with Your Goals</li>
                                    <li className="pb-2">Professional Content to grab employer's attention
                                    </li>
                                    <li className="pb-2">Highly Customized Content to Maximize Attention from Employers</li>
                                    <li className="pb-2">Unlimited Modifications to Ensure Complete Satisfaction</li>
                                    <li className="pb-2">10 to 20 Working Days Delivery</li>
                                    <li className="pb-2">90 Days of Career Support</li>
                                    <li className="pb-2">Lifetime Career advice</li>
                                </ul>
                                <div className="card-actions justify-center">
                                    <button className="btn"><a href="#contact-section">Get it</a></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="text-center mt-10">
                <h2 className="text-2xl font-bold mb-4">Additional Services</h2>
                <div className="bg-blue-100 py-6 px-8 rounded-lg inline-block">
                    <ul className="text-left space-y-2">
                        <li>• Cover Letter Writing: Starting from <span className="font-bold">500 BDT</span></li>
                        <li>• Bdjobs Profile Update: Starting from <span className="font-bold">700 BDT</span></li>
                        <li>• LinkedIn Profile Optimization: Starting from <span className="font-bold">1000 BDT</span></li>
                        <li>• Indeed Profile Optimization: Starting from <span className="font-bold">1000 BDT</span></li>
                        <li>• CV/Resume Template: Starting from <span className="font-bold">100 BDT</span> (Editable Word file)</li>
                    </ul>
                </div>
            </div>

            {/* Sample Resumes section */}



            <div className="p-10" id="sample-resume-section">
                <div><h1 className="font-extrabold text-center pb-9 text-5xl">Sample Resumes </h1></div>

                <div className="carousel rounded-box h-[700px]">
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/3drxj13/resu2-1.png"
                            alt="Resume" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/X55W6xK/v1-1.png"
                            alt="Resume" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/Vmtj6rF/v2-1.png"
                            alt="Resume" />
                    </div>

                </div>

            </div>

            <div className="max-w-3xl mx-auto mt-10">
                <h2 className="text-3xl font-bold text-center">Payment and Order System</h2>

                <div className="mt-6 p-4 bg-blue-50 rounded-md">
                    <h3 className="text-lg font-semibold">Share Your Details</h3>
                    <div className="mt-4 space-y-4">
                        {/* Step 1 */}
                        <div>
                            <p className="text-purple-600 font-bold">Step: 1</p>
                            <p>Send your current CV/Resume or provide the necessary information for a new one to <a href="mailto:diamond.resume.bd@gmail.com" className="text-blue-500 underline">diamond.resume.bd@gmail.com</a>.</p>
                        </div>

                        {/* Step 2 */}
                        <div>
                            <p className="text-purple-600 font-bold">Step: 2</p>
                            <p>Choose a design/template from our Template Gallery on the website.</p>
                        </div>

                        {/* Step 3 */}
                        <div>
                            <p className="text-purple-600 font-bold">Step: 3</p>
                            <p>Confirm Your Order with Payment</p>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-left">
                    To confirm your order, please make full advance payment using one of the following methods:
                </p>
            </div>

            <div className="flex justify-center space-x-10 mt-10">
                {/* bKash */}
                <div className="text-center">
                    <img src="https://i.ibb.co.com/cLF1hJg/bkash-2-1.png" alt="bKash" className="h-24 mx-auto" />
                    <p className="mt-4 font-semibold">Send money</p>
                    <p className="font-bold text-lg">01719293666</p>
                </div>

                {/* Nagad */}
                <div className="text-center">
                    <img src="https://i.ibb.co.com/2Knzs8N/nogod-2-1.png" alt="Nagad" className="h-24 mx-auto" />
                    <p className="mt-4 font-semibold">Send money</p>
                    <p className="font-bold text-lg">01719293666</p>
                </div>

                {/* Rocket */}
                <div className="text-center">
                    <img src="https://i.ibb.co.com/ZWxDs3w/roket-logo-1.png" alt="Rocket" className="h-24 mx-auto" />
                    <p className="mt-4 font-semibold">Send money</p>
                    <p className="font-bold text-lg">01719293666</p>
                </div>
            </div>

            {/* Contact section */}




            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8" id="contact-section">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact</h2>

                <div className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-4 text-lg">
                        <div className="flex items-center space-x-4">
                            <span className="text-2xl">📍</span>
                            <p>628 Abbot Ave, Daly City, CA 94014</p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-2xl">📞</span>
                            <p>312-810-5002</p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-2xl">✉️</span>
                            <p>diamond.resume.bd@gmail.com</p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-4 mt-4">
                            <span>👍</span>
                            <a href="https://www.facebook.com/groups/824524496427577/?ref=share&mibextid=S66gvF&_rdr" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co.com/C8RRLhn/download.png" alt="Facebook" className="w-10 h-10" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co.com/VxYcBXc/download-2.png" alt="Twitter" className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co.com/tcVprsv/download-1.png" alt="LinkedIn" className="w-10 h-10" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co.com/CPQQTp6/download-1.jpg" alt="Instagram" className="w-10 h-10" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div >
                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
                            <div>
                                <label className="block text-lg font-medium text-gray-700">Name</label>
                                <input type="text" name="from_name" className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm" required />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-gray-700">Email</label>
                                <input type="email" name="from_email" className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm" required />
                            </div>
                            <div>
                                <label className="block text-lg font-medium text-gray-700">Message</label>
                                <textarea name="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required></textarea>
                            </div>
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="bg-red-500 text-center py-4">
                <p className="text-black font-normal">
                    © 2028 by LLIA Smart Inc
                </p>
            </div>








        </div>
    );
};

export default Home;