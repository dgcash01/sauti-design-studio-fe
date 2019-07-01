import { createMuiTheme } from '@material-ui/core/styles'
import styled, { createGlobalStyle, css } from 'styled-components'

export const theme = {
  light: '#f2f5f8',
  dark: '#303030',
  grey: '#454545',
  red: '#e74c3d',
  blue: '#035985',
  yellow: '#ffba29',
  colors: {
    light: '#f2f5f8',
    dark: '#303030',
    grey: '#454545',
    red: '#e74c3d',
    blue: '#035985',
    yellow: '#ffba29',
  },
}

const sizes = {
  phone: 576,
  tablet: 768,
  desktop: 992,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: theme.colors.light,
      main: theme.colors.blue,
      secondary: theme.colors.blue,
      dark: theme.colors.dark,
      contrastText: theme.colors.light,
    },
    secondary: {
      light: theme.colors.light,
      main: theme.colors.dark,
      dark: theme.colors.yellow,
      contrastText: theme.colors.light,
    },
    // error: will use the default color
  },
})

export const GlobalStyle = createGlobalStyle`
a { all: unset; }
a { :hover { cursor: pointer; } }
html {max-width: 100vw;}
html {background: 'black';}
body {width: 100%; min-height: 100%;}
svg {width: auto;}
`

const { light, dark, grey, red, blue, yellow } = theme.colors
export const TreeStyles = styled.div`
  border-radius: 10px;
  border: 2px solid black;
  height: 50vh;
  max-width: 100%;
  margin: 1rem 0;
  background: ${dark};
  /**
 * Extra class applied to VirtualScroll through className prop
 */
  .rst__virtualScrollOverride {
    overflow: auto !important;
  }
  .rst__virtualScrollOverride * {
    box-sizing: border-box;
  }

  .ReactVirtualized__Grid__innerScrollContainer {
    overflow: visible !important;
  }

  .rst__rtl .ReactVirtualized__Grid__innerScrollContainer {
    direction: rtl;
  }

  .ReactVirtualized__Grid {
    outline: none;
  }

  .rst__node {
    min-width: 100%;
    white-space: nowrap;
    position: relative;
    text-align: left;
  }

  .rst__node.rst__rtl {
    text-align: right;
  }

  .rst__nodeContent {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  /* ==========================================================================
   Scaffold

    Line-overlaid blocks used for showing the tree structure
   ========================================================================== */
  .rst__lineBlock,
  .rst__absoluteLineBlock {
    height: 100%;
    position: relative;
    display: inline-block;
  }

  .rst__absoluteLineBlock {
    position: absolute;
    top: 0;
  }

  .rst__lineHalfHorizontalRight::before,
  .rst__lineFullVertical::after,
  .rst__lineHalfVerticalTop::after,
  .rst__lineHalfVerticalBottom::after {
    position: absolute;
    content: '';
    background-color: ${yellow};
  }

  /**
 * +-----+
 * |     |
 * |  +--+
 * |     |
 * +-----+
 */
  .rst__lineHalfHorizontalRight::before {
    height: 1px;
    top: 50%;
    right: 0;
    width: 50%;
  }

  .rst__rtl.rst__lineHalfHorizontalRight::before {
    left: 0;
    right: initial;
  }

  /**
 * +--+--+
 * |  |  |
 * |  |  |
 * |  |  |
 * +--+--+
 */
  .rst__lineFullVertical::after,
  .rst__lineHalfVerticalTop::after,
  .rst__lineHalfVerticalBottom::after {
    width: 1px;
    left: 50%;
    top: 0;
    height: 100%;
  }

  /**
 * +--+--+
 * |  |  |
 * |  |  |
 * |  |  |
 * +--+--+
 */
  .rst__rtl.rst__lineFullVertical::after,
  .rst__rtl.rst__lineHalfVerticalTop::after,
  .rst__rtl.rst__lineHalfVerticalBottom::after {
    right: 50%;
    left: initial;
  }

  /**
 * +-----+
 * |  |  |
 * |  +  |
 * |     |
 * +-----+
 */
  .rst__lineHalfVerticalTop::after {
    height: 50%;
  }

  /**
 * +-----+
 * |     |
 * |  +  |
 * |  |  |
 * +-----+
 */
  .rst__lineHalfVerticalBottom::after {
    top: auto;
    bottom: 0;
    height: 50%;
  }

  /* Highlight line for pointing to dragged row destination
   ========================================================================== */
  /**
 * +--+--+
 * |  |  |
 * |  |  |
 * |  |  |
 * +--+--+
 */
  .rst__highlightLineVertical {
    z-index: 3;
  }
  .rst__highlightLineVertical::before {
    position: absolute;
    content: '';
    background-color: ${blue};
    width: 8px;
    margin-left: -4px;
    left: 50%;
    top: 0;
    height: 100%;
  }

  .rst__rtl.rst__highlightLineVertical::before {
    margin-left: initial;
    margin-right: -4px;
    left: initial;
    right: 50%;
  }

  @keyframes arrow-pulse {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    30% {
      transform: translate(0, 300%);
      opacity: 1;
    }
    70% {
      transform: translate(0, 700%);
      opacity: 1;
    }
    100% {
      transform: translate(0, 1000%);
      opacity: 0;
    }
  }
  .rst__highlightLineVertical::after {
    content: '';
    position: absolute;
    height: 0;
    margin-left: -4px;
    left: 50%;
    top: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid white;
    animation: arrow-pulse 1s infinite linear both;
  }

  .rst__rtl.rst__highlightLineVertical::after {
    margin-left: initial;
    margin-right: -4px;
    right: 50%;
    left: initial;
  }

  /**
 * +-----+
 * |     |
 * |  +--+
 * |  |  |
 * +--+--+
 */
  .rst__highlightTopLeftCorner::before {
    z-index: 3;
    content: '';
    position: absolute;
    border-top: solid 8px ${blue};
    border-left: solid 8px ${blue};
    box-sizing: border-box;
    height: calc(50% + 4px);
    top: 50%;
    margin-top: -4px;
    right: 0;
    width: calc(50% + 4px);
  }

  .rst__rtl.rst__highlightTopLeftCorner::before {
    border-right: solid 8px ${blue};
    border-left: none;
    left: 0;
    right: initial;
  }

  /**
 * +--+--+
 * |  |  |
 * |  |  |
 * |  +->|
 * +-----+
 */
  .rst__highlightBottomLeftCorner {
    z-index: 3;
  }
  .rst__highlightBottomLeftCorner::before {
    content: '';
    position: absolute;
    border-bottom: solid 8px ${blue};
    border-left: solid 8px ${blue};
    box-sizing: border-box;
    height: calc(100% + 4px);
    top: 0;
    right: 12px;
    width: calc(50% - 8px);
  }

  .rst__rtl.rst__highlightBottomLeftCorner::before {
    border-right: solid 8px ${blue}6;
    border-left: none;
    left: 12px;
    right: initial;
  }

  .rst__highlightBottomLeftCorner::after {
    content: '';
    position: absolute;
    height: 0;
    right: 0;
    top: 100%;
    margin-top: -12px;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid ${blue};
  }

  .rst__rtl.rst__highlightBottomLeftCorner::after {
    left: 0;
    right: initial;
    border-right: 12px solid ${blue} 6;
    border-left: none;
  }

  .rst__rowWrapper {
    padding: 10px 10px 10px 0;
    height: 100%;
    box-sizing: border-box;
  }

  .rst__rtl.rst__rowWrapper {
    padding: 10px 0 10px 10px;
  }

  .rst__row {
    height: 100%;
    white-space: nowrap;
    display: flex;
  }
  .rst__row > * {
    box-sizing: border-box;
  }

  /**
 * The outline of where the element will go if dropped, displayed while dragging
 */
  .rst__rowLandingPad,
  .rst__rowCancelPad {
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
  }
  .rst__rowLandingPad > *,
  .rst__rowCancelPad > * {
    opacity: 0 !important;
  }
  .rst__rowLandingPad::before,
  .rst__rowCancelPad::before {
    background-color: lightblue;
    border: 2px solid white;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  /**
 * Alternate appearance of the landing pad when the dragged location is invalid
 */
  .rst__rowCancelPad::before {
    background-color: #e6a8ad;
  }

  /**
 * Nodes matching the search conditions are highlighted
 */
  .rst__rowSearchMatch {
    outline: solid 3px ${blue};
  }

  /**
 * The node that matches the search conditions and is currently focused
 */
  .rst__rowSearchFocus {
    outline: solid 3px ${red};
  }

  .rst__rowContents,
  .rst__rowLabel,
  .rst__rowToolbar,
  .rst__moveHandle,
  .rst__toolbarButton {
    display: inline-block;
    vertical-align: middle;
  }

  .rst__rowContents {
    position: relative;
    height: 100%;
    border: solid #bbb 1px;
    /* border-left: none; */
    box-shadow: 0 2px 2px -2px;
    padding: 0 5px 0 10px;
    border-radius: 2px;
    min-width: 230px;
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  }

  .rst__rtl.rst__rowContents {
    border-right: none;
    border-left: solid #bbb 1px;
    padding: 0 10px 0 5px;
  }

  .rst__rowContentsDragDisabled {
    border-left: solid #bbb 1px;
  }

  .rst__rtl.rst__rowContentsDragDisabled {
    border-right: solid #bbb 1px;
    border-left: solid #bbb 1px;
  }

  .rst__rowLabel {
    flex: 0 1 auto;
    padding-right: 20px;
  }
  .rst__rtl.rst__rowLabel {
    padding-left: 20px;
    padding-right: inherit;
  }

  .rst__rowToolbar {
    flex: 0 1 auto;
    display: flex;
  }

  .rst__moveHandle,
  .rst__loadingHandle {
    height: 100%;
    width: 44px;
    background: ${grey}
      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiI+PGcgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIuOSIgPjxwYXRoIGQ9Ik0xNCAxNS43aDE0LjQiLz48cGF0aCBkPSJNMTQgMjEuNGgxNC40Ii8+PHBhdGggZD0iTTE0IDI3LjFoMTQuNCIvPjwvZz4KPC9zdmc+')
      no-repeat center;
    box-shadow: 0 2px 2px -2px;
    cursor: move;
    margin-right: 0.5rem;
    border-radius: 1px;
    z-index: 1;
  }

  .rst__loadingHandle {
    cursor: default;
    background: #d9d9d9;
  }

  @keyframes pointFade {
    0%,
    19.999%,
    100% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
  }

  .rst__loadingCircle {
    width: 80%;
    height: 80%;
    margin: 10%;
    position: relative;
  }

  .rst__loadingCirclePoint {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .rst__rtl.rst__loadingCirclePoint {
    right: 0;
    left: initial;
  }

  .rst__loadingCirclePoint::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 11%;
    height: 30%;
    background-color: #fff;
    border-radius: 30%;
    animation: pointFade 800ms infinite ease-in-out both;
  }
  .rst__loadingCirclePoint:nth-of-type(1) {
    transform: rotate(0deg);
  }
  .rst__loadingCirclePoint:nth-of-type(7) {
    transform: rotate(180deg);
  }
  .rst__loadingCirclePoint:nth-of-type(1)::before,
  .rst__loadingCirclePoint:nth-of-type(7)::before {
    animation-delay: -800ms;
  }
  .rst__loadingCirclePoint:nth-of-type(2) {
    transform: rotate(30deg);
  }
  .rst__loadingCirclePoint:nth-of-type(8) {
    transform: rotate(210deg);
  }
  .rst__loadingCirclePoint:nth-of-type(2)::before,
  .rst__loadingCirclePoint:nth-of-type(8)::before {
    animation-delay: -666ms;
  }
  .rst__loadingCirclePoint:nth-of-type(3) {
    transform: rotate(60deg);
  }
  .rst__loadingCirclePoint:nth-of-type(9) {
    transform: rotate(240deg);
  }
  .rst__loadingCirclePoint:nth-of-type(3)::before,
  .rst__loadingCirclePoint:nth-of-type(9)::before {
    animation-delay: -533ms;
  }
  .rst__loadingCirclePoint:nth-of-type(4) {
    transform: rotate(90deg);
  }
  .rst__loadingCirclePoint:nth-of-type(10) {
    transform: rotate(270deg);
  }
  .rst__loadingCirclePoint:nth-of-type(4)::before,
  .rst__loadingCirclePoint:nth-of-type(10)::before {
    animation-delay: -400ms;
  }
  .rst__loadingCirclePoint:nth-of-type(5) {
    transform: rotate(120deg);
  }
  .rst__loadingCirclePoint:nth-of-type(11) {
    transform: rotate(300deg);
  }
  .rst__loadingCirclePoint:nth-of-type(5)::before,
  .rst__loadingCirclePoint:nth-of-type(11)::before {
    animation-delay: -266ms;
  }
  .rst__loadingCirclePoint:nth-of-type(6) {
    transform: rotate(150deg);
  }
  .rst__loadingCirclePoint:nth-of-type(12) {
    transform: rotate(330deg);
  }
  .rst__loadingCirclePoint:nth-of-type(6)::before,
  .rst__loadingCirclePoint:nth-of-type(12)::before {
    animation-delay: -133ms;
  }
  .rst__loadingCirclePoint:nth-of-type(7) {
    transform: rotate(180deg);
  }
  .rst__loadingCirclePoint:nth-of-type(13) {
    transform: rotate(360deg);
  }
  .rst__loadingCirclePoint:nth-of-type(7)::before,
  .rst__loadingCirclePoint:nth-of-type(13)::before {
    animation-delay: 0ms;
  }

  .rst__rowTitle {
    font-weight: bold;
  }

  .rst__rowTitleWithSubtitle {
    font-size: 85%;
    display: block;
    height: 0.8rem;
  }

  .rst__rowSubtitle {
    font-size: 70%;
    line-height: 1;
  }

  .rst__collapseButton,
  .rst__expandButton {
    appearance: none;
    border: none;
    position: absolute;
    border-radius: 100%;
    box-shadow: 0 0 0 1px ${blue};
    width: 16px;
    height: 16px;
    padding: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .rst__rtl.rst__collapseButton,
  .rst__rtl.rst__expandButton {
    transform: translate(50%, -50%);
  }
  .rst__collapseButton:focus,
  .rst__expandButton:focus {
    outline: none;
    box-shadow: 0 0 0 1px #000, 0 0 1px 3px ${blue};
  }
  .rst__collapseButton:hover:not(:active),
  .rst__expandButton:hover:not(:active) {
    background-size: 24px;
    height: 20px;
    width: 20px;
  }

  .rst__collapseButton {
    background: ${red}
      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiIGZpbGw9IiNGRkYiLz48ZyBzdHJva2U9IiM5ODk4OTgiIHN0cm9rZS13aWR0aD0iMS45IiA+PHBhdGggZD0iTTQuNSA5aDkiLz48L2c+Cjwvc3ZnPg==')
      no-repeat center;
  }

  .rst__expandButton {
    background: ${light}
      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiIGZpbGw9IiNGRkYiLz48ZyBzdHJva2U9IiM5ODk4OTgiIHN0cm9rZS13aWR0aD0iMS45IiA+PHBhdGggZD0iTTQuNSA5aDkiLz48cGF0aCBkPSJNOSA0LjV2OSIvPjwvZz4KPC9zdmc+')
      no-repeat center;
  }

  /**
 * Line for under a node with children
 */
  .rst__lineChildren {
    height: 100%;
    display: inline-block;
    position: absolute;
  }
  .rst__lineChildren::after {
    content: '';
    position: absolute;
    background-color: ${dark};
    width: 1px;
    left: 50%;
    bottom: 0;
    height: 10px;
  }

  .rst__rtl.rst__lineChildren::after {
    right: 50%;
    left: initial;
  }

  .rst__placeholder {
    position: relative;
    height: 68px;
    max-width: 300px;
    padding: 10px;
  }
  .rst__placeholder,
  .rst__placeholder > * {
    box-sizing: border-box;
  }
  .rst__placeholder::before {
    border: 2px solid ${light};
    content: '';
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    z-index: -1;
  }

  /**
 * The outline of where the element will go if dropped, displayed while dragging
 */
  .rst__placeholderLandingPad,
  .rst__placeholderCancelPad {
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
  }
  .rst__placeholderLandingPad *,
  .rst__placeholderCancelPad * {
    opacity: 0 !important;
  }
  .rst__placeholderLandingPad::before,
  .rst__placeholderCancelPad::before {
    background-color: lightblue;
    border-color: white;
  }

  /**
 * Alternate appearance of the landing pad when the dragged location is invalid
 */
  .rst__placeholderCancelPad::before {
    background-color: #e6a8ad;
  }

  /* Collection default theme */

  .ReactVirtualized__Collection {
  }

  .ReactVirtualized__Collection__innerScrollContainer {
  }

  /* Grid default theme */

  .ReactVirtualized__Grid {
  }

  .ReactVirtualized__Grid__innerScrollContainer {
  }

  /* Table default theme */

  .ReactVirtualized__Table {
  }

  .ReactVirtualized__Table__Grid {
  }

  .ReactVirtualized__Table__headerRow {
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .ReactVirtualized__Table__row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .ReactVirtualized__Table__headerTruncatedText {
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .ReactVirtualized__Table__headerColumn,
  .ReactVirtualized__Table__rowColumn {
    margin-right: 10px;
    min-width: 0px;
  }
  .ReactVirtualized__Table__rowColumn {
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ReactVirtualized__Table__headerColumn:first-of-type,
  .ReactVirtualized__Table__rowColumn:first-of-type {
    margin-left: 10px;
  }
  .ReactVirtualized__Table__sortableHeaderColumn {
    cursor: pointer;
  }

  .ReactVirtualized__Table__sortableHeaderIconContainer {
    display: flex;
    align-items: center;
  }
  .ReactVirtualized__Table__sortableHeaderIcon {
    flex: 0 0 24px;
    height: 1em;
    width: 1em;
    fill: currentColor;
  }

  /* List default theme */

  .ReactVirtualized__List {
  }
`
