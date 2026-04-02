export interface ITextProps {
  text: string;
  style?: object;
  /** Hex color code or color name (e.g., '#FF0000', 'red') */
  textColor?: string;
  /** Positioning of the text within its container.
   *  Options include 'left', 'right', 'center', and 'justify'.
   */
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  /** Enables text shadow with default settings. */
  shadowEnabled?: boolean;
  /** Hex color code or color name for the text shadow (e.g., '#000000', 'black') */
  shadowColor?: string;
  fontFamily?: string;
  /** Font size in pixels.
   * Default is 14 if not specified.
   */
  fontSize?: number;
  letterSpacing?: number;
  marginTop?: number;
  marginBottom?: number;
}
