import React from "react"

type ClearButtonProps = {
  handleClear: () => void
  disabled: boolean
}

const ClearButton: React.FC<ClearButtonProps> = ({ handleClear, disabled }) => {
  return (
    <button
      className={`text-xs bg-gray-800 p-2 m-2 border rounded-md md:text-sm md:py-1 hover-bg-slate-700 ${
        disabled
          ? "bg-gray-400 text-gray-600 cursor-not-allowed"
          : "bg-gray-600 text-white hover-bg-slate-700"
      }`}
      onClick={handleClear}
      disabled={disabled}
    >
      Clear
    </button>
  )
}

export default ClearButton
