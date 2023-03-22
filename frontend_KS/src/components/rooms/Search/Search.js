import React from 'react'
import SearchItem from '../../form/SearchItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag , faRestroom, faCrop, faSearch} from "@fortawesome/free-solid-svg-icons";
const Search = () => {
  return (
    <div className='lg:h-[70px] h-14 p-2 bg-amber-400 rounded-lg flex-row flex items-center justify-around gap-2 '>
      <SearchItem text={"Chọn giá "} IconAfter={<FontAwesomeIcon icon={faTag} />}/>
      <SearchItem text={"Diện tích"} IconAfter={<FontAwesomeIcon icon={faCrop} />}/>
      <SearchItem text={"Loại phòng"}IconAfter={<FontAwesomeIcon icon={faRestroom} />}/>
      <button type='button' className='outline-none text-[15px] lg:text-lg py-2 lg:px-4 w-full flex items-center justify-center gap-2 bg-amber-700 rounded-lg'>
        Search <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  )
}

export default Search
