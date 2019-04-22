import { createGlobalStyle } from "styled-components"
import configs from "../../site-config"

export default createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,700);
  html {
    font-size: 62.5%;
    font-family: ${configs.font};
    line-height: 1;
  }

  body {
    font-size: 2rem;
    background-color: ${configs.body_background_color};
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 2rem;
  }

  // Better font rendering
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${configs.body_background_color};
  }

  a:link,
  a:hover,
  a:visited,
  a:active {
    color: ${configs.link_color};
    text-decoration: none;
  }

  // Various resets
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  .imageWrapper {
    // Sets the background image in the header area
    height: 714px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    border-radius: 0px 0px 40px 40px;
  }

  @media only screen and (max-width: 767px) {
    .imageWrapper {
      height: 764px;
    }
  }

  .headerImage {
    position: unset !important;
    height: 0 !important;
    display: block !important;
    
  }
  .headerImage > div{
    padding-bottom: 0 !important;
  }
  .headerImage img {
    z-index: -1;
    border-radius: 0px 0px 40px 40px;
  }

  .headerBackground {
    height: 115px;
    background-color: ${configs.header_background};
  }

  .container {
    // Set up the container for the site content
    display: grid;
    margin: auto;
    max-width: ${configs.content_width};
    padding-left: 15px;
    padding-right: 15px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 115px 876px auto auto;
    grid-column-gap: 30px;
    grid-template-areas:
      "h h h h h h h h h h h h"
      "p p p p p i i i i i i i"
      "c c c c c c c c c c c c"
      "f f f f f f f f f f f f";
  }

  @media only screen and (max-width: 1070px) {
    .container {
      // Set up the container for the site content
      grid-template-rows: 115px 811px auto auto;
    }
  }

  @media only screen and (max-width: 992px) {
    .container {
      grid-column-gap: 0px;
      grid-template-columns: 1;
      grid-template-rows: 115px auto auto auto auto;
      grid-template-areas:
        "h h h h h h h h h h h h"
        "i i i i i i i i i i i i"
        "p p p p p p p p p p p p"
        "c c c c c c c c c c c c"
        "f f f f f f f f f f f f";
    }
  }

  header {
    grid-area: h;
    display: flex;
  }

  .logo {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    height: 115px;
  }

  .logo > p {
    color: ${configs.topbar_title_color};
    display: flex;
    font-weight: bold;
    padding-bottom: 1px;
  }

  .headerIcon {
    width: 50px;
    height: 50px;
    -webkit-clip-path: url(#shape);
    clip-path: url(#shape);
    margin-right: 15px;
  }

  // Navigation Links
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 115px;
  }

  nav > ul {
    color: #fff;
    display: flex;
    list-style-type: none;
  }

  nav > ul li {
    padding-left: 50px;
    text-align: right;
  }

  nav > ul li:first-child {
    padding-left: 0px;
  }

  nav > ul li a:link,
  nav > ul li a:visited {
    text-decoration: none;
    color: rgba(${configs.topbar_title_color}, 0.6);
  }

  nav > ul li a:hover,
  nav > ul li a:active {
    text-decoration: none;
    color: rgba(${configs.topbar_title_color}, 1);
  }

  // App Title, Subtitle, Description and Links

  .appInfo {
    grid-area: i;
    display: flex;
    flex-wrap: wrap;
    padding-top: 140px;
    align-content: flex-start;
  }

  @media only screen and (max-width: 992px) {
    .appInfo {
      padding-top: 50px;
      justify-content: center;
    }
  }

  .appIconShadow {
    display: flex;
    filter: drop-shadow(0px 5px 10px rgba(#000, 0.1)) drop-shadow(0px 1px 1px rgba(#000, 0.2));
  }

  .appIconLarge {
    width: 120px;
    height: 120px;
    -webkit-clip-path: url(#shape120);
    clip-path: url(#shape120);
  }

  .appNameSubtitleContainer {
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-left: 30px;
  }

  .appName {
    color: ${configs.app_title_color};
  }

  .appSubtitle {
    color: ${configs.app_subtitle_color};
    font-weight: normal;
    margin-top: 13px;
  }

  @media only screen and (max-width: 768px) {
    .appNameSubtitleContainer {
      width: 100%;
      margin-left: 0px;
      align-items: center;
      justify-content: center;
    }

    .appName {
      margin-top: 30px;
      text-align: center;
    }

    .appSubtitle {
      margin-top: 13px;
      text-align: center;
    }
  }

  .appDescriptionContainer {
    font-size: 2.5rem;
    font-weight: normal;
    width: 100%;
    align-items: flex-start;
    margin-top: 45px;
    flex: 0 1 auto;
    line-height: 1.5;
  }

  .appDescription {
    color: ${configs.app_description_color};
  }

  @media only screen and (max-width: 992px) {
    .appDescription {
      text-align: center;
    }
  }

  /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
  .flip-card {
    background-color: transparent;
    -webkit-perspective: 1000px;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    width: 80%;
    margin: 3rem auto;
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    height: 160px;
    position: relative;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: -webkit-transform 0.8s;
    transition: transform 0.8s;
    transition: transform 0.8s, -webkit-transform 0.8s;
    width: 100%;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card.flipped .flip-card-inner {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    align-items: center;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    background-color: hsla(0, 0%, 97%, 0.75);
    border-radius: 3px;
    bottom: 0;
    display: flex;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    justify-content: center;
    margin: auto;
    padding: 2rem;
    position: absolute;
    top: 0;
    width: 100%;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
  }

  /* Style the back side */
  .flip-card-back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  .appSignupContainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    text-align: left;
    border-radius: 3px;
  }
  .appSignupForm {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
  .appSignupMessage {
    font-size: 1.5rem;
  }
  .appSignupInput,
  .appSignupSubmitButton {
    box-sizing: border-box;
    font-size: 1.5rem;
    margin: 1rem 0;
    padding: 6px 12px;
    width: 100%;
  }
  .appSignupSubmitButton {
    background-color: hsl(122, 39%, 41%);
    border: none;
    font-weight: bold;
    color: hsl(0, 0%, 97%);
  }

  .downloadButtonsContainer {
    display: inline-block;
    margin-top: 42px;
    filter: drop-shadow(0px 5px 10px rgba(#000, 0.1)) drop-shadow(0px 1px 1px rgba(#000, 0.2));
  }

  @media only screen and (max-width: 992px) {
    .downloadButtonsContainer {
      text-align: center;
    }
  }

  .playStore {
    height: 75px;
    margin-right: 24px;
  }

  @media only screen and (max-width: 992px) {
    .playStore {
      margin-right: 24px;
      margin-bottom: 0px;
    }
  }

  @media only screen and (max-width: 528px) {
    .playStore {
      margin-right: 0px;
      margin-bottom: 24px;
    }
  }

  .appStore {
    height: 75px;
  }

  // iPhone Device Preview

  .iphonePreview {
    grid-area: p;
    background-size: 400px auto;
    background-repeat: no-repeat;
    margin-top: 68px;
  }

  .iphoneScreen {
    width: 349px;
    -webkit-clip-path: url(#screenMask);
    clip-path: url(#screenMask);
    margin-left: 26px;
    margin-top: 23px;
  }

  .videoContainer {
    width: 349px;
    height: 755px;
    -webkit-clip-path: url(#screenMask);
    clip-path: url(#screenMask);
    margin-left: 26px;
    margin-top: 23px;
  }

  .videoContainer > video {
    width: 349px;
    height: 755px;
  }

  @media only screen and (max-width: 1070px) {
    .iphonePreview {
      background-size: 370px auto;
    }

    .iphoneScreen {
      width: 322px;
      margin-left: 24px;
      margin-top: 22px;
    }

    .videoContainer {
      width: 322px;
      height: 698px;
      margin-left: 24px;
      margin-top: 22px;
    }

    .videoContainer > video {
      width: 322px;
      height: 698px;
    }
  }

  @media only screen and (max-width: 992px) {
    .iphonePreview {
      display: flex;
      background-size: 260px auto;
      background-position: center 0;
      margin-top: 47px;
      justify-content: center;
      padding-bottom: 75px;
    }

    .iphoneScreen {
      width: 226px;
      height: 488px;
      -webkit-clip-path: url(#screenMask);
      clip-path: url(#screenMask);
      margin: 0px;
      margin-top: 17px;
    }

    .videoContainer {
      width: 226px;
      height: 488px;
      margin-left: 0px;
      margin-top: 17px;
    }

    .videoContainer > video {
      width: 226px;
      height: 488px;
    }
  }

  // Feature List

  .features {
    grid-area: c;
    display: flex;
    flex: 0 1 auto;
    align-content: flex-start;
    justify-content: flex-start;
    flex-grow: 1;
    flex-wrap: wrap;
    margin-top: 93px;
  }

  .feature {
    display: flex;
    padding-top: 63px;
    padding-left: 15px;
    padding-right: 15px;
    width: calc(100% / 3);
  }

  .feature:nth-child(-n + 3) {
    padding-top: 0px;
  }

  .feature:nth-child(3n) {
    padding-right: 0px;
  }

  .feature:nth-child(3n + 1) {
    padding-left: 0px;
  }

  .iconBack {
    color: ${configs.feature_icons_background_color};
  }

  .iconTop {
    color: ${configs.feature_icons_foreground_color};
  }

  .socialIconBack {
    color: ${configs.social_icons_background_color};
  }

  .socialIconTop {
    color: ${configs.social_icons_foreground_color};
  }

  .featureText {
    margin-left: 18px;
  }

  .featureText > h3 {
    color: ${configs.feature_title_color};
  }

  .featureText > p {
    color: ${configs.feature_text_color};
    margin-top: 8px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 992px) {
    .features {
      flex-grow: 1;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 11px;
    }

    .feature {
      display: flex;
      padding-top: 41px;
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
    }

    .feature:nth-child(-n + 3) {
      padding-top: 41px;
    }

    .feature:nth-child(1) {
      padding-top: 0px;
    }

    .feature:nth-child(3n) {
      padding-right: 15px;
    }

    .feature:nth-child(3n + 1) {
      padding-left: 15px;
    }
  }

  // Footer

  footer {
    grid-area: f;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }

  .footerText {
    color: ${configs.footer_text_color};
    display: block;
    line-height: 1.5;
    width: 100%;
    text-align: center;
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .footerIcons {
    padding-bottom: 70px;
    display: flex;
  }

  @media only screen and (max-width: 992px) {
    .footerText {
      color: ${configs.footer_text_color};
      display: block;
      line-height: 1.5;
      width: 100%;
      text-align: center;
      padding-top: 54px;
      padding-bottom: 61px;
    }

    .footerIcons {
      padding-bottom: 70px;
      display: flex;
    }
  }

  .hidden {
    display: none;
  }


  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
  @media (max-width: 500px) {
    .github-corner:hover .octo-arm {
      animation: none;
    }
    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`
