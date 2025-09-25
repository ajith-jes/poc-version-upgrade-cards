
import React, { FC, useEffect, useState } from 'react';

import { ImagePreviewProps } from './index.interface';
import { CloseModel, Model } from '../Model';

/**
 * Primary UI component for user interaction
 */
const Img = ({ src, setModel }: { src: string, setModel: (val: boolean) => void }) => {
    const [width, setWidth] = useState(800)
    const [height, setHeight] = useState(600)
    useEffect(() => {
        if (!!window) {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
    }, [])
    return (
        <div style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: `${width - 50}px`,
            height: `${height - 50}px`,
        }}>
            <CloseModel close={setModel} />
        </div>
    )
}


export const ImagePreview: FC<ImagePreviewProps> = (_props) => {
    return <Model model={_props.model} close={_props.setModel} >
        <Img src={_props.dataUrl} setModel={_props.setModel} />
    </Model>
}