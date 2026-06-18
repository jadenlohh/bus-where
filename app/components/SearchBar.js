"use client";

export default function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <div className="flex items-center text-sm bg-white rounded-full shadow grow px-6 py-4.5 mt-5 lg:mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="#A7A7A7"
          viewBox="0 0 256 256"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>

        <input
          type="text"
          placeholder="Search Bus Stop"
          className="w-full ms-2.5 focus:outline-none placeholder:text-grey"
          onKeyUp={(e) => {
            e.key === "Enter" && onSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
