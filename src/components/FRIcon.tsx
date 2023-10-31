import * as React from "react";
import { iconLibrary } from "./iconLibrary";
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

type IconNameType =
  | "activity"
  | "activityHeart"
  | "archive"
  | "asterisk01"
  | "asterisk02"
  | "atSign"
  | "bookmarkAdd";

type Props = {
  name: IconNameType;
  style?: React.CSSProperties;
};

const FRIcon = ({ name, style }: Props) => {
  const renderPaths = iconLibrary[name]?.paths.map(
    (path: string, index: number) => <path key={index} d={path} />
  );
  const viewBox = iconLibrary[name]?.viewBox;

  return (
    <Svg viewBox={viewBox} fillRule="evenodd" clipRule="evenodd" width="24px">
      {renderPaths}
    </Svg>
  );
};

export default FRIcon;
