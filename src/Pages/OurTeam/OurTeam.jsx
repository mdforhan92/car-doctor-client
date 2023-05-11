import img1 from '../../assets/images/team/1.jpg'
import img2 from '../../assets/images/team/2.jpg'
import img3 from '../../assets/images/team/3.jpg'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";



const OurTeam = () => {
    return (
        <div>
            <div className='text-center mt-10 '>
                <h3 className='font-semibold text-red-600 text-2xl mb-5'>Team</h3>
                <h1 className='text-5xl font-bold'>Meet Our Team</h1>
                <p className='text-base text-[#737373] mt-5 mb-8'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

            </div>

            <div className='grid lg:grid-cols-3 gap-4'>
            <div className="card bg-base-100 shadow-xl">
            <figure className="px-8 ">
                <img src={img1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-semibold">Car Engine Plug</h2>
                <p className='text-[#737373] text-xl'>Engine Expert</p>
                <div className='flex justify-between opacity-80'>
                <FaFacebook className='w-8 h-8 mr-4' />
                <FaTwitter className='w-8 h-8 mr-4' />
                <FaLinkedin className='w-8 h-8 mr-4' />
                <FaInstagramSquare className='w-8 h-8 mr-4' />
                </div>
                
            </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
            <figure className="px-8 ">
                <img src={img2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-semibold">Car Engine Plug</h2>
                <p className='text-[#737373] text-xl'>Engine Expert</p>
                <div className='flex justify-between opacity-80'>
                <FaFacebook className='w-8 h-8 mr-4' />
                <FaTwitter className='w-8 h-8 mr-4' />
                <FaLinkedin className='w-8 h-8 mr-4' />
                <FaInstagramSquare className='w-8 h-8 mr-4' />
                </div>
                
            </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
            <figure className="px-8 ">
                <img src={img3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-semibold">Car Engine Plug</h2>
                <p className='text-[#737373] text-xl'>Engine Expert</p>
                <div className='flex justify-between opacity-80'>
                <FaFacebook className='w-8 h-8 mr-4' />
                <FaTwitter className='w-8 h-8 mr-4' />
                <FaLinkedin className='w-8 h-8 mr-4' />
                <FaInstagramSquare className='w-8 h-8 mr-4' />
                </div>
                
            </div>
        </div>
        </div>
        </div>
    );
};

export default OurTeam;