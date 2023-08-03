

const VideoBanner = () => {
    return (
        <div className='bg-[url(https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg)] h-screen bg-cover' >
            <div className='text-white h-screen grid place-content-center text-center backdrop-brightness-50'>
                <div>
                    <h2 className='text-5xl font-bold mb-5' >Tour of Bengal University</h2>
                    <p className='font-semibold text-2xl w-[60%] mx-auto'>Take a tour in Kingster and you will find the best university in the state. The video will take you to every places in this university.</p>
                </div>
            </div>
        </div>
    );
};

export default VideoBanner;