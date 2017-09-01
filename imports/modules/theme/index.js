import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import color from 'color';

// 1. Colors
const primaryColor = '#2b0202';
const primaryColorLight = color(primaryColor).lighten(0.15); // lighten($primary-color, 15%) !default;
const primaryColorDark = color(primaryColor).darken(0.15); // darken($primary-color, 15%) !default;

const secondaryColor = '#000000'; // color("teal", "lighten-1") !default;
const successColor = color('green'); // color("green", "base") !default;
const errorColor = color('red'); // color("red", "base") !default;
// const linkColor = ''; // color("light-blue", "darken-1") !default;


// // 2. Badges
// $badge-bg-color: $secondary-color !default;
// $badge-height: 22px !default;
//
//
// // 3. Buttons
// // Shared styles
// $button-border: none !default;
// $button-background-focus: lighten($secondary-color, 4%) !default;
// $button-font-size: 1rem !default;
// $button-icon-font-size: 1.3rem !default;
// $button-height: 36px !default;
// $button-padding: 0 2rem !default;
// $button-radius: 2px !default;
//
// // Disabled styles
// $button-disabled-background: #DFDFDF !default;
// $button-disabled-color: #9F9F9F !default;
//
// // Raised buttons
// $button-raised-background: $secondary-color !default;
// $button-raised-background-hover: lighten($button-raised-background, 5%) !default;
// $button-raised-color: #fff !default;
//
// // Large buttons
// $button-large-icon-font-size: 1.6rem !default;
// $button-large-height: $button-height * 1.5 !default;
//
// // Flat buttons
// $button-flat-color: #343434 !default;
// $button-flat-disabled-color: lighten(#999, 10%) !default;
//
// // Floating buttons
// $button-floating-background: $secondary-color !default;
// $button-floating-background-hover: $button-floating-background !default;
// $button-floating-color: #fff !default;
// $button-floating-size: 40px !default;
// $button-floating-large-size: 56px !default;
// $button-floating-radius: 50% !default;
//
//
// // 4. Cards
// $card-padding: 24px !default;
// $card-bg-color: #fff !default;
// $card-link-color: color("orange", "accent-2") !default;
// $card-link-color-light: lighten($card-link-color, 20%) !default;
//
//
// // 5. Carousel
// $carousel-height: 400px !default;
// $carousel-item-height: $carousel-height / 2 !default;
// $carousel-item-width: $carousel-item-height !default;
//
//
// // 6. Collapsible
// $collapsible-height: 3rem !default;
// $collapsible-line-height: $collapsible-height !default;
// $collapsible-header-color: #fff !default;
// $collapsible-border-color: #ddd !default;
//
//
// // 7. Chips
// $chip-bg-color: #e4e4e4 !default;
// $chip-border-color: #9e9e9e !default;
// $chip-selected-color: #26a69a !default;
// $chip-margin: 5px !default;
//
//
// // 8. Date + Time Picker
// $datepicker-display-font-size: 2.8rem;
// $datepicker-weekday-color: rgba(0, 0, 0, .87) !default;
// $datepicker-weekday-bg: darken($secondary-color, 7%) !default;
// $datepicker-date-bg: $secondary-color !default;
// $datepicker-year: rgba(255, 255, 255, .7) !default;
// $datepicker-focus: rgba(0,0,0, .05) !default;
// $datepicker-selected: $secondary-color !default;
// $datepicker-selected-outfocus: desaturate(lighten($secondary-color, 35%), 15%) !default;
//
// $timepicker-clock-color: rgba(0, 0, 0, .87) !default;
// $timepicker-clock-plate-bg: #eee;
//
//
// // 9. Dropdown
// $dropdown-bg-color: #fff !default;
// $dropdown-hover-bg-color: #eee !default;
// $dropdown-color: $secondary-color !default;
// $dropdown-item-height: 50px !default;
//
//
// // 10. Fonts
// $roboto-font-path: "../fonts/roboto/" !default;
//
//
// // 11. Forms
// // Text Inputs + Textarea
// $input-height: 3rem !default;
// $input-border-color: color("grey", "base") !default;
// $input-border: 1px solid $input-border-color !default;
// $input-background: #fff !default;
// $input-error-color: $error-color !default;
// $input-success-color: $success-color !default;
// $input-focus-color: $secondary-color !default;
// $input-font-size: 1rem !default;
// $input-margin-bottom: 20px;
// $input-margin: 0 0 $input-margin-bottom 0 !default;
// $input-padding: 0 !default;
// $input-transition: all .3s !default;
// $label-font-size: .8rem !default;
// $input-disabled-color: rgba(0,0,0, .42) !default;
// $input-disabled-solid-color: #949494 !default;
// $input-disabled-border: 1px dotted $input-disabled-color !default;
// $input-invalid-border: 1px solid $input-error-color !default;
// $placeholder-text-color: lighten($input-border-color, 20%) !default;
//
// // Radio Buttons
// $radio-fill-color: $secondary-color !default;
// $radio-empty-color: #5a5a5a !default;
// $radio-border: 2px solid $radio-fill-color !default;
//
// // Range
// $range-height: 14px !default;
// $range-width: 14px !default;
// $track-height: 3px !default;
//
// // Select
// $select-border: 1px solid #f2f2f2 !default;
// $select-background: rgba(255, 255, 255, 0.90) !default;
// $select-focus: 1px solid lighten($secondary-color, 47%) !default;
// $select-option-hover: rgba(0,0,0,.06) !default;
// $select-option-focus: rgba(0,0,0,.03) !default;
// $select-padding: 5px !default;
// $select-radius: 2px !default;
// $select-disabled-color: rgba(0,0,0,.3) !default;
//
// // Switches
// $switch-bg-color: $secondary-color !default;
// $switch-checked-lever-bg: desaturate(lighten($switch-bg-color, 25%), 25%) !default;
// $switch-unchecked-bg: #F1F1F1 !default;
// $switch-unchecked-lever-bg: rgba(0,0,0,.38) !default;
// $switch-radius: 15px !default;
//
//
// // 12. Global
// // Media Query Ranges
// $small-screen-up: 601px !default;
// $medium-screen-up: 993px !default;
// $large-screen-up: 1201px !default;
// $small-screen: 600px !default;
// $medium-screen: 992px !default;
// $large-screen: 1200px !default;
//
// $medium-and-up: "only screen and (min-width : #{$small-screen-up})" !default;
// $large-and-up: "only screen and (min-width : #{$medium-screen-up})" !default;
// $extra-large-and-up: "only screen and (min-width : #{$large-screen-up})" !default;
// $small-and-down: "only screen and (max-width : #{$small-screen})" !default;
// $medium-and-down: "only screen and (max-width : #{$medium-screen})" !default;
// $medium-only: "only screen and (min-width : #{$small-screen-up}) and (max-width : #{$medium-screen})" !default;
//
//
// // 13. Grid
// $num-cols: 12 !default;
// $gutter-width: 1.5rem !default;
// $element-top-margin: $gutter-width/3 !default;
// $element-bottom-margin: ($gutter-width*2)/3 !default;

// 14. Header
const headerHeight = '64px'; // 64px !default;
const headerLineHeight = headerHeight; // $navbar-height !default;
const headerHeightMobile = '56px'; // 56px !default;
const headerLineHeightMobile = headerHeightMobile; // $navbar-height-mobile !default;
const headerFontSize = '1rem'; // 1rem !default;
const headerFontColor = '#FFF'; // #fff !default;
const headerBgColor = primaryColor;
const headerBrandFontSize = '2.1rem'; // 2.1rem !default;
//
// // 15. Side Navigation
// $sidenav-font-size: 14px !default;
// $sidenav-font-color: rgba(0,0,0,.87) !default;
// $sidenav-bg-color: #fff !default;
// $sidenav-padding: 16px !default;
// $sidenav-item-height: 48px !default;
// $sidenav-line-height: $sidenav-item-height !default;
//
//
// // 16. Photo Slider
// $slider-bg-color: color('grey', 'base') !default;
// $slider-bg-color-light: color('grey', 'lighten-2') !default;
// $slider-indicator-color: color('green', 'base') !default;
//
//
// // 17. Spinners | Loaders
// $spinner-default-color: $secondary-color !default;
//
//
// // 18. Tabs
// $tabs-underline-color: $primary-color-light !default;
// $tabs-text-color: $primary-color !default;
// $tabs-bg-color: #fff !default;
//
//
// // 19. Tables
// $table-border-color: #d0d0d0 !default;
// $table-striped-color: #f2f2f2 !default;
//
//
// // 20. Toasts
// $toast-height: 48px !default;
// $toast-color: #323232 !default;
// $toast-text-color: #fff !default;
// $toast-action-color: #eeff41;

// 21. Typography
// const offBlack = 'rgba(0, 0, 0, 0.87)';
const h1FontSize = '4.2rem';
const h2FontSize = '3.56rem';
const h3FontSize = '2.92rem';
const h4FontSize = '2.28rem';
const h5FontSize = '1.64rem';
const h6FontSize = '1rem';

// 22. Footer
const footerFontColor = '#FFF'; // #fff !default;
const footerBgColor = primaryColor; // $primaryColor !default;
const footerCopyrightFontColor = 'rgba(255,255,255,.8)'; // rgba(255,255,255,.8) !default;
const footerCopyrightBgColor = 'rgba(51,51,51,.08)'; // rgba(51,51,51,.08) !default;


// // 23. Flow Text
// $range : $large-screen - $small-screen !default;
// $intervals: 20 !default;
// $interval-size: $range / $intervals !default;
//
//
// // 24. Collections
// $collection-border-color: #e0e0e0 !default;
// $collection-bg-color: #fff !default;
// $collection-active-bg-color: $secondary-color !default;
// $collection-active-color: lighten($secondary-color, 55%) !default;
// $collection-hover-bg-color: #ddd !default;
// $collection-link-color: $secondary-color !default;
// $collection-line-height: 1.5rem !default;
//
//
// // 25. Progress Bar
// $progress-bar-color: $secondary-color !default;

const mediaQuery = {
  xxs: '480',
  xs: '600',
  sm: '840',
  md: '960',
  lg: '1280',
  xl: '1440',
  xxl: '1600',
};

// const color = {
//   black: '#000000',
//   white: '#FFFFFF',
// };

// const headerFontColor = '#333';
const headerFontFamily = 'Roboto';
const paragraphFontColor = '#333';
const paragraphFontFamily = 'Roboto Slab';

const theme = {
  primaryColor,
  primaryColorLight,
  primaryColorDark,
  headerFontFamily,
  paragraphFontColor,
  paragraphFontFamily,
  mediaQuery,

  // typography
  h1FontSize,
  h2FontSize,
  h3FontSize,
  h4FontSize,
  h5FontSize,
  h6FontSize,
  // header
  headerFontColor,
  headerBgColor,
  headerHeight,
  headerLineHeight,
  headerHeightMobile,
  headerLineHeightMobile,
  headerFontSize,
  headerBrandFontSize,
  // footer
  footerFontColor,
  footerBgColor,
  footerCopyrightFontColor,
  footerCopyrightBgColor,
};

export const ThemeWrap = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);

export const InjectStyle = injectGlobal`
  #app
  {
    width: 100%;
    height: 100%;
    width: 100vw;
    height: 100vh;
  }
`;
