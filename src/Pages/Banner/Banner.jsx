import banner1 from '../../../src/assets/images/banner/1.jpg'
import banner2 from '../../../src/assets/images/banner/2.jpg'
import banner3 from '../../../src/assets/images/banner/3.jpg'
import banner4 from '../../../src/assets/images/banner/4.jpg'
import banner5 from '../../../src/assets/images/banner/5.jpg'
import banner6 from '../../../src/assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn hover:bg-yellow-600 btn-circle mr-6">❮</a>
                    <a href="#slide2" className="btn hover:bg-yellow-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn hover:bg-yellow-600 btn-circle mr-6">❮</a>
                    <a href="#slide3" className="btn hover:bg-yellow-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn hover:bg-yellow-600 btn-circle mr-6">❮</a>
                    <a href="#slide4" className="btn hover:bg-yellow-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn hover:bg-yellow-600 btn-circle mr-6">❮</a>
                    <a href="#slide5" className="btn hover:bg-yellow-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn hover:bg-yellow-600 btn-circle mr-6">❮</a>
                    <a href="#slide6" className="btn hover:bg-yellow-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn hover:bg-yellow-600 btn-circle mr-6">❮</a>
                    <a href="#slide1" className="btn hover:bg-yellow-600 btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;