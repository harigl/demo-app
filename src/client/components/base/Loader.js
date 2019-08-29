import React from 'react'
import { css } from 'react-emotion'

const Loader = ({ top }) => {
  top = top || '30%'
  const loaderStyle = css`
     {
      position: absolute;
      left: 50%;
      top: ${top};
      z-index: 1;
      width: 150px;
      height: 150px;
      margin: 100px 0 0 -75px;
      border: 16px solid #f3f3f3;
      border-radius: 50%;
      border-top: 16px solid #3498db;
      width: 120px;
      height: 120px;
      -webkit-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    }
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
  return <div key="loader" className={loaderStyle} />
}

export default Loader
