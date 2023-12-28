import { Parallax } from 'react-parallax';
import Nasa from '../images/image1.jpg'

const ImageOne = () => (
    <Parallax className='image'  bgImage={Nasa}  strength={800}>
        <div className='content'>
            <span className='img-text'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne;