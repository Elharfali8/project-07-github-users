import { Input } from "@/components/ui/input"


const SearchInput = () => {
  return (
      <div className="relative">
          <Input type="email" placeholder="Email" className="w-full h-[36px] lg:h-[40px] bg-white dark:bg-gray-700 dark:text-white dark:placeholder:text-white placeholder:text-lg !text-lg" />
          <button type="button" className="absolute primary-btn px-3 py-[3px] right-2 top-1 bottom-1 rounded-lg cursor-pointer capitalize">
              search
          </button>
    </div>
  )
}

export default SearchInput