const Arrow = ({ className }: { className?: string }) => {
    return (
        <svg
            className={`[&>*]:stroke-text-primary dark:[&>*]:stroke-text-primary-dark ${className}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 12L6 12M6 12L11 17M6 12L11 7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default Arrow
