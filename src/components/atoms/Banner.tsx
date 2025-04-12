interface BannerProps {
    bannerURL: string | undefined
}

const Banner = ({ bannerURL }: BannerProps) => {
    return (
        <div className="w-full h-[150px] ">
            {bannerURL ? (
                <img
                    className="h-[150px] w-full object-cover rounded-b-xl"
                    src={bannerURL}
                />
            ) : (
                <div className="bg-text-primary/40 rounded-b-xl h-full"></div>
            )}
        </div>
    )
}
export default Banner
