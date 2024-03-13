import { Button } from "./Button";

const Search = () => {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-80 xl:w-[550px] p-4 ps-10 text-sm text-gray-600 border border-gray-300 rounded-md bg-gray-50 focus:border-2  focus:border-red-500 focus:outline-none   "
          placeholder="Search..."
          required
        />

        <Button
          type="submit"
          variant="default"
          btnSize={"sm"}
          className="absolute right-2 top-2 "
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default Search;
