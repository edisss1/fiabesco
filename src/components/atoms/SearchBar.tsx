const SearchBar = () => {
    return (
        <form className="flex border-b-2 border-2 border-transparent border-b-text-primary focus-within:border-b-primary rounded-lg rounded-b-none  transition-colors duration-200 items-center mt-24 ">
            <input
                className="focus:outline-none w-full p-2"
                placeholder="Search for user..."
                type="text"
            />
        </form>
    )
}
export default SearchBar
