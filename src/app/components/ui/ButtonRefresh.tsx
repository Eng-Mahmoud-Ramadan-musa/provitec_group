import React from 'react'
import { Button } from './button'
import { BiRefresh } from 'react-icons/bi'
import { cn } from '../../utils/cn'

interface ButtonRefreshProps {
  fetchData: () => void | Promise<void>
  isLoading?: boolean
  className?: string
}

export default function ButtonRefresh({ fetchData, isLoading = false, className }: ButtonRefreshProps) {
  return (
    <Button
      onClick={fetchData}
      disabled={isLoading}
      variant="default"
      size="icon"
      className={cn("bg-gray-300 w-7 cursor-pointer", className)}
    >
      <BiRefresh
        className={cn(
          "text-black px-1 duration-200 w-6 h-7 ease-linear",
          isLoading ? "animate-spin text-gray-500" : "hover:border hover:border-white hover:bg-green-500 hover:text-white"
        )}
        size={20}
      />
      <span className="hidden sm:inline-block ml-1">
        {isLoading ? 'Loading...' : 'Refresh'}
      </span>
    </Button>
  );
}
