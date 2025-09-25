import JumboImg from "../../assets/img/jumbotron.jpg"

const Jumbotron = () => (
    <div style={{ backgroundImage: `url(${JumboImg})`, minHeight: "400px", backgroundRepeat: "no-repeat", backgroundSize: "100%, 100%" }}></div>
)

export default Jumbotron