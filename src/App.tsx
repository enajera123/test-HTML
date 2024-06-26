import { useState } from "react"

function App() {

  const [data, setData] = useState<string>('')

  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };
  return (
    <>
      <div className="container">
        <textarea className="textArea" onChange={(e) => setData(e.target.value)} value={data} placeholder="Enter your frame here" />
        <div className="frame" dangerouslySetInnerHTML={createMarkup(data)} />
      </div>

    </>
  )
}

export default App
