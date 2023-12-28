import { Parallax } from 'react-parallax';
import Space2 from '../images/image2.jpg'

const ImageTwo = () => (
    <Parallax className='image'  bgImage={Space2}  strength={800}>
        <div className='content'>
            <span className='img-text'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageTwo;