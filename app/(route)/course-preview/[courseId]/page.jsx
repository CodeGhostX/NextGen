"use client"
import GlobalApi from "@/app/_utils/GlobalApi"
import { useEffect, useState } from "react"
import CourseVideoDescription from "../_components/CourseVideoDescription"

const coursePreview = ({params}) => {
  const [courseInfo, setCoursInfo] = useState({});
    useEffect(()=>{
        params && getCourseInfoById();
    }, [params])

    const getCourseInfoById = ()=>{
        GlobalApi.getCourseById(params.courseId).then(res=>{
            setCoursInfo(res.courseLists[0]);
        })
    }
  return (
    courseInfo && <div className="grid grid-cols-3">
      <CourseVideoDescription courseInfo={courseInfo}/>
    </div>
  )
}

export default coursePreview
