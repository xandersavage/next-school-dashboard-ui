import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP  */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD  */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={
                  "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Oghenefejiro Rachael</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                  <Image src={"/blood.png"} alt="" width={24} height={24} />
                  <span>A+</span>
                </div>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                  <Image src={"/date.png"} alt="" width={24} height={24} />
                  <span>February 2025</span>
                </div>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                  <Image src={"/mail.png"} alt="" width={24} height={24} />
                  <span>davidson@gmail.com</span>
                </div>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                  <Image src={"/phone.png"} alt="" width={24} height={24} />
                  <span>+234 987672</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS  */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD  */}
            <div className="flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleAttendance.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            <div className="flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleLesson.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">16</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            <div className="flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleAttendance.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
            <div className="flex bg-white p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleClass.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM  */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="text-xl font-semibold">Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 bg-lamaSkyLight rounded-md" href={"/"}>
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 bg-lamaPurpleLight rounded-md" href={"/"}>
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 bg-lamaYellowLight rounded-md" href={"/"}>
              Student&apos;s Results
            </Link>
            <Link className="p-3 bg-pink-50 rounded-md" href={"/"}>
              Student&apos;s Exams
            </Link>
            <Link className="p-3 bg-lamaSkyLight rounded-md" href={"/"}>
              Student&apos;s Assignment
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};
export default SingleStudentPage;
