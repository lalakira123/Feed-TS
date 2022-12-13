import { ImgHTMLAttributes } from 'react';
import style from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder, ...props }: AvatarProps) {
	return(
		<img 
      className={ hasBorder ? style.avatar : style.avatarWithoutBorder }
      {...props}
    />
	);
}