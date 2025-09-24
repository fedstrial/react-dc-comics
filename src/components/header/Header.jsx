import logo from "../../assets/img/dc-logo.png"

const Header = () => (
    <header>
        <div className="container d-flex align-items-center justify-content-between py-3">
            <div><img src={logo} alt="" />
            </div>
            <div>
                <ul className="list-unstyled d-flex gap-5">
                    <li><a href="">CHARACTERS</a></li>
                    <li><a href="">COMICS</a></li>
                    <li><a href="">MOVIES</a></li>
                    <li><a href="">TV</a></li>
                    <li><a href="">GAMES</a></li>
                    <li><a href="">COLLECTIBLES</a></li>
                    <li><a href="">VIDEOS</a></li>
                    <li><a href="">FANS</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">SHOP</a></li>
                </ul>
            </div>
        </div>
    </header>
)

export default Header