import React, {useState, useRef, useCallback} from "react";

const CODE_LENGTH = 6;

interface Props {
    onComplete: (code: string) => void;
}

const ACodeInput = ({ onComplete }: Props) => {
    const [code, setCode] = useState(new Array(CODE_LENGTH).fill(""));
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
        if (value && index < CODE_LENGTH - 1) {
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

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault()
        const pastedData = event.clipboardData.getData("text").slice(0, CODE_LENGTH);
        if (!/^\d+$/.test(pastedData)) return;
        const newCode = pastedData.split("").slice(0, CODE_LENGTH);
        setCode(newCode);
        inputsRef.current[newCode.length - 1]?.focus();
    };

    return (
        <div className="flex gap-2">
            {code.map((num, index) => (
                <input
                    key={index}
                    ref={(el) => (setInputRef(el, index))}
                    type="text"
                    value={num}
                    maxLength={1}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-12 h-12 text-center text-xl border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                />
            ))}
        </div>
    );
};

export default ACodeInput;