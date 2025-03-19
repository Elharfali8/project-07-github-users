import { Input } from "@/components/ui/input"


const SearchInput = ({
  inputValue, setInputValue, handleSubmit
}: {
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: () => void
  }) => {
  
  return (
      <div className="relative">
          <Input type="email" placeholder="Email" className="w-full h-[36px] lg:h-[40px] bg-white dark:bg-gray-700 dark:text-white dark:placeholder:text-white placeholder:text-lg !text-lg" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button type="button" className="absolute primary-btn px-3 py-[3px] right-2 top-1 bottom-1 rounded-lg cursor-pointer capitalize" onClick={handleSubmit}>
              search
          </button>
    </div>
  )
}

export default SearchInput