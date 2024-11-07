"use client"
import GlobalApi from "@/app/_utils/GlobalApi"
import { useEffect, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import CourseItem from "./CourseItem";
import Link from "next/link";

const CourseList = () => {
    const [courseList, setCourseList] = useState([]);
    useEffect(()=>{
        getAllCourses();
    }, [])
    const getAllCourses = ()=>{
        GlobalApi.getCourseList().then(res=>{
            setCourseList(res?.courseLists)
        })
    }

  return (
    <div className="p-5 bg-white rounded-lg m-3">
      {/* Title & filter */}
        <div className="flex items-center justify-between flex-row">
            <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">All</SelectItem>
                    <SelectItem value="dark">Paid</SelectItem>
                    <SelectItem value="system">Free</SelectItem>
                </SelectContent>
            </Select>

        </div>
      {/*Display Course List*/}
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {
            courseList.length>0 ? courseList?.map((item, index)=>{
                return <Link key={index} href={'/course-preview/'+item.slug}>
                <div className="p-2">
                    <CourseItem course={item}/>
                </div>
                </Link>
            })
            :[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[95%] h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse flex flex-col"
                >
                  {/* Image Skeleton */}
                  <div className="w-full h-[160px] bg-slate-300 rounded-t-xl"></div>
                  {/* Text Skeleton */}
                  <div className="flex flex-col space-y-2 p-4">
                    <div className="w-[80%] h-[10px] bg-slate-300 rounded"></div>
                    <div className="w-[60%] h-[10px] bg-slate-300 rounded"></div>
                  </div>
                </div>
              );
            })
        }
      </div>
    </div>
  )
}

export default CourseList
