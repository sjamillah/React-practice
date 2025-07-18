import { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
    const [inputValue, setInputValue] = useState('')
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        // copy the inputvalue to the user's clipboard
        // navigator.clipboard API is modern and secure and it only works on HTTPS or localhost
        // it's asynchronous meaning it returns a Promise
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 5000)
        })
    }
    return <div>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button onClick={handleCopy}>Copy</button>
        <PopupContent copied={copied}/>
    </div>
}

export default CopyInput;