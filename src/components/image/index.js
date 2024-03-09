import { useState, forwardRef } from 'react';
import images from '~/assets/images/no-image.png';
import styles from './Image.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImages);
    };
    return (
        <img
            className={classNames(styles.wrapper,className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
