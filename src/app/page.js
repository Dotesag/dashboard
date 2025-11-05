import CalendarPage from "@/components/Calendar/page-Calendar";
import CourseYouReTaking from "@/components/CourseYouReTaking/page-CourseYouReTaking";
import Assignements from "@/components/Assignements/page-Assignements";
import Navbar from "@/components/navbar/navbar";
import Header from "@/components/head/header";
import NewCourses from "@/components/newCourses/newCourses";
import DailySchedule from "@/components/dailySchedule/dailySchedule";
import HoursActivity from "@/components/hoursActivity/hoursActivity";
import GoPremium from "@/components/goPremium/goPremium";

export default function Home() {
  return (
    <div className="flex p-5 gap-5 justify-center">
      <Navbar />
      <div className="flex flex-col gap-5 w-325">
        <Header />
        <div className="flex justify- gap-5">
          <div className="flex  flex-col gap-5 flex-wrap ">
            <NewCourses />
            <div className="flex gap-5">
              <HoursActivity />
              <DailySchedule />
            </div>
            <CourseYouReTaking />
          </div>
          <div className="flex flex-col gap-5 flex-wrap">
            <GoPremium/>
            <CalendarPage />
            <Assignements />
          </div>
        </div>
      </div>
    </div>
  );
}
