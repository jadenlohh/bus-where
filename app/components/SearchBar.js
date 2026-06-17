"use client"

export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="flex items-center text-sm bg-white rounded-full shadow grow px-6 py-4.5 mt-5 lg:mt-6">
        <svg
          width="19px"
          height="19px"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#A7A7A7"
        >
          <path
            d="M17 17L21 21"
            stroke="#A7A7A7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
            stroke="#A7A7A7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>

        <input
          type="text"
          placeholder="Search Bus Stop"
          className="w-full ms-2.5 focus:outline-none placeholder:text-grey"
          onKeyUp={(e) => {
            e.key === "Enter" && window.location.assign(`/?busStop=${e.target.value}`)
          }}
        />
      </div>
    </div>
  );
}
