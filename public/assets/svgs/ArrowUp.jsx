import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    scaleY={40}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M12 3a1 1 0 0 1 .707.293l7 7a1 1 0 0 1-1.414 1.414L13 6.414V20a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 12 3Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
