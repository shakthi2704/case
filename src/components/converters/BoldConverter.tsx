import { useState, useEffect } from "react"
import Loader from "../Loader"
import CopyButton from "../buttons/CopyButton"
import DownloadButton from "../buttons/DownloadButton"
import ClearButton from "../buttons/ClearButton"
import { toast } from "react-toastify"

const BoldConverter: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState<string>("")
  const [boldText, setBoldText] = useState<string>("")

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value
    setText(inputText)
    setBoldText(inputText)
  }

  const handleCopyToClipboard = () => {
    try {
      navigator.clipboard.writeText(boldText).then(() => {
        toast.success("Copied to clipboard!")
      })
    } catch (error) {
      toast.error("Copy to clipboard failed. Please copy manually.")
    }
  }

  const handleClear = () => {
    setText("")
    setBoldText("")
  }

  const handleDownloadHTML = () => {
    try {
      const htmlContent = `<html><body><strong>${boldText}</strong></body></html>`
      downloadFile(htmlContent, "bold_text.html", "text/html")
      toast.success("HTML file downloaded successfully!")
    } catch (err) {
      toast.error("HTML file download failed. Please try again.")
    }
  }

  const handleDownload = () => {
    try {
      downloadFile(boldText, "bold_text.txt", "text/plain")
      toast.success("Text file downloaded successfully!")
    } catch (err) {
      toast.error("Text file download failed. Please try again.")
    }
  }

  const downloadFile = (
    content: string,
    fileName: string,
    contentType: string
  ) => {
    const blob = new Blob([content], { type: contentType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = fileName
    a.click()
    URL.revokeObjectURL(url)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const isSecondTextareaEmpty = boldText.trim() === ""
  return isLoading ? (
    <Loader />
  ) : (
    <section className="py-10 px-4 lg:px-20">
      <h2 className="text-5xl p-2 font-semibold mb-4 text-center text-gray-300">
        Bold Text Generator
      </h2>
      <div className="mt-10">
        <div className="mx-4 md:px-10 flex flex-col space-y-4 md:flex-row md:space-x-10 md:space-y-0">
          <textarea
            className="w-full h-32 p-4 border rounded-xl bg-slate-700"
            placeholder="Type or paste your content here"
            onChange={handleTextChange}
            value={text}
          ></textarea>
          <textarea
            className="w-full h-32 p-4 border rounded-xl bg-slate-700"
            placeholder="Check your conversion"
            value={boldText}
            readOnly
          ></textarea>
        </div>
        <div>
          <div className="container my-6 flex flex-col gap-2 md:flex-row md:gap-0 justify-center"></div>

          <div className="container flex flex-col gap-2 md:flex-row md:gap-0 justify-center">
            <button
              onClick={handleDownloadHTML}
              className={`text-xs bg-secondary p-2 m-2 border rounded-md md:text-sm md:py-1 hover-bg-slate-700 ${
                isSecondTextareaEmpty ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSecondTextareaEmpty}
            >
              Download as HTML
            </button>
            <DownloadButton
              handleDownload={handleDownload}
              isDisabled={isSecondTextareaEmpty}
            />

            <CopyButton
              handleCopyToClipboard={handleCopyToClipboard}
              isDisabled={isSecondTextareaEmpty}
            />
            <ClearButton handleClear={handleClear} />
          </div>
        </div>

        <div className="container">
          <p>
            Total Words: <b></b>
          </p>
          <p>
            Total Characters: <b></b>
          </p>
          <p>
            Total Lines: <b></b>
          </p>
        </div>
      </div>
    </section>
  )
}

export default BoldConverter
