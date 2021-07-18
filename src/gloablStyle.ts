import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HD Harmony';
    src: url('/fonts/HDharmony/Hdharmony-Bold.ttf');
    font-weight: 700;
  }
  @font-face {
    font-family: 'HD Harmony';
    src: url('/fonts/HDharmony/Hdharmony-Light.ttf');
    font-weight: 400;
  }
  @font-face {
    font-family: 'HD Harmony';
    src: url('/fonts/HDharmony/Hdharmony-Medium.ttf');
    font-weight: 500;
  }
  @font-face {
    font-family: 'NotoSans';
    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-Bold.otf');
    font-weight: 700;
  }
  @font-face {
    font-family: 'NotoSans';
    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-Light.otf');
    font-weight: 300;
  }
  @font-face {
    font-family: 'NotoSans';
    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-Medium.otf');
    font-weight: 500;
  }
  @font-face {
    font-family: 'NotoSans';
    src: url('/fonts/NotoSansCJKkr/NotoSansCJKkr-Regular.otf');
    font-weight: 400;
  }

  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html, body {
    font-family: 'HD Harmony';
  }
  div, p, ul, ol, li {
    box-sizing: border-box;
  }
  /* Typography */
  .header-1 {
    font-size: 46px;
    font-weight: 700;
    color: #000000;
  }
  .header-2 {
    font-size: 46px;
    font-weight: 400;
    color: #000000;
  }
  .header-3 {
    font-size: 36px;
    font-weight: 400;
    color: #000000;
  }
  .header-4 {
    font-size: 24px;
    font-weight: 500;
    color: #000000;
  }
  .header-5 {
    font-size: 18px;
    font-weight: 500;
    color: #000000;
  }
  .header-6 {
    font-size: 18px;
    font-weight: 500;
    color: #000000;
  }
  .subtitle-1 {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
  }
  .subtitle-2 {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
  }
  .body-1 {
    font-size: 20px;
    font-weight: 400;
    color: #000000;
  }
  .body-2 {
    font-family: 'NotoSans';
    font-size: 16px;
    font-weight: 400;
    color: #000000;
  }
  .body-3 {
    font-family: 'NotoSans';
    font-size: 14px;
    font-weight: 400;
    color: #000000;
  }
`;

export default GlobalStyle;
