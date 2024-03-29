import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import BgImage from './assets/img/bg.jpg';
const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color:#fff;
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  body{
    -webkit-overflow-scrolling: touch;

    margin:0 auto;
    min-height:100vh;
    position: relative;
  }
  #root{
    min-height:100vh;
    overflow:hidden;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image:url(${BgImage});
  }

  @media screen and (min-width: 320px){
      html {
          font-size: 14px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 16px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 22px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 24px;
      }
  }
`;

export default GlobalStyle;
