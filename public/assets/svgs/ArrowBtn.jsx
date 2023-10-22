import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={88}
    height={70}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M.76 11.673 8.563.528 85.65 54.504 77.846 65.65.76 11.673Z"
      clipRule="evenodd"
    />
    <path fill="#fff" d="M74.812.461H87.24v68.676H74.812z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M15.503 69.655V57.226h71.22v12.429h-71.22Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
