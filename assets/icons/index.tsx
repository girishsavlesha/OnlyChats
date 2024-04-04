import Svg, {Circle, Path, SvgProps} from 'react-native-svg';
import React from 'react';

export const BackArrow: React.FunctionComponent<SvgProps> = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M15 18L9 12 15 6" />
    </Svg>
  );
};

export const MoreVertical: React.FunctionComponent<SvgProps> = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Circle cx={12} cy={12} r={1} />
      <Circle cx={12} cy={5} r={1} />
      <Circle cx={12} cy={19} r={1} />
    </Svg>
  );
};

export const Search: React.FunctionComponent<SvgProps> = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21L16.65 16.65" />
    </Svg>
  );
};

export const ArrowUp: React.FunctionComponent<SvgProps> = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M12 19L12 5" />
      <Path d="M5 12L12 5 19 12" />
    </Svg>
  );
};
