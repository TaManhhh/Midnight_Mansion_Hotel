import "./Contact.css";
import ContactImg from "../img/Slide2.jpg";
import Header from "../header/Header";
export const Contact = () => {
  return (
      <div>
        <Header/>
        <div
          className="content-rooms"
        >
          <img src={ContactImg} alt=""/>
          <p className="text-rooms">Contact</p>
        </div>
        <div className="grid grid-cols-2 m-14">
        <div className="special-contact">
                <div className="contact-title">Drop us a line</div>
                <div className="sp-des">
                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, a euismod nulla dignissim.
                </div>
                <div>
          <input id="name" type="text" placeholder="Your name" />
        </div>
        <br />
        <div>
          <input id="email" type="text" placeholder="Your email " />
        </div>
        <br />
        <div>
        <input id="number" type="tel" placeholder="Your number" />
        </div>
        <br/>
        <div>
          <textarea
            id="content"
            rows="5"
            cols="83"
            padding-left= "20"
            placeholder="Message..."
          ></textarea>
        </div>
        <br />
        
        <button className="btn">
          <b>SEND NOW</b>
        </button>
        </div>
        <div>
          <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8236793395135!2d105.774373!3d21.0397399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c9bc0a304f%3A0xcf7e439a69beb3de!2zNDcgUC4gTWFpIEThu4tjaCwgTWFpIEThu4tjaCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1659111791611!5m2!1svi!2s"
          style={{
            width: "100%",
            height: 500,
            frameBorder: "0",
            border: "0",
            allowfullScreen: "",
          }}
        ></iframe>
        <div>
          <br />
          <p>Email chúng tôi</p>
          <b>MindX@Hotel.com</b>
          <br />
          <p>Điện thoại</p>
          <b>0999977722</b>
        </div>
      </div>
        </div>
      </div>
  );
};
