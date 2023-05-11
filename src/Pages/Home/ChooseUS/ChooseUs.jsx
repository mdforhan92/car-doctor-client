import icon1 from '../../../assets/icons/group.svg'
import icon2 from '../../../assets/icons/check.svg'
import icon3 from '../../../assets/icons/deliveryt.svg'
import icon4 from '../../../assets/icons/person.svg'
import icon6 from '../../../assets/icons/Wrench.svg'

const ChooseUs = () => {
    return (
        <div>
            <div className='text-center mt-10 '>
                <h3 className='font-semibold text-red-600 text-2xl mb-5'>Core Feature</h3>
                <h1 className='text-5xl font-bold'>Why Choose Us </h1>
                <p className='text-base text-[#737373] mt-5 mb-8'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

            </div>
            <div className='grid grid-cols-5 gap-4'>
            <div className='hover:bg-orange-600 text-center p-5 rounded-xl hover:scale-105 transition-all duration-300'>
                <img className='mx-auto' src={icon1} alt="" />
                <p>Expert Team</p>
            </div>
            <div className='hover:bg-orange-600 text-center p-5 rounded-xl hover:scale-105 transition-all duration-300'>
                <img className='mx-auto' src={icon3} alt="" />
                <p>Timely Delivery</p>
            </div>
            <div className='hover:bg-orange-600 text-center p-5 rounded-xl hover:scale-105 transition-all duration-300'>
                <img className='mx-auto' src={icon2} alt="" />
                <p>24/7 Support</p>
            </div>
            <div className='hover:bg-orange-600 text-center p-5 rounded-xl hover:scale-105 transition-all duration-300'>
                <img className='mx-auto' src={icon4} alt="" />
                <p>Best Equipment</p>
            </div>
            <div className='hover:bg-orange-600 text-center p-5 rounded-xl hover:scale-105 transition-all duration-300'>
                <img className='mx-auto' src={icon6} alt="" />
                <p>100% Guranty </p>
            </div>
        </div>
        </div>
    );
};

export default ChooseUs;