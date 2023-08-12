import { extendTheme } from '@chakra-ui/react';

// Create a theme instance.
const theme = extendTheme({
 
components: {
  Button: { baseStyle: {_focus: { boxShadow: 'none'}}},
  Scrollbar: {
    // Adjust the width of the scrollbar
    baseStyle: {
      width: '10px', // Change this value as needed
    },
  },
},
textStyles: {
  text: {
    _selection:{
      background: '#474747',
      color: '#FFFFFF'
    }
  }
},


});

export default theme;