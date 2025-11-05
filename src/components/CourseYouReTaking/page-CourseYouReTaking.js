import { data1 } from "./data-CourseYouReTaking";
import { data2 } from "./data-CourseYouReTaking";
import TextPage1 from "./text-CourseYouReTaking";
import '../Assignements/styleAssignements.css';
import '../Calendar/styleCalendar.css';
import './styleCourseYouReTaking.css';

export default function CourseYouReTaking() {
    return(
        <main className="PageBlock1">

            <header className="CourseYouReTakingHeader">
                <section className="CourseYouReTakingHeader1">
                    <h1>Course You're Taking</h1>
                </section>

                <section className="CourseYouReTakingHeader2">

                    <section className="CourseYouReTakingHeaderOption">
                        <select>
                            <option>Active</option>
                        </select>
                    </section>

                    <section className="CourseYouReTakingHeaderButton">
                        <button>+</button> 
                    </section>

                </section>

            </header>




            <section>
                {data1.map((textData) => (
                    <TextPage1 key={textData.title} {...textData} />
                ))}
                {data2.map((textData) => (
                    <TextPage1 key={textData.title} {...textData} />
                ))}

            </section>
        </main>
    )
}