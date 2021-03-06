import React from 'react'
import styled, { css } from 'styled-components'

import { COLORS } from 'constants'

const CardWrapper = styled.div`
  flex: 1;
  background-color: #fff;
  padding: ${props => (props.padding ? props.padding : '0.5rem')};
  transition: 0.3s all;
  border: 0px solid;

  /* styles driven by page state */
  border-radius: ${props => `${props.border.radius}px`};
  box-shadow: ${props =>
    `${props.normal.x}px ${props.normal.y}px ${props.normal.blur}px ${
      props.normal.spread
    }px rgba(${props.shadowColor.r}, ${props.shadowColor.g},${
      props.shadowColor.b
    }, ${props.shadowColor.a})`};

  ${props =>
    props.hoverStyles &&
    css`
      &:hover {
        border-radius: ${props => `${props.border.radius}px`};
        box-shadow: ${props =>
          `${props.hover.x}px ${props.hover.y}px ${props.hover.blur}px ${
            props.hover.spread
          }px rgba(${props.shadowColor.r},${props.shadowColor.g},${
            props.shadowColor.b
          }, ${props.hover.opacity})`};
      }
    `};

  ${props =>
    props.border.top &&
    css`
      border-top-width: ${props.border.width}px;
      border-top-color: rgba(
        ${props.border.color.r},
        ${props.border.color.g},
        ${props.border.color.b},
        ${props.border.color.a}
      );
    `};
  ${props =>
    props.border.right &&
    css`
      border-right-width: ${props.border.width}px;
      border-right-color: rgba(
        ${props.border.color.r},
        ${props.border.color.g},
        ${props.border.color.b},
        ${props.border.color.a}
      );
    `};
  ${props =>
    props.border.bottom &&
    css`
      border-bottom-width: ${props.border.width}px;
      border-bottom-color: rgba(
        ${props.border.color.r},
        ${props.border.color.g},
        ${props.border.color.b},
        ${props.border.color.a}
      );
    `};
  ${props =>
    props.border.left &&
    css`
      border-left-width: ${props.border.width}px;
      border-left-color: rgba(
        ${props.border.color.r},
        ${props.border.color.g},
        ${props.border.color.b},
        ${props.border.color.a}
      );
    `};
`

const Card = props => <CardWrapper {...props}>{props.children}</CardWrapper>

Card.defaultProps = {
  padding: '0.5rem',
  shadowColor: {
    r: 157,
    g: 157,
    b: 157,
    a: 0.5,
  },
  normal: {
    x: 0,
    y: 3,
    blur: 3,
    spread: -1,
    opacity: 0.5,
  },
  hover: {
    x: 0,
    y: 4,
    blur: 4,
    spread: 0,
    opacity: 0.25,
  },
  border: {
    top: false,
    bottom: false,
    right: false,
    left: false,
    radius: 5,
    width: 0,
    color: 'transparent',
  },
}

export default Card
