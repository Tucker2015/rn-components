export interface ICardProps {
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
