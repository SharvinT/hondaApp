import React from "react";

const FormCard = () => {
  return (
    <div className="formCard">
      <h3>Place your order bid</h3>
      <hr />
      <h2>₹2,50,000</h2>
      <div className="buttons">
        <button className="fixed">Fixed Price</button>
        <button className="rate">Rate Negotiable</button>
      </div>
      {/* <form> */}
      <form>
        <div className="form">
          <label className="numLabel">Enter your mobile number*</label>
          <input type="text" value="+91 9988998765" required />
          <label className="nameLabel">Enter your Name*</label>
          <input type="text" className="active" required />
          <input type="text" placeholder="Enter Remarks(optional)" />
        </div>
        <button type="submit">Bid Now</button>
      </form>
      {/* </form> */}
    </div>
  );
};

export default FormCard;
