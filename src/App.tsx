import React, {RefObject, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState("click to know")
    let lastElement: RefObject<HTMLDivElement> = React.createRef()

    const handleInput = (a: string) => {
        const number = Number.parseInt(a) && (Number.parseInt(a) > 0) ? Number.parseInt(a) : 0;
        setValue(number)
    }

    const isEven = () => {
        const color = lastElement.current && lastElement.current.lastElementChild && window.getComputedStyle(lastElement.current.lastElementChild).backgroundColor
        console.log(color)
        if (color && (color == "rgb(255, 0, 0)")) {
            setResult("number is even!")
        } else setResult("number is odd!")
    }


    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <p>
                        is even????
                    </p>
                    {result}
                </div>
                <input
                    value={value}
                    placeholder={"enteer your number"}
                    type={"number"}
                    onChange={a => handleInput(a.currentTarget.value)}
                />
                <button onClick={e => isEven()}>
                    click to know
                </button>
                <div className={"values"} ref={lastElement}>
                    {
                        new Array(value).fill("").map((a, i) => {
                            return <div key={`${i}`} id={`${i + 1}`} className="countable">{i + 1}</div>;
                        })
                    }
                </div>
                {value}
            </header>

        </div>
    );
}

export default App;
