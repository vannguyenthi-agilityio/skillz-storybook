import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'regularFont';
        font-display: swap;
        src: url('/assets/fonts/HelveticaNeue.woff2') format('woff2'), url('/assets/fonts/HelveticaNeue.woff') format('woff'), url('/assets/fonts/HelveticaNeue.ttf') format('ttf');
      }
      @font-face {
        font-family: 'boldFont';
        font-display: swap;
        src: url('/assets/fonts/HelveticaNeue-Bold.woff2') format('woff2'), url('/assets/fonts/HelveticaNeue-Bold.woff') format('woff'), url('/assets/fonts/HelveticaNeue-Bold.ttf') format('ttf');
      }
    `}
  />
);
export default Fonts;
