import { useLayoutEffect, useRef } from "react";

const Input = () => {

    const useInputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('input...');

    // Cuando el UseEffect no funcione como te esperas, usa este hook
    useLayoutEffect(() => {
        // const element = document.getElementById('input');
        // element?.focus();
        const element = useInputRef.current;
        console.log(element?.value);
    });

    return (
        <>
            <input 
                // mejor trabajar con referencias a con IDs
                ref={useInputRef} 
                // id="input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}

export default Input;