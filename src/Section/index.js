import "./style.css";



const Section = ({ body }) => (
    <section className="section">
        <div className="section__body">
            {body}
        </div>
    </section>
);


export default Section;