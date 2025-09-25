import Comics from "./comics"

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
                    <a href="" key={index} className="d-flex flex-column">
                        <img src={comic.thumb} height={300} width={200} className="object-fit-cover" />
                        <h3 className="mt-3">{comic.series.toLocaleUpperCase()}</h3>
                    </a>
                )}
            </div>

            <div className="position-absolute top-0 start-0 translate-middle-y" style={{ marginLeft: '-20px' }}>
                <h3 className="fw-bold px-4 py-3 " style={{ backgroundColor: "#0283f9" }}>CURRENT SERIES</h3>
            </div>
        </div>
    </div>
)

export default Content 