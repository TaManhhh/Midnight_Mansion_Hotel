import { getPosts, getPostsLimit } from "../../store/action";
import {useDispatch, useSelector} from 'react-redux';
import React ,{ useEffect, useRef } from "react";
import { Card } from '../form'
const List = ({page}) => {
  const dispatch =useDispatch()
  const {posts} = useSelector(state => state.post)
  const ListRef =  useRef()
  useEffect(()=>{
    let offset = page ? +page-1 : 0
    dispatch(getPostsLimit(offset))
    ListRef.current.scrollIntoView({behavior:'smooth',block:'start'})
  },[page])

  return (
    <div ref={ListRef} className="m-5">
        {posts?.length >0 && posts.map(item =>{
          return (
          <Card
          key={item?.id}
          address={item?.address}
          attributes={item?.attributes}
          description={JSON.parse(item?.description)}
          images={JSON.parse(item?.images?.image)}
          title={item.title}  
          id={item?.id}   
          />
          )
        })}
      </div>
  )
}

export default List
