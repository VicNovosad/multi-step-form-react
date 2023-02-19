import { useState } from "react";
import TextInput from "./TextInput";
import ButtonGroup from "./ButtonGroup";

const title = [
    "Apply to work with \n our agency",
    "What's your budget?",
    "Anything else we should know?",
    "Thank you!"
]

export default function LeftContainer({stage, setStage}) {
    
    const [results, setResults] = useState({});
    const handleChange = e => {
        const { id, value } = e.target;
        setResults(prevResults => ({
            ...prevResults,
            [id]: value
        }));
    };

    let content;
    
    if (stage === 0) {
        content = (
            <TextInput id="email" value="What is your email?" onChange={handleChange}/>
        )
    } else if (stage === 1) {
        content = (
            <ButtonGroup setResults={setResults} />
        )
    } else if (stage === 2) {
        content = (
            <TextInput id="additionalInfo" value="" onChange={handleChange}/>
        )
    }   else if (stage === 3) {
        alert(JSON.stringify(results));
    }

    return(
        <div className="left-container flex">
            <div className="inner-left-container flex">
                <h1>{title[stage]}</h1>
                {content}
                <div className="button-group flex">
                {stage !== 3 && <input 
                    onClick={() => setStage(stage + 1)} 
                    type="submit" value="Next" />}
                </div>
            </div>  
        </div>
    )
}
  