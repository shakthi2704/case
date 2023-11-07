import React, { useState } from "react"
import ClearButton from "./buttons/ClearButton"
import CopyButton from "./buttons/CopyButton"
import DownloadButton from "./buttons/DownloadButton"
import { toast } from "react-toastify"

const TextConvertor = () => {
  const [inputText, setInputText] = useState("")
  const [convertedText, setConvertedText] = useState("")
  const [selectedCase, setSelectedCase] = useState("none")

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
  }

  const isInputEmpty = inputText.trim() === ""

  const convertText = (caseType: string) => {
    if (isInputEmpty) {
      return
    }

    switch (caseType) {
      case "uppercase":
        setConvertedText(inputText.toUpperCase())
        setSelectedCase("uppercase")
        break
      case "lowercase":
        setConvertedText(inputText.toLowerCase())
        setSelectedCase("lowercase")
        break
      case "titlecase":
        setConvertedText(
          inputText
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        )
        setSelectedCase("titlecase")
        break
      case "sentencecase":
        setConvertedText(
          inputText
            .toLowerCase()
            .split(". ")
            .map(
              (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1)
            )
            .join(". ")
        )
        setSelectedCase("sentencecase")
        break
      case "alternatingcase":
        setConvertedText(
          inputText
            .split("")
            .map((char, index) =>
              index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
            )
            .join("")
        )
        setSelectedCase("alternatingcase")
        break
      case "inversecase":
        setConvertedText(
          inputText
            .split("")
            .map((char) =>
              char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase()
            )
            .join("")
        )
        setSelectedCase("inversecase")
        break
      default:
        setConvertedText("")
        setSelectedCase("none")
    }
  }
  const handleCopyToClipboard = () => {
    if (!isInputEmpty) {
      navigator.clipboard.writeText(convertedText).then(() => {
        // alert("Text copied to clipboard!")
        toast.success("Text copied to clipboard!")
      })
    }
  }
  const handleClear = () => {
    setInputText("")
    setConvertedText("")
    setSelectedCase("none")
  }
  const handleDownload = () => {
    const blob = new Blob([convertedText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "transformed-text.txt"
    a.click()
    toast.success("Text downloaded successfully!")
  }

  const countWords = (text: string) => {
    return text.split(/\s+/).filter((word) => word !== "").length
  }

  // Function to count lines in the input text
  const countLines = (text: string) => {
    return text.split(/\r\n|\r|\n/).filter((line) => line !== "").length
  }

  return (
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
            onClick={() => convertText("uppercase")}
            disabled={isInputEmpty}
          >
            Uppercase
          </button>
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover-bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-gray-600 text-white hover-bg-slate-700"
            }`}
            onClick={() => convertText("lowercase")}
            disabled={isInputEmpty}
          >
            Lowercase
          </button>
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover-bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-gray-600 text-white hover-bg-slate-700"
            }`}
            onClick={() => convertText("titlecase")}
            disabled={isInputEmpty}
          >
            Title Case
          </button>
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover-bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-gray-600 text-white hover-bg-slate-700"
            }`}
            onClick={() => convertText("sentencecase")}
            disabled={isInputEmpty}
          >
            Sentence Case
          </button>
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover-bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-gray-600 text-white"
            }`}
            onClick={() => convertText("alternatingcase")}
            disabled={isInputEmpty}
          >
            Alternating Case
          </button>
          <button
            className={`text-xs p-2 m-2 border rounded-md md:text-sm md:py-1 hover-bg-slate-700 ${
              isInputEmpty
                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                : "bg-gray-600 text-white"
            }`}
            onClick={() => convertText("inversecase")}
            disabled={isInputEmpty}
          >
            Inverse Case
          </button>
        </div>

        <div className="container flex flex-col gap-2 md:flex-row md:gap-0 justify-center">
          <CopyButton
            handleCopyToClipboard={handleCopyToClipboard}
            disabled={isInputEmpty}
          />
          <DownloadButton
            handleDownload={handleDownload}
            disabled={isInputEmpty}
          />
          <ClearButton handleClear={handleClear} disabled={isInputEmpty} />
        </div>
      </div>

      <div className="container">
        <p>
          Total Words: <b>{countWords(inputText)}</b>
        </p>
        <p>
          Total Characters: <b>{inputText.length}</b>
        </p>
        <p>
          Total Lines: <b>{countLines(inputText)}</b>
        </p>
      </div>
    </div>
  )
}

export default TextConvertor
