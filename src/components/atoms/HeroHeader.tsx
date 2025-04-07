interface HeroHeaderProps {
    children: React.ReactNode
}

const HeroHeader = ({children}: HeroHeaderProps) => {
  return (
    <h1 className="text-[clamp(2rem,20vw,3rem)] max-w-[800px] text-center mb-6 font-bold text-text-primary">{children}</h1>
  )
}
export default HeroHeader