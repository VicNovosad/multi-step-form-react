import { useState } from "react";

export default function ButtonGroup({setResults}) {

    const [selectedButton, setSelectedButton] = useState(0);

    const BUTTON_TEXT = [
        '$2k', '$5k', 'No limit' 
    ]
    
    return (
        <div className="button-wrap flex">
            {BUTTON_TEXT.map((value, index) => (
                <input
                    onClick={() => {setSelectedButton(index); 
                        setResults(prevResults => ({
                            ...prevResults,
                            budget: BUTTON_TEXT[index]
                        }));
                    }} 
                    className={selectedButton === index ? "selected-button" : undefined}
                    key={index}
                    type="submit" value={value} />
            ))}
        </div>
    )
}
  