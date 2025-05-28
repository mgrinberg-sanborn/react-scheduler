import styled from "styled-components";
import { boxHeight } from "@/constants";
import { StyledLeftColumnItemWrapperProps, StyledTextProps } from "./types";

export const StyledWrapper = styled.div<StyledLeftColumnItemWrapperProps>`
  display: flex;
  align-items: ${({ rows }) => (rows > 1 ? "start" : "center")};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${boxHeight}px;
  height: calc(${boxHeight}px * ${({ rows }) => rows});
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition: 0.5s ease;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "auto")};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImageWrapper = styled.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
export const StyledImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`;
export const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain }) => (isMain ? "0.75rem" : "0.625rem")};
  letter-spacing: ${({ isMain }) => (isMain ? "1px" : "0.5px")};
  line-height: ${({ isMain }) => (isMain ? "1.125rem" : "0.75rem")};
  width: 100%;
  display: block;
  white-space: normal;
  overflow: visible;
`;
