import style from './message.module.scss';

import {useEffect, useState} from "react";

export const Message = () => {
    const [textLength, setTextLength] = useState(0);
    const [textNode, setTextNode] = useState(<></>);

    const text = [
        `Hello, dear visitor.`,
        `It's nice to see you here.`,
        `Please, enjoy.`
    ];

    const fullTextLength = text.reduce((acc, item) => acc + item.split('').length, 0);

    useEffect(() => {
        if (textLength < fullTextLength) {
            const interval = setInterval(() => {
                // console.log(textLength, fullTextLength);
                setTextLength(textLength => textLength + 1);
            }, 50);
            return () => clearInterval(interval);
        }
    }, [textLength, setTextLength, fullTextLength]);

    useEffect(() => {
        setTextNode(textToNodes(text, textLength));
    },[textLength, text, setTextNode]);

    const textToNodes = (text: string[], textLength: number): React.ReactElement => {
        let passed = 0;
        return <>
            {
                text.map((item) => {
                    const letters = item.split('');
                    const filled = letters.slice(0, textLength - passed);
                    const rest = letters.slice(textLength - passed);
                    passed += filled.length;
                    return <>
                        <span>{filled.join('')}</span>
                        <span className={style.transparent}>{rest.join('')}</span><br/>
                    </>
                })
            }
        </>

    }

    return <div className={style.message}>
          <div className={style.wrapper}>
              <div className={style.text}>
                  {textNode}
              </div>
          </div>
    </div>;
}
