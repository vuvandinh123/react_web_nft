import { LoadingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { styled } from 'styled-components';

const LoaderStyled = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items:center;
`

const ImageLoader = (props) => {
  const { src, alt, className } = props;
  const loaderImage = {}
  const [loader, setLoader] = useState(loaderImage[src]);
  const onLoad = () => {
    loaderImage[src] = true;
    setLoader(true);
  }
  return (
    <>
      {
        !loader && (
          <LoaderStyled>
            <LoadingOutlined style={{
              position: 'absolute', margin: 'auto',fontSize: '2.5rem',
            }}/>
          </LoaderStyled>
        )
      }
      <img src={src}
        className={`${className || ""} ${loader ? 'is-img-loaded' : 'is-img-loading'}`}
        onLoad={onLoad}
        alt={alt || ""} />
    </>
  )
}
ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string
}
export default ImageLoader
