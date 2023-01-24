import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Container, FormGroup } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { RemoveContext } from "../../router/AppRoute";

const acceptedPaymentType = ['bkash', 'rocket', 'nagad'];

const BkashPay = () => {
  return <>
    <h4>বিকাশে পেমেন্ট করুন

      <img src="https://download.logo.wine/logo/BKash/BKash-Logo.wine.png"
        width={80} alt="bKash LOGO" />
    </h4>
    <h5 className="text-danger">BKash No: +8801974953486(এই নম্বরে ডেলিভারি চার্জ ১০০ টাকা দিয়ে আপনার অর্ডার কনফার্ম করুন)
</h5>
  </>
}
const RocketPay = () => {
  return <>
    <h4>রকেটে পেমেন্ট করুন

      <img src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png"
        width={80} alt="bKash LOGO" />
    </h4>
    <h5 className="text-danger">Rocket No: +8801974953486(এই নম্বরে ডেলিভারি চার্জ ১০০ টাকা দিয়ে আপনার অর্ডার কনফার্ম করুন)
</h5>
  </>
}
const NagadPay = () => {
  return <>
    <h4>নগদে পেমেন্ট করুন

      <img src="https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg"
        width={80} alt="bKash LOGO" />
    </h4>
    <h5 className="text-danger">Nagad No: +8801974953486(এই নম্বরে ডেলিভারি চার্জ ১০০ টাকা দিয়ে আপনার অর্ডার কনফার্ম করুন)
</h5>
  </>
}

const PaymentMethodEle = ({ cart }) => {
  const [_, handleBuy] = useContext(RemoveContext);
  const { type } = useParams();
  const history = useHistory();
  const [addr, setAddr] = useState('')
  const [txId, setTxId] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useAuth();
  function GetTitle() {
    if (type === 'bkash')
      return <BkashPay />
    else if (type === 'rocket')
      return <RocketPay />
    else if (type === 'nagad')
      return <NagadPay />
    else return <></>
  }

  const handleSubmit = () => {
    setLoading(true)
    let data = {
      shippingaddr: addr,
      method: type,
      txId, cart: cart.map(v => ({ ...v, des: undefined })),
      cartUser: {
        uid: user.uid,
        email: user.email
      }
    }
    axios.post("http://localhost:5000/newOrder", data).then((res) => {
      setLoading(false)
      if (res.data.insertedId) {
        alert("Order created successfully!");
        handleBuy()
        history.push('/cart')
      } else {
        alert("Opps! Something is wrong!")
      }
    });

  }

  return <form
    onSubmit={(e) => {
      e.preventDefault()
      handleSubmit()
    }}
  >
    <GetTitle />
    <FormGroup>
      <input className="input-field" placeholder="আপনার ঠিকানা লিখুন
" onChange={(e) => setAddr(e.currentTarget.value)} required />
    </FormGroup>
    <FormGroup>
      <input className="input-field" placeholder="ট্রানজেকশন আইডি
" onChange={(e) => setTxId(e.currentTarget.value)} required />
    </FormGroup>
    <input type="submit" value="Submit" disabled={loading} className="submit-btn" />
    <Link to={'/buy'}>অন্য উপায়ে পেমেন্ট করুন
</Link>
  </form>

}

const Payment = ({ cart }) => {
  const { type } = useParams();
  return <>
    <Container>
      {acceptedPaymentType.indexOf(type) > -1 ? <PaymentMethodEle cart={cart} /> :
        <> <div className="alert alert-danger" role="alert" >Invalid Payment Type</div>
          <Link to={'/buy'}><Button color="danger">Go back</Button></Link></>}
    </Container>
    {/* <Footer /> */}
  </>;

};

export default Payment;
