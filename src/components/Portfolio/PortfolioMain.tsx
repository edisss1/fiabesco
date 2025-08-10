const PortfolioMain = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="px-[clamp(0.5rem,10vw,2.25rem)] grid gap-9 mt-9 w-full mb-16">
            {children}
        </main>
    )
}
export default PortfolioMain
