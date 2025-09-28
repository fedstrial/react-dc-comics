import Comics from "./comics"
import Comic from "./Comic"

const Content = () => (
    <div className="bg-dark">
        <div className="container text-white fs-3 position-relative">
            <div className="py-5" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                justifyItems: 'start'
            }}>

                {Comics.map((comic, index) =>
                    <Comic
                        key = {index}
                        thumb = {comic.thumb}
                        alt = {comic.title}
                        series = {comic.series}
                    />
                )}
                
            </div>



            <div className="position-absolute top-0 start-0 translate-middle-y" style={{ marginLeft: '-20px' }}>
                <h3 className="fw-bold px-4 py-3 " style={{ backgroundColor: "#0283f9" }}>CURRENT SERIES</h3>
            </div>
        </div>
    </div>
)

export default Content 