declare type InlineStyle = {
  alignContent?: string,
  alignItems?: string,
  alignSelf?: string,
  all?: string,
  animation?: string,
  animationDelay?: string,
  animationDirection?: string,
  animationDuration?: string,
  animationFillMode?: string,
  animationIterationCount?: string | number,
  animationName?: string,
  animationPlayState?: string,
  animationTimingFunction?: string,
  backfaceVisibility?: string,
  background?: string,
  backgroundAttachment?: string,
  backgroundBlendMode?: string,
  backgroundClip?: string,
  backgroundColor?: string,
  backgroundImage?: string,
  backgroundOrigin?: string,
  backgroundPosition?: string,
  backgroundRepeat?: string,
  backgroundSize?: string,
  blockSize?: string | number,
  border?: string,
  borderBlockEnd?: string,
  borderBlockEndColor?: string,
  borderBlockEndStyle?: string,
  borderBlockEndWidth?: string | number,
  borderBlockStart?: string,
  borderBlockStartColor?: string,
  borderBlockStartStyle?: string,
  borderBlockStartWidth?: string | number,
  borderBottom?: string | number,
  borderBottomColor?: string,
  borderBottomLeftRadius?: string | number,
  borderBottomRightRadius?: string | number,
  borderBottomStyle?: string,
  borderBottomWidth?: string | number,
  borderCollapse?: string,
  borderColor?: string,
  borderImage?: string,
  borderImageOutset?: string,
  borderImageRepeat?: string,
  borderImageSlice?: string,
  borderImageSource?: string,
  borderImageWidth?: string | number,
  borderInlineEnd?: string,
  borderInlineEndColor?: string,
  borderInlineEndStyle?: string,
  borderInlineEndWidth?: string | number,
  borderInlineStart?: string,
  borderInlineStartColor?: string,
  borderInlineStartStyle?: string,
  borderInlineStartWidth?: string | number,
  borderLeft?: string | number,
  borderLeftColor?: string,
  borderLeftStyle?: string,
  borderLeftWidth?: string | number,
  borderRadius?: string | number,
  borderRight?: string | number,
  borderRightColor?: string,
  borderRightStyle?: string,
  borderRightWidth?: string | number,
  borderSpacing?: string,
  borderStyle?: string,
  borderTop?: string | number,
  borderTopColor?: string,
  borderTopLeftRadius?: string | number,
  borderTopRightRadius?: string | number,
  borderTopStyle?: string,
  borderTopWidth?: string | number,
  borderWidth?: string | number,
  bottom?: string | number,
  boxDecorationBreak?: string,
  boxFlex?: string | number,
  boxFlexGroup?: string | number,
  boxOrdinalGroup?: string | number,
  boxShadow?: string,
  boxSizing?: string,
  breakAfter?: string,
  breakBefore?: string,
  breakInside?: string,
  captionSide?: string,
  clear?: string,
  clip?: string,
  clipPath?: string,
  color?: string,
  columnCount?: string | number,
  columnFill?: string,
  columnGap?: string,
  columnRule?: string,
  columnRuleColor?: string,
  columnRuleStyle?: string,
  columnRuleWidth?: string | number,
  columnSpan?: string,
  columnWidth?: string | number,
  columns?: string,
  content?: string,
  counterIncrement?: string,
  counterReset?: string,
  cursor?: string,
  direction?: string,
  display?: string,
  emptyCells?: string,
  filter?: string,
  fillOpacity?: string | number,
  flex?: string | number,
  flexBasis?: string,
  flexDirection?: string,
  flexFlow?: string,
  flexGrow?: string | number,
  flexNegative?: string | number,
  flexOrder?: string | number,
  flexPositive?: string | number,
  flexShrink?: string | number,
  flexWrap?: string,
  float?: string,
  font?: string,
  fontFamily?: string,
  fontFeatureSettings?: string,
  fontKerning?: string,
  fontLanguageOverride?: string,
  fontSize?: string | number,
  fontSizeAdjust?: string,
  fontStretch?: string,
  fontStyle?: string,
  fontSynthesis?: string,
  fontVariant?: string,
  fontVariantAlternates?: string,
  fontVariantCaps?: string,
  fontVariantEastAsian?: string,
  fontVariantLigatures?: string,
  fontVariantNumeric?: string,
  fontVariantPosition?: string,
  fontWeight?: string | number,
  grid?: string,
  gridArea?: string,
  gridAutoColumns?: string,
  gridAutoFlow?: string,
  gridAutoRows?: string,
  gridColumn?: string,
  gridColumnEnd?: string,
  gridColumnGap?: string,
  gridColumnStart?: string,
  gridGap?: string,
  gridRow?: string,
  gridRowEnd?: string,
  gridRowGap?: string,
  gridRowStart?: string,
  gridTemplate?: string,
  gridTemplateAreas?: string,
  gridTemplateColumns?: string,
  gridTemplateRows?: string,
  height?: string | number,
  hyphens?: string,
  imageOrientation?: string,
  imageRendering?: string,
  imageResolution?: string,
  imeMode?: string,
  inherit?: string,
  initial?: string,
  inlineSize?: string,
  isolation?: string,
  justifyContent?: string,
  left?: string | number,
  letterSpacing?: string,
  lineBreak?: string,
  lineClamp?: string | number,
  lineHeight?: string | number,
  listStyle?: string,
  listStyleImage?: string,
  listStylePosition?: string,
  listStyleType?: string,
  margin?: string | number,
  marginBlockEnd?: string,
  marginBlockStart?: string,
  marginBottom?: string | number,
  marginInlineEnd?: string,
  marginInlineStart?: string,
  marginLeft?: string | number,
  marginRight?: string | number,
  marginTop?: string | number,
  mask?: string,
  maskClip?: string,
  maskComposite?: string,
  maskImage?: string,
  maskMode?: string,
  maskOrigin?: string,
  maskPosition?: string,
  maskRepeat?: string,
  maskSize?: string,
  maskType?: string,
  maxBlockSize?: string,
  maxHeight?: string | number,
  maxInlineSize?: string,
  maxWidth?: string | number,
  minBlockSize?: string,
  minHeight?: string | number,
  minInlineSize?: string,
  minWidth?: string | number,
  mixBlendMode?: string,
  objectFit?: string,
  objectPosition?: string,
  offsetBlockEnd?: string,
  offsetBlockStart?: string,
  offsetInlineEnd?: string,
  offsetInlineStart?: string,
  opacity?: string | number,
  order?: string | number,
  orphans?: string | number,
  outline?: string,
  outlineColor?: string,
  outlineOffset?: string,
  outlineStyle?: string,
  outlineWidth?: string | number,
  overflow?: string,
  overflowWrap?: string,
  overflowX?: string,
  overflowY?: string,
  padding?: string | number,
  paddingBlockEnd?: string,
  paddingBlockStart?: string,
  paddingBottom?: string | number,
  paddingInlineEnd?: string,
  paddingInlineStart?: string,
  paddingLeft?: string | number,
  paddingRight?: string | number,
  paddingTop?: string | number,
  pageBreakAfter?: string,
  pageBreakBefore?: string,
  pageBreakInside?: string,
  perspective?: string,
  perspectiveOrigin?: string,
  pointerEvents?: string,
  position?: string,
  quotes?: string,
  resize?: string,
  revert?: string,
  right?: string | number,
  rubyAlign?: string,
  rubyMerge?: string,
  rubyPosition?: string,
  scrollBehavior?: string,
  scrollSnapCoordinate?: string,
  scrollSnapDestination?: string,
  scrollSnapType?: string,
  shapeImageThreshold?: string,
  shapeMargin?: string,
  shapeOutside?: string,
  stopOpacity?: string | number,
  strokeDashoffset?: string | number,
  strokeOpacity?: string | number,
  strokeWidth?: string | number,
  tabSize?: string | number,
  tableLayout?: string,
  textAlign?: string,
  textAlignLast?: string,
  textCombineUpright?: string,
  textDecoration?: string,
  textDecorationColor?: string,
  textDecorationLine?: string,
  textDecorationStyle?: string,
  textEmphasis?: string,
  textEmphasisColor?: string,
  textEmphasisPosition?: string,
  textEmphasisStyle?: string,
  textIndent?: string,
  textOrientation?: string,
  textOverflow?: string,
  textRendering?: string,
  textShadow?: string,
  textTransform?: string,
  textUnderlinePosition?: string,
  top?: string | number,
  touchAction?: string,
  transform?: string,
  transformBox?: string,
  transformOrigin?: string,
  transformStyle?: string,
  transition?: string,
  transitionDelay?: string,
  transitionDuration?: string,
  transitionProperty?: string,
  transitionTimingFunction?: string,
  unicodeBidi?: string,
  userSelect?: string,
  verticalAlign?: string | number,
  visibility?: string,
  whiteSpace?: string,
  widows?: string | number,
  width?: string | number,
  willChange?: string,
  wordBreak?: string,
  wordSpacing?: string,
  wordWrap?: string,
  writingMode?: string,
  zIndex?: string | number,
  zoom?: string | number,

  // Hack of the century : https://github.com/facebook/flow/issues/1280
  [key: string]: void
};
