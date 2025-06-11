import Button from "../../components/atoms/Button"

const DataStorageSettings = () => {
    return (
        <div className="flex flex-col gap-9 min-w-[350px]">
            <div className="flex items-center justify-between">
                <p>Download account data</p>
                <Button className="rounded-lg border-2 cursor-pointer hover:bg-secondary transition-colors duration-200 border-text-primary px-6 py-2">
                    Download
                </Button>
            </div>

            <Button className="self-start bg-secondary px-6 py-2 rounded-lg hover:scale-[101%] transition-transform duration-200 cursor-pointer">
                Delete account
            </Button>
        </div>
    )
}
export default DataStorageSettings
