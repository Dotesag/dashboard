export default function Text2({title, date, children, color}) {
    return(
        <div className="styleText2">
            
            <section className="styleText2Section1">
            <img src="/cources-tasks/assignment.svg" alt="assignment" className="Big"/>
                <section>
                    <h1>{title}</h1>
                    <p>{date}</p>
                </section>
            </section>
            
            <button className="styleButtonText2" style={{backgroundColor: color}}>{children}</button>
            <br></br>
        </div>
    )
}