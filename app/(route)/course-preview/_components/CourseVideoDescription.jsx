import Markdown from "react-markdown"
import VideoPlayer from "./VideoPlayer"
import CourseContentSection from "./CourseContentSection"
import CourseEnrollmentSection from "./CourseEnrollmentSection"

const CourseVideoDescription = ({courseInfo}) => {
  return courseInfo && (
    <>
    <div className="shadow-md p-5 bg-white col-span-2 gap-4 m-2">
      <h1 className="text-[20px] font-semibold">{courseInfo?.name}</h1>
      <h2 className="text-gray-500">Ghost Coder Abhi</h2>
      {
        courseInfo?.chapter?.length>0 ? <VideoPlayer videoUrl={courseInfo?.chapter[0]?.video?.url}/>:
        "Demo Not Avaliable"
      }
      <h2 className="mt-5 text-[17px] font-semibold">About This Course</h2>
      <div>
        <Markdown>{courseInfo?.description}</Markdown>
      </div>
    </div>

    {/* Right Section */}
    <div>
        <CourseEnrollmentSection courseInfo={courseInfo}/>
        <CourseContentSection courseInfo={courseInfo}/>
    </div>
    </>
  )
}

export default CourseVideoDescription
