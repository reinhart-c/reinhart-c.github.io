import Code from "../assets/icons/code.svg?react"
import Smartphone from "../assets/icons/smartphone.svg?react"
import AI from "../assets/icons/ai.svg?react"
import Design from "../assets/icons/design.svg?react"

export const skillCategories = [
    {
        icon: Code,
        title: "FULL-STACK DEV",
        subtitle: "フルスタック",
        color: "green",
        techs: ["REACT", "C# .NET", "COSMOSDB"]
    },
    {
        icon: Smartphone,
        title: "MOBILE DEV",
        subtitle: "モバイル",
        color: "cyan",
        techs: ["JAVA", "KOTLIN", "SWIFT"]
    },
    {
        icon: AI,
        title: "AI/ML SYSTEMS",
        subtitle: "AI システム",
        color: "pink",
        techs: ["TENSORFLOW", "PYTORCH", "OPENCV"]
    },
    {
        icon: Design,
        title: "UI/UX DESIGN",
        subtitle: "デザイン",
        color: "indigo",
        techs: ["FIGMA", "MIRO", "ADOBE"]
    }
]