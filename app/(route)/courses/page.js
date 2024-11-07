"use client"
import CourseList from "./_components/CourseList"
import WelcomeBanner from "./_components/WelcomeBanner"

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      {/* Left */}
      <div className="col-span-3 p-3 ">
        <CourseList/>
      </div>

      {/* Right */}
      <div className="col-span-1">
        Right Section
      </div>
    </div>
  )
}

export default page
