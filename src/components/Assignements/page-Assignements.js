import Text2 from "./text-Assignements";
import { data2 } from "./data-Assignements";
import globals from "@/app/globals.css";
import './styleAssignements.css';
import '../Calendar/styleCalendar.css';
import '../CourseYouReTaking/styleCourseYouReTaking.css';


export default function Assignements() {
    return(
        <main className="PageBlock2">

            <header className="AssignementsHeader">
                <section className="AssignementsHeader1">
                    <h1>Assignements</h1>
                </section>

                <section className="CourseYouReTakingHeaderButton">
                    <button>+</button> 
                </section>
            </header>

            <section className="BodyPageBlock2">
                <div>{data2.map((textData)=><Text2 key={textData.title} {...textData} />)}
                    <br></br>
                </div>
            </section>
        </main>
    )
}