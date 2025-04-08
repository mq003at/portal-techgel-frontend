const uiAvatarUrl = 'https://ui-avatars.com/api/?';

const colorString = (color: string) => `&color=${color}`;
const backgroundString = (background: string) => `&background=${background}`;
const nameString = (name: string) => `&name=${name}`;

interface uiAvatarProps {
  color?: string;
  background?: string;
  name: string;
}

export const uiAvatar = ({ color, background, name }: uiAvatarProps) => {
  return `${uiAvatarUrl}${name && nameString(name)}${color && colorString(color)}${
    background && backgroundString(background)
  }`;
};
