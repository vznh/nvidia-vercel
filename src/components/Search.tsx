// [START components/Search.tsx]
import { FC, useState, useRef } from 'react';

interface SearchProps {
  setKeywords: (keywords: string[]) => void;
}

const Search: FC<SearchProps> = ({ setKeywords }) => {
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    const keywords = input.split(',').map((word) => word.trim()).filter(Boolean);
    setKeywords(keywords);
    setShowInput(false);
    setInput('');
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowInput(true);
    // Focus the input field when it appears
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div
      className="aspect-square flex w-3/4 flex-col items-center justify-center rounded-sm bg-gray-900 p-4 text-white shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="mb-4 text-2xl font-bold">Search</h2>
      {showInput ? (
        <>
          <input
            type="text"
            placeholder="Enter keywords, separated by commas"
            className="mb-2 w-full rounded p-2 text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputRef}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={handleSearch}
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white"
          >
            Search
          </button>
        </>
      ) : (
        <p>Click to search for papers</p>
      )}
    </div>
  );
};

export default Search;
// [END components/Search.tsx]
