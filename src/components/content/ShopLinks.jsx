import ComicsImg from "../../assets/img/buy-comics-digital-comics.png"
import MerchImg from "../../assets/img/buy-comics-merchandise.png"
import SubImg from "../../assets/img/buy-comics-subscriptions.png"
import LocImg from "../../assets/img/buy-comics-shop-locator.png"
import PwrVisa from "../../assets/img/buy-dc-power-visa.svg"

const ShopLinks = () => (
    <div className="bg-primary">
        <div className="container">
            <div className="d-flex text-white py-5 justify-content-around gap-4">
                <a href="" className="d-flex align-items-center gap-4">
                    <img src={ComicsImg} alt="" width={60} />
                    <p>DIGITAL COMICS</p>
                </a>
                <a href="" className="d-flex align-items-center gap-4">
                    <img src={MerchImg} alt="" width={60} />
                    <p>DC MERCHANDISE</p>
                </a>
                <a href="" className="d-flex align-items-center gap-4">
                    <img src={SubImg} alt="" width={60} />
                    <p>SUBSCRIBTION</p>
                </a>
                <a href="" className="d-flex align-items-center gap-4">
                    <img src={LocImg} alt="" width={60} />
                    <p>COMIC SHOP LOCATOR</p>
                </a>
                <a href="" className="d-flex align-items-center gap-4">
                    <img src={PwrVisa} alt="" width={60} />
                    <p>DC POWER VISA</p>
                </a>
            </div>
        </div>
    </div>
)

export default ShopLinks