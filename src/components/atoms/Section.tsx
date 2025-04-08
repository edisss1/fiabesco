interface SectionProps {
    children: React.ReactNode
    position?: "absolute" | "relative"
}

const Section = ({ children, position }: SectionProps) => {
    return (
        <section
            className={`${position} my-[clamp(60px,10vw,120px)] w-full flex flex-col items-center `}
        >
            {children}
        </section>
    )
}
export default Section
