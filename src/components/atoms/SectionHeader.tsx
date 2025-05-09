import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SectionHeaderProps {
    children: React.ReactNode
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
    const ref = useRef<HTMLHeadingElement | null>(null)

    const inView = useInView(ref, { once: true })

    return (
        <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={inView ? { opacity: 1, y: 10, scale: 1 } : {}}
            className="text-2xl text-text-primary font-semibold"
        >
            {children}
        </motion.h2>
    )
}
export default SectionHeader
