import React from "react"

type DownloadButtonProps = {
  handleDownload: () => void
  disabled: boolean
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  handleDownload,
  disabled,
}) => {
  return (
    <button
      className={`text-xs bg-gray-800 p-2 m-2 border rounded-md md:text-sm md:py-1 hover-bg-slate-700 ${
        disabled
          ? "bg-gray-400 text-gray-600 cursor-not-allowed"
          : "bg-gray-600 text-white hover-bg-slate-700"
      }`}
      onClick={handleDownload}
      disabled={disabled}
    >
      Download
    </button>
  )
}

export default DownloadButton
