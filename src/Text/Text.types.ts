export interface ITextProps {
  title: string;
  style?: object;
  textColor?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  shadowEnabled?: boolean;
  fontFamily?: string;
  fontSize?: number;
  letterSpacing?: number;
}
