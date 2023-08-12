import { Flex } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        },
        { threshold: 0.5 } // Adjust the threshold as needed
      );

      observer.observe(videoElement);

      return () => {
        observer.unobserve(videoElement);
      };
    }
  }, []);

  return (
    <Flex w="full" h="99vh" justify="center" px="30px" mt={-10}>
      <video ref={videoRef} src="/walking.mp4" loop muted>
        Your browser does not support the video tag.
      </video>
    </Flex>
  );
};

export default VideoSection;
