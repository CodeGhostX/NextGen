import Image from "next/image"

const CourseItem = ({course}) => {
  return (
    <div className="border rounded-xl shadow-lg transition-all hover:shadow-purple-800 duration-500 hover:scale-110">
      <Image className="rounded-t-xl" src={course.banner.url} width={500} height={500} alt="image"/>
      <div className="p-2 hover:rounded-xl">
        <h2 className="text-xl font-bold text-purple-500">{course.name}</h2>
        <h3 className="text-yellow-400">Ghost_Coder_Abhi</h3>
        <h3>{course.free ? "Free" : "Paid" }</h3>
      </div>
    </div>
  )
}

export default CourseItem
