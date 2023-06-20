import Navbar from "../../components/navbar/navbar"
import Teks from "../../components/teks/tekspayment"
import Payment from "../../components/payment/payment"

function payment() {
    return (
        <div className="mx-auto max-w-[1910px] relative">
            <Navbar />
            <Teks />
            <Payment />
        </div>
    )
}

export default payment