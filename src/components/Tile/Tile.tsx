import { FC } from "react";
import { getTileProperties } from "@/utils/getTileProperies";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import {
  StyledDescription,
  StyledStickyWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTileWrapper
} from "./styles";
import { TileProps } from "./types";

const Tile: FC<TileProps> = ({ row, data, zoom }) => {
  const { date } = useCalendar();
  const datesRange = getDatesRange(date, zoom);
  const { y, x, width } = getTileProperties(
    row,
    datesRange.startDate,
    data.startDate,
    data.endDate,
    zoom
  );
  return (
    <StyledTileWrapper
      style={{
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: `${data.bgColor}`,
        width: `${width}px`
      }}>
      <StyledTextWrapper>
        <StyledStickyWrapper>
          <StyledText style={{ fontWeight: "600" }}>{data.title}</StyledText>
          <StyledText>{data.subtitle}</StyledText>
          <StyledDescription>{data.description}</StyledDescription>
        </StyledStickyWrapper>
      </StyledTextWrapper>
    </StyledTileWrapper>
  );
};

export default Tile;
