import React from "react"

export type SVGPropType = React.SVGProps<SVGSVGElement>
export interface AccordionProps {
    question: string,
    answer: string
}
export interface StyledButton {
    isLink?: boolean,
    linkPath?: string,
    title: string,
    theme?: "primary" | "secondary"
}
export interface CarouselType {
    data: {
        dataString: string
    }[],
    autoplay: boolean
}
export interface carouselSlideType {
    dataString: string
}
export interface LayoutProp {
    children: React.ReactNode
}