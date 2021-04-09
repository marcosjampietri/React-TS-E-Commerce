import React, { useRef } from "react";

interface Props {
    title: string;
    isActive?: boolean; // ("?" = optional)
    // onClick(text: string): void;
    // onClick: (text: string) => void;
}

const Btn: React.FC<Props> = ({ title, isActive }) => {
    {
        /* const [name, setName] = useState<number | number>(0); */
    }

    const ref = useRef<HTMLInputElement>(null);

    const bbbHandler = (text) => {
        console.log("oookkkk");
        return text;
    };
    return <button onClick={bbbHandler}>APERTA</button>;
};

export default Btn;
