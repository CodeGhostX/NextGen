import { Lock, Play } from "lucide-react"
import { useState } from "react"

const CourseContentSection = ({courseInfo}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-white p-2 m-2">
      <h1 className="text-[22px] font-semibold">Course Content</h1>
      {
        courseInfo?.chapter?.map((item, index)=>{
            return <div key={index} className= {` flex flex-row m-2 justify-between hover:bg-slate-400 hover:text-slate-700 border rounded-md px-2 py-1
            ${activeIndex==index ? "bg-primary text-white" : ""}
            `}>
              <div className="flex flex-row text-[18px]">
                <h2>{index+1}.</h2>
                <h3 className="ml-3">{item?.name}</h3>
              </div>
              {activeIndex==index? <Play/> : <Lock/>}
            </div>
        })
      }
    </div>
  )
}

export default CourseContentSection
