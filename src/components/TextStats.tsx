import React from "react"

interface TextStatsProps {
  inputText: string
}

const TextStats: React.FC<TextStatsProps> = ({ inputText }) => {
  const countWords = (text: string) => {
    return text.split(/\s+/).filter((word) => word !== "").length
  }

  const countLines = (text: string) => {
    return text.split(/\r\n|\r|\n/).filter((line) => line !== "").length
  }

  return (
    <div className="container">
      <p>
        Total Words: <span>{countWords(inputText)}</span>
      </p>
      <p>
        Total Characters: <span>{inputText.length}</span>
      </p>
      <p>
        Total Lines: <span>{countLines(inputText)}</span>
      </p>
    </div>
  )
}

export default TextStats
