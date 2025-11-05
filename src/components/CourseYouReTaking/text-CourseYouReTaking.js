export default function textPage1({title, name, time, percent}){
    return(
        <div className="TextPageMain">
            <div className="Subblock1Block1">
                <section>
                    <img src="/cources-tasks/dashboard-svgrepo-com.svg" alt="text" className="Big"/>
                </section>

                <section>
                    <h1>{title}</h1>
                </section>

                <section className="SectionSubblock1Block1">
                    <img src="/cources-tasks/person-2-svgrepo-com.svg" alt="text" className="Small"/>
                    <p>{name}</p>
                </section>

            </div>

            <div className="Subblock2Block1">
                <p>Remaining</p>
                <h1>{time}</h1>
            </div>

            <div className="Subblock3Block1">
                <span className={`progressp${percent}`}></span>
                <h1>{percent}%</h1>
            </div>

        </div>
    )
}