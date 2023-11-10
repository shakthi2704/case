import React, { useState, useEffect } from "react"
import TextStats from "./TextStats"
import Loader from "./Loader"
import ClearButton from "./buttons/ClearButton"
import CopyButton from "./buttons/CopyButton"
import DownloadButton from "./buttons/DownloadButton"

const TextConvertor = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [inputText, setInputText] = useState("")
  const [convertedText] = useState("")

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const isInputEmpty = inputText.trim() === ""

  return isLoading ? (
    <Loader />
  ) : (
    <div className="mt-10">
      <div className="mx-4 md:px-10 flex flex-col space-y-4 md:flex-row md:space-x-10 md:space-y-0">
        <textarea
          className="w-full h-32 p-4 border rounded-xl bg-slate-700"
          placeholder="Type or paste your content here"
          value={inputText}
          onChange={handleTextChange}
        ></textarea>
        <textarea
          className="w-full h-32 p-4 border rounded-xl bg-slate-700"
          placeholder="Check your conversion"
          value={convertedText}
          readOnly
        ></textarea>
      </div>
      <div>
        <div className="container my-6 flex flex-col gap-2 md:flex-row md:gap-0 justify-center">
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-black cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-slate-700"
            }`}
          >
            Sentense Case
          </button>
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-black cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-slate-700"
            }`}
          >
            Upper case
          </button>
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-black cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-slate-700"
            }`}
          >
            Lower case
          </button>
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-black cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-slate-700"
            }`}
          >
            Title Case
          </button>
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-black cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-slate-700"
            }`}
          >
            Alternating Case
          </button>
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover:bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-black cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-slate-700"
            }`}
          >
            Inverse Case
          </button>
        </div>

        <div className="container flex flex-col gap-2 md:flex-row md:gap-0 justify-center">
          <DownloadButton />
          <CopyButton />
          <ClearButton />
        </div>
      </div>
      <TextStats inputText={inputText} />
    </div>
  )
}

export default TextConvertor
