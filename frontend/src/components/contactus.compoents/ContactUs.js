import React from "react";

function ContactUs() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:justify-center mt-8">
        <div className="md:w-1/2">
          {/* <h1 className="text-3xl font-bold mb-6">Contact Us</h1> */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-3">
            <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
            <p className="mb-4">
              Feel free to send us a message if you have any questions or
              comments.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="font-bold mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded-lg py-2 px-3 w-full"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="font-bold mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded-lg py-2 px-3 w-full"
                  placeholder="youremail@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="font-bold mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border rounded-lg py-2 px-3 w-full"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-bold mb-4">Contact Information</h2>
            <p className="mb-2">
              <i className="fas fa-envelope mr-2"></i>
              <strong>Email:</strong> fablabmakandura@gmail.com
            </p>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <strong>Address:</strong> NO.19 Public Library complex, Makadura,
              Gonavila.
            </p>
            <p className="mb-2">
              <i className="fas fa-phone mr-2"></i>
              <strong>Phone:</strong> +94 31 229 7029
            </p>
          </div>
          {/* <div className="col-span-4 item-center py-5 pl-48">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNipunaPerera99%2F&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=797828301687659"
              width="400"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
