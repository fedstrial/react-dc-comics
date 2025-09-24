import FcbkImg from "../../assets/img/footer-facebook.png"
import TwttImg from "../../assets/img/footer-twitter.png"
import YtImg from "../../assets/img/footer-youtube.png"
import PntrstImg from "../../assets/img/footer-pinterest.png"
import PrscpImg from "../../assets/img/footer-periscope.png"

const BottomFooter = () => (
    <div className="bg-gray">
        <div className="container d-flex justify-content-between py-5">
            <div>
                <button id="signupButton" className="fw-bold">SIGN-UP NOW!</button>
            </div>

            <div className="d-flex align-items-center">
                <h3 className="fw-bold follow-color px-4">FOLLOW US</h3>
                <div className="d-flex gap-3">
                    <a href="">
                        <img src={FcbkImg} alt="" />
                    </a>
                    <a href="">
                        <img src={TwttImg} alt="" />
                    </a>
                    <a href="">
                        <img src={YtImg} alt="" />
                    </a>

                    <a href="">
                        <img src={PntrstImg} alt="" />
                    </a>
                    <a href="">
                        <img src={PrscpImg} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default BottomFooter