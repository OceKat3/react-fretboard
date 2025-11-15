import React, { createContext } from "react";
import { MAJOR, Scale, STANDARD_TUNING, Tuning } from "./noteLogic";

interface ContextType {
    scale: Scale,
    root: number,
    tuning: Tuning,
}

const defaultContext: ContextType = {
    scale: MAJOR,
    root: 7, // G
    tuning: STANDARD_TUNING
}

export const ScaleContext = createContext<ContextType>(defaultContext)