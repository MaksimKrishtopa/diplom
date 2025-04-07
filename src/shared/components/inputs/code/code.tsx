import React, {useState, useRef, useCallback} from "react";
import ErrorMessage from "@/shared/components/error-message";
import {codeInputStyles, codeInputWrapStyles} from "@/shared/components/inputs/code/style.ts";

interface ICodeInputProps {
    onComplete: (code: string) => void;
    length?: number;
    errorMessage?: string;
    error?: boolean
}

const CodeInput = ({onComplete, errorMessage, error, length = 6}: ICodeInputProps) => {
    const [code, setCode] = useState(new Array(length).fill(""));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const setInputRef = useCallback((el: HTMLInputElement | null, index: number) => {
        if (el) {
            inputsRef.current[index] = el;
        }
    }, []);

    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        if (newCode.every((num) => num !== "")) {
            onComplete?.(newCode.join(""));
        }
        if (value && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace") {
            if (code[index]) {
                handleChange(index, "");
            } else if (index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        }
    };

    return (
        <div className={codeInputWrapStyles.mainWrap}>
            <div className={codeInputWrapStyles.inputsWrap}>
                {code.map((num, index) => (
                    <input
                        key={index}
                        ref={(el) => (setInputRef(el, index))}
                        type="text"
                        value={num}
                        maxLength={1}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className={codeInputStyles({error})}
                    />
                ))}
            </div>
            <ErrorMessage message={errorMessage}/>
        </div>
    );
};

export default CodeInput;