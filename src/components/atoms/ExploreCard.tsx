import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ExploreCardProps {
    header: string
    text: string
    index?: number
}

const ExploreCard = ({ header, text, index }: ExploreCardProps) => {
    const cardRef = useRef<HTMLDivElement | null>(null)
    const isVisible = useInView(cardRef, { once: true })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, y: 10, scale: 1 } : {}}
            transition={{ delay: index! * 0.5, duration: 1, ease: "backInOut" }}
            className="flex text-text-primary flex-col items-center gap-4 max-w-[300px]"
        >
            <h3 className="text-xl font-medium">{header}</h3>
            <p className="text-center">{text}</p>
        </motion.div>
    )
}
export default ExploreCard
