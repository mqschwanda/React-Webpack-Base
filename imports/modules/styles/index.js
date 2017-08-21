import { injectGlobal } from 'styled-components';

export default injectGlobal`
  @font-face {
    font-family:'Futura';
    src: url('/fonts/FuturaStd-CondensedBold_gdi.eot');
    src: url('/fonts/FuturaStd-CondensedBold_gdi.eot?#iefix') format('embedded-opentype'),
      url('/fonts/FuturaStd-CondensedBold_gdi.woff') format('woff'),
      url('/fonts/FuturaStd-CondensedBold_gdi.ttf') format('truetype'),
      url('/fonts/FuturaStd-CondensedBold_gdi.otf') format('opentype'),
      url('/fonts/FuturaStd-CondensedBold_gdi.svg#FuturaStd-CondensedBold') format('svg');
    font-weight: 700;
    font-style: normal;
    font-stretch: condensed;
    unicode-range: U+0020-00FE;
  }
  @font-face {
    font-family:'Copyright';
    src: url('/fonts/MHelMed.otf') format('opentype'),
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    unicode-range: U+0020-00FE;
  }

  #app
  {
    height: 100%;
  }
`;
