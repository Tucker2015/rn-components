export interface ICardProps {
  /**
   * Enable to use a Divider between title and description
   * @default true
   */
  hasDivider?: boolean;
  buttonEnabled?: boolean;
  buttonText?: string | undefined;
  buttonTextColor?: string;
  buttonBackgroundColor?: string;
  buttonOnPress?: () => void;
  backgroundColor?: string;
  children?: React.ReactNode;
  titleFontFamily?: string;
  titleFontSize?: number;
  titleTextColor?: string;
  descriptionFontSize?: number;
  descriptionFontFamily?: string;
  descriptionTextColor?: string;
  title?: string;
  description?: string;
  image?: string;
  width?: number | string;
  height?: number | string;
}
