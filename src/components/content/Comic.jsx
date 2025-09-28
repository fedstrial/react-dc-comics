const Comic = (props) => (
    <a href="" key={props.index} className="d-flex flex-column">
        <img src={props.thumb} alt={props.title} height={300} width={200} className="object-fit-cover" />
        <h3 className="mt-3">{props.series.toLocaleUpperCase()}</h3>
    </a>
)

export default Comic