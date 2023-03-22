import React, { memo } from 'react'

const SearchItem = ({ IconBefore, IconAfter, text, fontWeight, defaultText }) => {
    return (
        <div className='bg-white lg:px-4 lg:py-2 py-1 w-full rounded-md text-gray-400 text-[13px] lg:text-base flex items-center justify-between'>
            <div className='flex items-center  w-full h-7 '>
                {IconBefore}
                <span
                    className={`${fontWeight && 'font-medium text-black'} w-[85px]  ${text ? 'font-medium text-black' : ''} overflow-hidden text-ellipsis whitespace-nowrap`}
                >
                    {text || defaultText}
                </span>
            </div>
            {IconAfter}
        </div>
    )
}

export default memo(SearchItem)