import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
const Card = (props) => {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev) =>prev.filter((cid)=>(cid!==course.id)));
      toast.warning("Liked Removed!!");
    }
    else{
      // pehle s like nahi hai 
      // insert karna hai 
      if(likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev) => [...prev.course.id]);
      }
      toast.success("Liked Successfully!!");
    }
  }
  return (
    <div className='card'>
      <div className='image-heart'>
        <img src={course.image.url} className='thumbnail' alt=''></img>
        <div className='like'>
          <button className='like-btn' onClick={clickHandler}>
          {
            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
            }
          </button>
        </div>
      </div>
      <div>
        <p className='title-card'>{course.title}</p>
        <p className='desc'>{course.description}</p>
      </div>
    </div>
  )
}

export default Card