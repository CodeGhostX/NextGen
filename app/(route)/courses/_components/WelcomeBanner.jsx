import Image from "next/image"

const WelcomeBanner = () => {
  return (
    <div className="flex gap-3 bg-white rounded-2xl shadow-lg">
      <Image src="/peng2.jpg" alt="panda" className="rounded-2xl" width={90} height={90}/>
      <div>
        <h2 className="text-2xl text-primary mt-4">Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</h2>
      </div>
    </div>
  )
}

export default WelcomeBanner
