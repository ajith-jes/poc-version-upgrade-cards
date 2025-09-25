import { Colors } from "../Colors/index.interface"

export interface AvatarProps {
  /**
   * avatar will be circle if it is true if not then it will have square share
   */
  fab?: boolean
  /**
   * text which display on avatar if image fails to load
   */
  alt?: string
  /**
   * image source
   */
  src?: string
  /**
   * text display on icon
   */
  text?: string
  /**
   * avatar size, this will be 
   */
  size: number
  /**
   * color for text background
   */
  color?: Colors
  /**
   * class applied to text
   */
  textClass?: string
  /**
   * class applied to image
   */
  imageClass?: string
  /**
   * class applied to parent element
   */
  className?: string
  /**
   * style applied to text
   */
  style?: React.CSSProperties | undefined
  /**
   * style applied to image
   */
  imageStyle?: React.CSSProperties | undefined
  /**
   * class applied to parent element
   */
  textStyle?: React.CSSProperties | undefined
  /**
   * to capture click event
   */
  onClick?: () => void
}