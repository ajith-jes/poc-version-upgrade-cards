
import React, { useMemo } from 'react';
import { Colors } from '../Colors/index.interface';

import { AvatarProps } from './index.interface';


/**
 * Primary UI component for user interaction
 */
export const Avatar = ({
  alt = "avatar",
  src,
  fab = true,
  size,
  text, color = Colors.DEFAULT, 
  className, imageClass, textClass,
  style, imageStyle, textStyle,
}: AvatarProps) => {

  const circle = useMemo(() => fab ? 'bst-avatar--circle' : '', [fab])

  const textOnly = useMemo(() => !!text ? 'bst-avatar--text-only' : '', [text])


  const parentClass = useMemo(() => {
    const res = [
      'bst-avatar', 'relative', 'inline-flex', 
      'justify-center', 'items-center', 'overflow-hidden', 
      circle, textOnly, className
    ].map((e) => String(e)).join(" ")
    return res
  }, [circle])

  const changeText = useMemo(() => {
    return String(text).toUpperCase().split(" ").map((e) => e[0]).join("")
  }, [text])
  const render = () =>
  (
    <span 
    data-testid="avatar"
      style={{
        height: `${size * 4}px`,
        width: `${size * 4}px`,
        backgroundColor: !!color ? color : "inherit",
        ...style
      }}
    className={`${parentClass}`}>
      {
      !!src ? <img 
      style={imageStyle}
      height={`${size*4}px`}
      width={`${size*4}px`}
      className={`bst-avatar__image ${imageClass}`}
      src={src} alt={alt} />
      : <span 
      className={`bst-avatar__text ${textClass}`}
      style={textStyle}
      >{changeText}</span> }
    </span>
  );
  return render();
};
