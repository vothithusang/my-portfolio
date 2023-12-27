import React, { useState } from 'react';
import LoadingImg from 'assets/svg/image-loading.svg';
import DefaultImg from '../../assets/svg/image-default.svg';
import { ImageProps } from '../../@types/image';

const Image = ({ src, alt }: ImageProps) => {
    const [isLoading, setIsLoading] = useState(true);

    function handleImageLoaded() {
        setIsLoading(false);
    }
    const imgUrl = src ?? DefaultImg;
    return (
        <>
            {isLoading && (
                <div className='flex items-center justify-center w-full' >
                    <img className='img-loading' alt={alt} width="50px !important" src={LoadingImg} loading="lazy" />
                </div>
            )}
            <img
                className="custom-img app-img"
                alt={alt}
                src={imgUrl}
                loading="lazy"
                onLoad={handleImageLoaded}
                onError={event => {
                    if (event.currentTarget.src.includes('http://ec2-18-142-247-64.ap-southeast-1.compute.amazonaws.com:8080'))
                        return;
                    event.currentTarget.src = DefaultImg;
                }}
                style={{ opacity: isLoading ? 0 : 1 }}
            />
        </>
    );
};

export default React.memo(Image);
