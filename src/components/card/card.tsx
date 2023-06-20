import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../card/card.css'

const Card = () => {
    return (
       <div className='con-card'>
         <div className='container-card'>
            <div className="card-container">
                <div className="image-container">
                    <div className="heading">Rp 375.000</div>
                    <img src='/images/dokter.webp' alt="/" />
                </div>
                <div className="card-title">
                    <h3 className='text'>Pelatihan 1</h3>
                </div>
                <div className="card-body">
                    <p className='text'>
                        <a href="/">Berisi penjelasan disini... </a>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="btn">
                <button className="button"><a href="/payment">Pesan Sekarang</a></button>
                </div>
            </div>
            <div className="card-container">
                <div className="image-container">
                    <div className="heading">Rp 375.000</div>
                    <img src='/images/dokter.webp' alt="/" />
                </div>
                <div className="card-title">
                    <h3 className='text'>Pelatihan 2</h3>
                </div>
                <div className="card-body">
                    <p className='text'>
                        <a href="/">Berisi penjelasan disini... </a>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="btn">
                <button className="button"><a href="/payment">Pesan Sekarang</a></button>
                </div>
            </div>
            <div className="card-container">
                <div className="image-container">
                    <div className="heading">Rp 375.000</div>
                    <img src='/images/dokter.webp' alt="/" />
                </div>
                <div className="card-title">
                    <h3 className='text'>Pelatihan 3</h3>
                </div>
                <div className="card-body">
                    <p className='text'>
                        <a href="/">Berisi penjelasan disini... </a>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="btn">
                <button className="button"><a href="/payment">Pesan Sekarang</a></button>
                </div>
            </div>
            <div className="card-container">
                <div className="image-container">
                    <div className="heading">Rp 375.000</div>
                    <img src='/images/dokter.webp' alt="/" />
                </div>
                <div className="card-title">
                    <h3 className='text'>Pelatihan 4</h3>
                </div>
                <div className="card-body">
                    <p className='text'>
                        <a href="/">Berisi penjelasan disini... </a>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="btn">
                    <button className="button"><a href="/payment">Pesan Sekarang</a></button>
                </div>
            </div>
        </div>
       </div>
    );
};

const Founding = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? <ImageSlider /> : <Card />;
};

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="container-slider">
            <Slider {...settings}>
                <div className='p-14'>
                <div className="rounded-md shadow-[0px_0px_10px_-5px]">
                    <div className="overflow-hidden h-[200px] rounded-md">
                        <div className="absolute object-cover mt-[105px] ml-[190px] 
                        rounded-md bg-white py-2 px-6 font-bold text-[#002157]">
                            Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="p-2 ml-3 -mt-10 font-bold text-[20px] text-[#002157] ">
                        <h3>Pelatihan 1</h3>
                    </div>
                    <div className="pt-0 p-5 text-[16px]">
                        <p>
                            <a href="/" className='text-[#074288] hover:text-[#002157]'>Berisi penjelasan disini... </a>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="p-4">
                        <button className="bg-[#002157] hover:bg-[#286cdb] text-white font-bold py-4 px-[80px] rounded-lg">
                            <a href="/payment">Pesan Sekarang</a></button>
                    </div>
                </div>
                </div>
                <div className='p-14'>
                <div className="rounded-md shadow-[0px_0px_10px_-5px]">
                    <div className="overflow-hidden h-[200px] rounded-md">
                        <div className="absolute object-cover mt-[105px] ml-[190px] 
                        rounded-md bg-white py-2 px-6 font-bold text-[#002157]">
                            Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="p-2 ml-3 -mt-10 font-bold text-[20px] text-[#002157] ">
                        <h3>Pelatihan 2</h3>
                    </div>
                    <div className="pt-0 p-5 text-[16px]">
                        <p>
                            <a href="/" className='text-[#074288] hover:text-[#002157]'>Berisi penjelasan disini... </a>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="p-4">
                        <button className="bg-[#002157] hover:bg-[#286cdb] text-white font-bold py-4 px-[80px] rounded-lg">
                            <a href="/payment">Pesan Sekarang</a></button>
                    </div>
                </div>
                </div>
                <div className='p-14'>
                <div className="rounded-md shadow-[0px_0px_10px_-5px]">
                    <div className="overflow-hidden h-[200px] rounded-md">
                        <div className="absolute object-cover mt-[105px] ml-[190px] 
                        rounded-md bg-white py-2 px-6 font-bold text-[#002157]">
                            Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="p-2 ml-3 -mt-10 font-bold text-[20px] text-[#002157] ">
                        <h3>Pelatihan 3</h3>
                    </div>
                    <div className="pt-0 p-5 text-[16px]">
                        <p>
                            <a href="/" className='text-[#074288] hover:text-[#002157]'>Berisi penjelasan disini... </a>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="p-4">
                        <button className="bg-[#002157] hover:bg-[#286cdb] text-white font-bold py-4 px-[80px] rounded-lg">
                            <a href="/payment">Pesan Sekarang</a></button>
                    </div>
                </div>
                </div>
                <div className='p-14'>
                <div className="rounded-md shadow-[0px_0px_10px_-5px]">
                    <div className="overflow-hidden h-[200px] rounded-md">
                        <div className="absolute object-cover mt-[105px] ml-[190px] 
                        rounded-md bg-white py-2 px-6 font-bold text-[#002157]">
                            Rp 375.000</div>
                        <img src='/images/dokter.webp' alt="/" />
                    </div>
                    <div className="p-2 ml-3 -mt-10 font-bold text-[20px] text-[#002157] ">
                        <h3>Pelatihan 4</h3>
                    </div>
                    <div className="pt-0 p-5 text-[16px]">
                        <p>
                            <a href="/" className='text-[#074288] hover:text-[#002157]'>Berisi penjelasan disini... </a>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="p-4">
                        <button className="bg-[#002157] hover:bg-[#286cdb] text-white font-bold py-4 px-[80px] rounded-lg">
                            <a href="/payment">Pesan Sekarang</a></button>
                    </div>
                </div>
                </div>
            </Slider>
        </div>
    );
};

export default Founding;