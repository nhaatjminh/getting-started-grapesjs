import 'grapesjs/dist/css/grapes.min.css';
import React, {useEffect} from 'react';
import grapesjs from 'grapesjs';
import DynamicConfig from './config';
import './index.css';

const Grape = () => {
    useEffect(() => {
        loadGrapejJs()
    }, [])

    const loadGrapejJs = async () => {
        const editor = await grapesjs.init(DynamicConfig())
    }

    return(
        <div id='gjs'>
            <h1>Hello world Component</h1>
        </div>
    )
}

export default Grape;