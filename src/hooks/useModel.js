import { useState } from "react";

export default function useModel() {
    const [model, setModel] = useState(false);
    return { model, setModel };
}