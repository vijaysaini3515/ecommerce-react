import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWindowWidth } from '../../features/windowSlice/windowSlice';

const WindowListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    // Set initial width
    dispatch(setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return null; // This component doesn't render anything
};

export default WindowListener;