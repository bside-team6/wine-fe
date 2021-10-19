import React from 'react';
import { css } from '@emotion/react';

const alignCenter = css`
  margin-left: auto;
  margin-right: auto;
`;

const Spinner = ({ align = 'center' }) => {
  return (
    <div
      css={(theme) => css`
        @keyframes spinner {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        color: ${theme.colors.black06};
        display: block;
        position: relative;
        width: 80px;
        height: 80px;
        ${align === 'center' && alignCenter}
        div {
          transform-origin: 40px 40px;
          animation: spinner 1.2s linear infinite;
          &:after {
            content: ' ';
            display: block;
            position: absolute;
            top: 3px;
            left: 37px;
            width: 6px;
            height: 18px;
            border-radius: 20%;
            background: ${theme.colors.black06};
          }
          &:nth-of-type(1) {
            transform: rotate(0deg);
            animation-delay: -1.1s;
          }
          &:nth-of-type(2) {
            transform: rotate(30deg);
            animation-delay: -1s;
          }
          &:nth-of-type(3) {
            transform: rotate(60deg);
            animation-delay: -0.9s;
          }
          &:nth-of-type(4) {
            transform: rotate(90deg);
            animation-delay: -0.8s;
          }
          &:nth-of-type(5) {
            transform: rotate(120deg);
            animation-delay: -0.7s;
          }
          &:nth-of-type(6) {
            transform: rotate(150deg);
            animation-delay: -0.6s;
          }
          &:nth-of-type(7) {
            transform: rotate(180deg);
            animation-delay: -0.5s;
          }
          &:nth-of-type(8) {
            transform: rotate(210deg);
            animation-delay: -0.4s;
          }
          &:nth-of-type(9) {
            transform: rotate(240deg);
            animation-delay: -0.3s;
          }
          &:nth-of-type(10) {
            transform: rotate(270deg);
            animation-delay: -0.2s;
          }
          &:nth-of-type(11) {
            transform: rotate(300deg);
            animation-delay: -0.1s;
          }
          &:nth-of-type(12) {
            transform: rotate(330deg);
            animation-delay: 0s;
          }
        }
      `}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
