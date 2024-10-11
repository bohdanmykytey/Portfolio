import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import images from './images'
import styles from './custom-box.styles.css'

const ImageStack: React.FC = () => {
  return (
    <Box sx={{ width: `${styles.customBox}`, height: 800, overflowY: 'scroll'}}>
      <ImageList variant="masonry" cols={3} gap={5}>
        {images.map((image) => (
          <ImageListItem key={image.img}>
            <img
              srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${image.img}?w=248&fit=crop&auto=format`}
              alt={image.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={image.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ImageStack;