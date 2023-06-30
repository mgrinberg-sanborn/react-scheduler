import styled from "styled-components";
import { leftColumnWidth, tileHeight } from "@/constants";

const marginPaddingReset = `
margin: 0;
padding: 0;
`;

const truncate = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;

export const StyledTileWrapper = styled.button`
  padding: 10px 16px;
  height: ${tileHeight}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: white;
  width: 100%;
  cursor: pointer;
`;

export const StyledTextWrapper = styled.div`
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`;

export const StyledText = styled.p`
  ${marginPaddingReset}
  ${truncate}
  display: inline;
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`;

export const StyledDescription = styled.p`
  ${marginPaddingReset}
  ${truncate}
`;

export const StyledStickyWrapper = styled.div`
  position: sticky;
  left: ${leftColumnWidth + 16}px;
  overflow: hidden;
`;
