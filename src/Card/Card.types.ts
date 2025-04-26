export interface ICardProps {
  /**
   * Enable to use a Divider between title and description
   * @default true
   */
  hasDivider?: boolean;
  buttonEnabled?: boolean;
  buttonText?: string | undefined;
  buttonOnPress?: () => void;
  children?: React.ReactNode;
  titleFontFamily?: string;
  titleFontSize?: number;
  descriptionFontSize?: number;
  descriptionFontFamily?: string;
  title?: string;
  description?: string;
  image?: string;
  width?: number | string;
  height?: number | string;
}
