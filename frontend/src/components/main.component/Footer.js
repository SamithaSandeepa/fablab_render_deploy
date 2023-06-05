import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark">
      <section className="d-flex justify-center justify-between p-4 border-b">
        <div className="me-5 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="flex my-auto">
          <a
            href="https://www.facebook.com/FabLankaFoundation/"
            className="me-4 text-reset"
          >
            <FaFacebookF />
          </a>
          <a href="" className="me-4 text-reset">
            <FaTwitter />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGoogle />
          </a>
          <a
            href="https://www.instagram.com/fab_lanka/"
            className="me-4 text-reset"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/fablanka/"
            className="me-4 text-reset"
          >
            <FaLinkedin />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGithub />
          </a>
        </div>
      </section>

      <section>
        <div className="container mx-auto mt-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mb-4 items-center">
              <h6 className="text-uppercase font-bold mb-4">
                <span className="text-reset">FabLanka</span>
              </h6>
              <img
                className="m-auto"
                src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/24x24.png"
                width={100}
                height={100}
                alt="Fablanka logo"
              />
            </div>

            <div className="mb-4 text-left">
              <h6 className="text-uppercase font-bold mb-4">Products</h6>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Our Plan
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Technology
                </a>
              </p>
            </div>

            <div className="mb-4 text-left">
              <h6 className="text-uppercase font-bold mb-4">Useful links</h6>
              <p>
                <a href="/about" className="text-reset">
                  Our Team
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Constact Us
                </a>
              </p>
              <p>
                <a href="industrytec" className="text-reset">
                  Industry 4.0 Technologies
                </a>
              </p>
            </div>

            <div className="mb-4 text-left">
              <h6 className="text-uppercase font-bold mb-4">Contact</h6>
              <p>
                <span className="inline-block align-middle mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-map-pin"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#616060"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={12} cy={11} r={3} />
                    <path d="M17.657 16.657l-4.243 -4.243a5 5 0 1 0 -7.07 0l-4.244 4.243" />
                    <path d="M11 7a2 2 0 1 0 0 -4a2 2 0 1 0 0 4" />
                  </svg>
                </span>
                NO.19 Public Library complex, Makadura, Gonavila.
              </p>
              <p>
                <span className="inline-block align-middle mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#616060"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x={3} y={5} width={18} height={14} rx={2} />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </span>
                fablabmakandura@gmail.com
              </p>
              <p>
                <span className="inline-block align-middle mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#616060"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5c.934 2.294 1.879 3.863 3 5a9 9 0 0 1 -2 2l-3 1a1 1 0 0 1 -1 -1v-2.5" />
                    <path d="M11 17l1.5 -4.5a1.5 1.5 0 0 1 3 0l3.5 7" />
                    <path d="M21 10h-4l-2 -2" />
                  </svg>
                </span>
                +94 31 2297029
              </p>
              <p>
                <span className="inline-block align-middle mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-printer"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#616060"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9v3a3 3 0 0 0 3 3h2a3 3 0 0 0 3 -3v-3" />
                    <rect x={3} y={4} width={18} height={8} rx={3} />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={8} y1={4} x2={8} y2={8} />
                    <line x1={16} y1={4} x2={16} y2={8} />
                  </svg>
                </span>
                +94 31 2297029
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 FabLanka. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
