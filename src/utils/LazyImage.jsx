import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function LazyImage(props) {
    return (
        <LazyLoadImage
            src={props.src}
            effect="blur"
            height={props.height}
            delayTime="10000"
            // visibleByDefault="false"
            className='relative z-[10]'
        />
    )
}