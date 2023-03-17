import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'primaryFont';
        font-display: swap;
        font-style: normal;
        src: local('Helvetica Neue'), url('https://fonts.cdnfonts.com/s/14188/HelveticaNeue-LightExt.woff') format('woff');
      }
      @font-face {
        font-family: 'boldFont';
        font-display: swap;
        src: url('/assets/fonts/HelveticaNeue-Bold.woff2') format('woff2'), url('/assets/fonts/HelveticaNeue-Bold.woff') format('woff'), url('/assets/fonts/HelveticaNeue-Bold.ttf') format('ttf');
      }
      @font-face {
        font-family: 'mediumFont';
        font-display: swap;
        src: url('/assets/fonts/HelveticaNeue-Medium.woff2') format('woff2'), url('/assets/fonts/HelveticaNeue-Medium.woff') format('woff'), url('/assets/fonts/HelveticaNeue-Medium.ttf') format('ttf');
      }
    `}
  />
);
export default Fonts;
