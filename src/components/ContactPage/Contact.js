import React from "react";
import Title from "../Title";
import "../../Form.css";

export default function Contact() {
  return (
    <section>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <form
            action="https://formspree.io/mbjlnozv"
            method="POST"
            class="contact100-form validate-form"
          >
            <span class="contact100-form-title">Contact Us</span>

            <div
              class="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Name is required"
            >
              <span class="label-input100">Your name ...</span>
              <input
                class="input100"
                type="text"
                name="name"
                placeholder="Your name"
              />
              <span class="focus-input100"></span>
            </div>

            <div
              class="wrap-input100 rs1-wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span class="label-input100">Your Email</span>
              <input
                class="input100"
                type="text"
                name="_replyto"
                placeholder="Email ..."
              />
              <span class="focus-input100"></span>
            </div>

            <div
              class="wrap-input100  validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <span class="label-input100">The Subject</span>
              <input
                class="input100"
                type="text"
                name="subject"
                placeholder="Subject ..."
              />
              <span class="focus-input100"></span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Message is required"
            >
              <span class="label-input100">Your Message</span>
              <textarea
                class="input100"
                name="message"
                placeholder="Your Message Here..."
              />
              <span class="focus-input100"></span>
            </div>

            <div class="container-contact100-form-btn">
              <button type="submit" value="send" class="contact100-form-btn">
                <span>
                  Send
                  <i
                    class="fa fa-long-arrow-right m-l-7"
                    aria-hidden="true"
                  ></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
