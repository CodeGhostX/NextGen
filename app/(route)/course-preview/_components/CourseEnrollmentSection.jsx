import GlobalApi from '@/app/_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import { ArrowUpRightFromCircleIcon, BookOpen, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

const CourseEnrollmentSection = ({courseInfo}) => {
  const membership = false;
  const {user} = useUser();
  const {toast} = useToast();
  const isFree = courseInfo?.free;
  const router = useRouter();
  const courseEnrollment = ()=>{
    GlobalApi.enrollToTheCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress).then(res=>{
      if(res){
        router.push('/watch-course/'+res.createUserEnrollCourse.id);
        toast({
          variant: "success" ,
          title: "Enrollment Successful",
          description: "You are now enrolled to the course",
        })
      }
    })
  }

  return (
    <div className="p-5 bg-gradient-to-r from-purple-500 to-indigo-500 m-3 rounded-lg shadow-md">
      <h1 className="text-white text-3xl font-bold mb-6">Join the Course</h1>
        {user? (courseInfo?.free) && <button onClick={()=>{courseEnrollment()}} className="flex items-center px-5 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-teal-500 hover:to-blue-600 transform hover:scale-105 transition duration-300 ease-in-out">
          <BookOpen className="w-5 h-5 mr-2" />
          Enroll Now
        </button>:
            <Link href={'/sign-in'}>
              <button className="flex items-center px-5 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-teal-500 hover:to-blue-600 transform hover:scale-105 transition duration-300 ease-in-out">
                <ArrowUpRightFromCircleIcon className="w-5 h-5 mr-2" />
                  Sign In First
              </button>
            </Link>
        }

        {(isFree) ? "" : courseInfo && <button className="flex items-center m-3 px-5 py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-teal-500 hover:to-blue-600 transform hover:scale-105 transition duration-300 ease-in-out">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Buy the Course - ₹2000
        </button>}
    </div>
  );
}

export default CourseEnrollmentSection;
