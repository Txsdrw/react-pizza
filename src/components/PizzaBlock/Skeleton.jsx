import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={450}
        viewBox="0 0 280 450"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="130" cy="130" r="120" />
        <rect x="0" y="270" rx="10" ry="10" width="280" height="27" />
        <rect x="0" y="320" rx="10" ry="10" width="280" height="80" />
        <rect x="0" y="427" rx="10" ry="10" width="89" height="29" />
        <rect x="127" y="420" rx="17" ry="17" width="152" height="45" />
    </ContentLoader>
)