import globals from "@/app/globals.css";
import '../Assignements/styleAssignements.css';
import './styleCalendar.css';
import '../CourseYouReTaking/styleCourseYouReTaking.css';
const weeks = [
    ['29', '30', '31', '1', '2', '3', '4'],
    ['5', '6', '7', '8', '9', '10', '11'],
    ['12', '13', '14', '15', '16', '17', '18'],
    ['19', '20', '21', '22', '23', '24', '25'],
    ['26', '27', '28', '29', '30', '31', '1'],
];
const daysOfWeek = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];
const but1 = "<";
const but2 = ">";

export default function CalendarPage() {
    return (
        <main className="CalendarPageMain">
            <header>
                <button className="calendarPageMainHeaderButton">{but1}</button>
                <h1>August, 2023</h1>
                <button className="calendarPageMainHeaderButton">{but2}</button>
            </header>

            <div className="calendarDaysHeader">
                {daysOfWeek.map(day => (
                    <div key={day}>
                        {day[0]}
                    </div>
                ))}
            </div>
            
            <div className="calendarDays">
                {weeks.map((week, wi) => (
                    <div key={wi} className="week">
                        {week.map((day, di) => {
                            const activeOrNotActive = (wi === 0 && di < 3) || (wi === 4 && di > 4) ? 'notActive' : 'isActive';
                            const targetOrNot = parseInt(day) === 17 ? 'target' : activeOrNotActive;
                            
                            return (
                                <div key={di} className={targetOrNot}>
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </main>
    );
}