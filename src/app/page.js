import CalendarPage from "@/components/calendar/calendar-page";
import CoursesYouAreTakingPage from "@/components/courses-you-are-taking/courses-you-are-taking-page";
import AssignmentsPage from "@/components/assignments/assignments-page";
import Navbar from "@/components/navbar/navbar";
import Header from "@/components/header/header";
import NewCourses from "@/components/new-courses/new-courses";
import DailySchedule from "@/components/daily-schedule/daily-schedule";
import HoursActivity from "@/components/hours-activity/hours-activity";
import GoPremium from "@/components/go-premium/go-premium";

export default function Home() {
  return (
    <div className="flex p-5 gap-5 justify-center">
      <Navbar />
      <div className="flex flex-col gap-5 w-325">
        <Header />
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 flex-wrap">
            <NewCourses />
            <div className="flex gap-5">
              <HoursActivity />
              <DailySchedule />
            </div>
            <CoursesYouAreTakingPage />
          </div>
          <div className="flex flex-col gap-5 flex-wrap">
            <GoPremium />
            <CalendarPage />
            <AssignmentsPage />
          </div>
        </div>
      </div>
    </div>
  );
}
