import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark" className='carusel'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/side-view-smiley-woman-with-earphones_23-2149429040.jpg?t=st=1731569287~exp=1731572887~hmac=219becc433741a0629ec6d0d445634e9150e31147cea4fbf271f5b431ded70e2&w=1380"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/full-shot-smiley-woman-posing-studio_23-2149429026.jpg?t=st=1731569344~exp=1731572944~hmac=329c4392f35bb3c2ff4b489189ebe3c3b90e28940d099a7c5b6fcdc7576262e1&w=1380"
                    alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-photo/full-shot-woman-posing-studio_23-2149429047.jpg?t=st=1731569364~exp=1731572964~hmac=4bcf5bea07b91d4927ab37ea7cfeccb7f5d625796b37b6fe7e569f0ca5f6386e&w=1380"
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;