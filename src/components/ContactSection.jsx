import { Circle, MapContainer, TileLayer } from "react-leaflet";
import Email from "./Email";
import { renderToStaticMarkup } from "react-dom/server";
import { useState } from "react";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

function ContactSection() {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    betreff: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const renderEmail = async () => {
    return renderToStaticMarkup(
      <Email
        vorname={formData.vorname}
        nachname={formData.nachname}
        message={formData.message}
        email={formData.email}
      />
    );
  };
  const sendMail = async (e) => {
    e.preventDefault();

    try {
      const htmlContent = await renderEmail();
      const response = await fetch("http://192.168.1.2:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: formData.betreff,
          html: htmlContent,
          to: "kacperwajda123@gmail.com",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setFormData({
      vorname: "",
      nachname: "",
      betreff: "",
      email: "",
      message: "",
    });
  };
  return (
    <div
      id="contactinfo"
      className="w-full  pt-16 pb-[50%] md:pb-[0%] md:pt-32  flex flex-col linear-bg-background-contact"
    >
      <p className="linear-text-contact-big md:pl-[12%] pl-[5%] font-bold font-inter md:text-[40px] text-[30px] ">
        Contact Us
      </p>
      <p className="md:text-[20px] md:pl-[12%] pl-[5%] text-[16px] pr-5 md:pr-0 opacity-75 md:w-[700px] text-[#CFCFCF] mt-5">
        If you would like to contact us to arrange a{" "}
        <b className="text-[#91DA38]">customized offer</b>, feel free to do so!
        You can call us or send us an email - we will be happy to answer your
        questions and tailor an offer to your needs
      </p>
      <div className="mt-32 md:pl-[12%] pl-[5%] flex md:w-[703px]  w-[92%] h-[120px] md:h-[152px] mb-24">
        <div className="md:w-[18px] flex w-[10px] h-full  linear-bg-contact "></div>
        <div className="linear-bg-contact-transparent items-center flex pl-4 md:pl-10 h-full w-[100%] md:w-[685px]">
          <div className="flex flex-col  gap-3 md:gap-5">
            <div className="flex items-center">
              <MdOutlinePhone className="text-[#595959] md:text-[32px] text-[25px]" />
              <p className="text-[#ffffff] pl-5 font-light text-[16px] md:text-[22px]">
                Contact phone:
              </p>
              <p className="text-[#9EDB3A] md:pl-8 pl-4 font-bold text-[14px] md:text-[22px]">
                0162 - 8364008
              </p>
            </div>
            <div className="flex items-center">
              <MdOutlineEmail className="text-[#595959] md:text-[32px] text-[25px]" />
              <p className="text-[#ffffff] pl-5 font-light text-[16px] md:text-[22px]">
                Contact e-mail:
              </p>
              <p className="text-[#9EDB3A] md:pl-8 pl-4  font-bold text-[14px] md:text-[22px]">
                marcin0236@wp.pl
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="w-[75%] self-center justify-center  flex items-center "
      >
        <p className=" text-[18px] md:text-[28px] opacity-80 text-[#ffffff] font-semibold">
          Quick message
        </p>
        <div className="flex flex-1 w-[60%] ml-3 h-[1px] bg-[#474747bb]"></div>
      </div>
      <div className="flex self-center h-full flex-col w-[75%] items-center  md:h-[707px] md:flex-row mt-10 mb-10 ">
        <div className=" stroke-bg-message h-full md:pt-[2px] pb-[2px] w-full  flex justify-center items-center md:w-[605px]">
          <div className="linear-bg-message pb-16 w-full h-full  m-[2px] md:pb-10  md:w-[603px]">
            <form
              onSubmit={(e) => sendMail(e)}
              className="md:pl-12 pl-6 pt-6 h-full md:pt-10 gap-8 md:gap-0 flex justify-between w-[100%] md:w-[520px] flex-wrap"
            >
              <div className="flex w-[90%] md:w-auto flex-col">
                <div className="flex flex-col md:w-[219px] ">
                  <div className="flex items-center">
                    <p className="md:text-[18px] text-[15px] text-[#EFEFEF] font-medium">
                      Vorname
                    </p>
                    <div className="bg-[#474747]  ml-3 h-[1px] w-full"></div>
                  </div>
                </div>
                <input
                  type="text"
                  className="linear-bg-form-input text-[#ffffff] outline-none pl-3 mt-4 placeholder:text-[#636363] rounded-[6px] w-full md:w-[219px] h-[41px] border-1 border-[#424242]"
                  placeholder="Vorname"
                  name="vorname"
                  value={formData.vorname}
                  onChange={handleChange}
                  required
                  id="inputvorname"
                />
              </div>
              <div className="flex w-[90%] md:w-auto flex-col">
                <div className="flex flex-col md:w-[219px] w-full">
                  <div className="flex items-center">
                    <p className="md:text-[18px] text-[15px] text-[#EFEFEF] font-medium">
                      Nachname
                    </p>
                    <div className="bg-[#474747] ml-3 h-[1px] w-full"></div>
                  </div>
                </div>
                <input
                  type="text"
                  className="linear-bg-form-input outline-none text-[#ffffff] pl-3 mt-4 placeholder:text-[#636363] rounded-[6px] w-full md:w-[219px] h-[41px] border-1 border-[#424242]"
                  placeholder="Nachname"
                  name="nachname"
                  value={formData.nachname}
                  onChange={handleChange}
                  required
                  id="inputnachname"
                />
              </div>
              <div className="flex w-[90%] md:w-auto flex-col md:mt-10">
                <div className="flex flex-col md:w-[219px] ">
                  <div className="flex items-center">
                    <p className="md:text-[18px] text-[15px] text-[#EFEFEF] font-medium">
                      Betreff
                    </p>
                    <div className="bg-[#474747] ml-3 h-[1px] w-full"></div>
                  </div>
                </div>
                <input
                  type="text"
                  className="linear-bg-form-input outline-none text-[#ffffff] pl-3 mt-4 placeholder:text-[#636363] rounded-[6px] w-full md:w-[219px] h-[41px] border-1 border-[#424242]"
                  placeholder="Betreff"
                  name="betreff"
                  value={formData.betreff}
                  onChange={handleChange}
                  required
                  id="inputbetreff"
                />
              </div>
              <div className="flex w-[90%] md:w-auto flex-col md:mt-10">
                <div className="flex flex-col md:w-[219px] ">
                  <div className="flex items-center">
                    <p className="md:text-[18px] text-[15px] text-[#EFEFEF] font-medium">
                      Email
                    </p>
                    <div className="bg-[#474747] ml-3 h-[1px] w-full"></div>
                  </div>
                </div>
                <input
                  type="text"
                  className="linear-bg-form-input outline-none text-[#ffffff] pl-3 mt-4 placeholder:text-[#636363] rounded-[6px] w-full md:w-[219px] h-[41px] border-1 border-[#424242]"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  id="inputemail"
                />
              </div>
              <div className="flex w-[90%] md:w-auto flex-col md:mt-10">
                <div className="flex flex-col md:w-[474px] ">
                  <div className="flex items-center">
                    <p className="md:text-[18px] text-[15px] text-[#EFEFEF] font-medium">
                      Ihre Nachricht
                    </p>
                    <div className="bg-[#474747] ml-4 h-[1px] w-[70%]"></div>
                  </div>
                </div>
                <textarea
                  type="text"
                  className="linear-bg-form-input outline-none text-[#ffffff] h-[174px] pt-2 pl-3 mt-4 placeholder:text-[#636363] rounded-[6px]  md:w-[474px] border-1 border-[#424242]"
                  placeholder="Ihre Nachricht an uns"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  id="inputmessage"
                />
              </div>
              <div className="w-full justify-end flex mt-10">
                <button
                  type="submit"
                  className="flex hover:translate-y-[1px] hover:text-[#e0fdc5] active:text-white duration-300 active:-translate-y-3 md:w-[165px] w-[140px] md:h-[47px] h-[40px] md:mr-0 mr-7 text-[#102E0C] text-[18px] justify-center items-center font-semibold  linear-bg-send-message mt-10 rounded-[8px]"
                >
                  Absenden
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-[50%]  w-full h-[520px] md:h-full">
          <MapContainer
            center={[53.66532, 9.90534]}
            zoom={11}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />

            <Circle
              center={[53.66532, 9.90534]}
              radius={8850}
              color="#cdff7c80"
            />
          </MapContainer>
        </div>
      </div>
      <div className="flex h-[100px]"></div>
    </div>
  );
}

export default ContactSection;
