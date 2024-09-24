import React, { useState, useEffect } from 'react';
import './index.css'

function TextAnalyzer() {
    const [text, setText] = useState('');
    const [searchString, setSearchString] = useState('');
    const [replaceString, setReplaceString] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [characterCount, setCharacterCount] = useState(0);
    const [uniqueWordCount, setUniqueWordCount] = useState(0);

    useEffect(() => {
        const words = text.split(/\s+/).filter(word => word !== '');
        setWordCount(words.length);
        const lowercaseWords = words.map(word => word.toLowerCase());
        setUniqueWordCount(new Set(lowercaseWords).size);
        const lettersAndNumbers = text.replace(/[^a-zA-Z0-9]/g, '');
        setCharacterCount(lettersAndNumbers.length);
    }, [text]);

    const handleReplace = () => {
        const replacedText = text.replaceAll(searchString, replaceString);
        setText(replacedText);
    };
    
    return (
        <div className="text-analyzer">
            <h2 className='heading'>Text Analyzer</h2>
            <textarea
                rows={10}
                cols={50}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here ..."
            />
            <button onClick={(e) => setText('')}>Reset</button>
            <div className='statistics'>
                <table >
                    <thead>
                        <tr>
                            <th className='reading-heading'>Statistic</th>
                            <th className='reading'>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='reading-heading'>Word Count</td>
                            <td className='reading'>{wordCount}</td>
                        </tr>
                        <tr>
                            <td className='reading-heading'>Character Count</td>
                            <td className='reading'>{characterCount}</td>
                        </tr>
                        <tr>
                            <td className='reading-heading'>Unique Word Count</td>
                            <td className='reading'>{uniqueWordCount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="replace-inputs">
                <label htmlFor="search-string" >Search String:</label>
                <input

                    type="text"
                    id="search-string"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />
                <label htmlFor="replace-string">Replace String:</label>
                <input
                    type="text"
                    id="replace-string"
                    value={replaceString}
                    onChange={(e) => setReplaceString(e.target.value)}
                />
                <button onClick={handleReplace}>Replace All</button>

            </div>
        </div>
    );
}

export default TextAnalyzer;