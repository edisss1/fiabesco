import { motion } from "framer-motion"

interface HeroHeaderProps {
    children: React.ReactNode
}

const HeroHeader = ({ children }: HeroHeaderProps) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="text-[clamp(2rem,20vw,3rem)] max-w-[800px] text-center mb-6 font-bold text-text-primary"
        >
            {children}
        </motion.h1>
    )
}
export default HeroHeader
