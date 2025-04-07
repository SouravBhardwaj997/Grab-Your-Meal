export default function About() {
  return (
    <>
      {/* <!-- Title Page */}
      <section
        className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
        style={{ backgroundImage: "url(assets/images/bg-title-page-03.jpg)" }}
      >
        <h2 className="tit6 t-center">About Us</h2>
      </section>

      {/* <!-- Our Story  */}
      <section className="bg2-pattern p-t-116 p-b-110 t-center p-l-15 p-r-15">
        <span className="tit2 t-center">Healthy Food Service</span>

        {/* <h3 className="tit3 t-center m-b-35 m-t-5">Our Story</h3> */}
        <h3 className="tit3 t-center m-b-35 m-t-5">About Us</h3>

        <p className="t-center size32 m-l-r-auto">
          We, Dial A Meal Tiffin Services, situated at Phagwara, Punjab, offer
          pre-planned meal packages that a customer can customize to their
          liking. It is our endeavor to make sure that you enjoy homely cooked
          food at very affordable rates and hassle-free packages. We offer a
          wide array of meal options in vegetarian and non-vegetarian sections.
          Each option is not just finger-licking good but highly nutritious and
          prepared under very hygienic conditions
        </p>
      </section>

      {/* <!-- Video 
      <section
        className="section-video parallax100"
        style={{ backgroundImage: "url(assets/images/header-menu-01.jpg)" }}
      >
        <div className="content-video t-center p-t-225 p-b-250">
          <span className="tit2 p-l-15 p-r-15">Discover</span>

          <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3">Our Video</h3>

          <div
            className="btn-play ab-center size16 hov-pointer m-l-r-auto m-t-43 m-b-33"
            data-toggle="modal"
            data-target="#modal-video-01"
          >
            <div className="flex-c-m sizefull bo-cir bgwhite color1 hov1 trans-0-4">
              <i className="fa fa-play fs-18 m-l-2" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Delicious & Romantic */}
      <section className="bg1-pattern p-t-120 p-b-105">
        <div className="container">
          {/* <!-- Delicious  */}
          <div className="row">
            <div className="col-md-6 p-t-45 p-b-30">
              <div className="wrap-text-delicious t-center">
                <span className="tit2 t-center">Delicious</span>

                <h3 className="tit3 t-center m-b-35 m-t-5">RECIPES</h3>

                <p className="t-justify m-b-22 size3 m-l-r-auto">
                  Whether you're enjoying a quiet lunch at your desk or sharing
                  a feast with loved ones, our goal is to bring a smile to your
                  face with every bite.
                </p>
              </div>
            </div>

            <div className="col-md-6 p-b-30">
              <div className="wrap-pic-delicious size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                <img src="assets/images/our-story-01.jpg" alt="IMG-OUR" />
              </div>
            </div>
          </div>

          {/* <!-- Romantic  */}
          <div className="row p-t-170">
            <div className="col-md-6 p-b-30">
              <div className="wrap-pic-romantic size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                <img src="assets/images/our-story-02.jpg" alt="IMG-OUR" />
              </div>
            </div>

            <div className="col-md-6 p-t-45 p-b-30">
              <div className="wrap-text-romantic t-center">
                <span className="tit2 t-center">Delivered with </span>

                <h3 className="tit3 t-center m-b-35 m-t-5">Love</h3>

                <p className="t-center m-b-22 size3 m-l-r-auto">
                  We understand that life can get busy, but that doesn’t mean
                  you should compromise on quality meals. With every tiffin, we
                  promise a culinary experience that not only satisfies your
                  hunger but also comforts your soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Banner  */}
      {/* <div
        className="parallax0 parallax100"
        style={{ backgroundImage: "url(assets/images/bg-cover-video-02.jpg)" }}
      >
        <div className="overlay0-parallax t-center size33"></div>
      </div> */}

      {/* <!-- Chef  */}
      <section className="section-chef bgwhite p-t-115 p-b-95">
        <div className="container t-center">
          <span className="tit2 t-center">Services</span>

          <h3 className="tit5 t-center m-b-50 m-t-5">
            Exceptional range of services
          </h3>

          <div className="row">
            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              {/* <!-- -Block5  */}
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#">
                    <img src="assets/images/avatar-01.jpg" alt="IGM-AVATAR" />
                  </a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    Nutri-Meal Lunch
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    Service
                  </span>

                  <p className="t-center">
                    Yes, you can virtually design your own meals and choose from
                    plenty of options provided by us.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              {/* <!-- -Block5 */}
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#">
                    <img src="assets/images/avatar-03.jpg" alt="IGM-AVATAR" />
                  </a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    customized Tiffin
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    Service
                  </span>

                  <p className="t-center">
                    What would you choose? Stale cooked hotel food or goodness
                    and wholeness of nutritious food?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-4 m-l-r-auto p-b-30">
              {/* <!-- -Block5  */}
              <div className="blo5 pos-relative p-t-60">
                <div className="pic-blo5 size14 bo4 wrap-cir-pic hov-img-zoom ab-c-t">
                  <a href="#">
                    <img src="assets/images/avatar-05.jpg" alt="IGM-AVATAR" />
                  </a>
                </div>

                <div className="text-blo5 size34 t-center bo-rad-10 bo7 p-t-90 p-l-35 p-r-35 p-b-30">
                  <a href="#" className="txt34 dis-block p-b-6">
                    Corporate Catering
                  </a>

                  <span className="dis-block t-center txt35 p-b-25">
                    Service
                  </span>

                  <p className="t-center">
                    We make sure you bond well with your fellow colleagues over
                    tasty and satiating food dishes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Sign up  */}
      <div className="section-signup bg1-pattern p-t-85 p-b-85">
        <form className="flex-c-m flex-w flex-col-c-m-lg p-l-5 p-r-5">
          <span className="txt5 m-10">Specials Sign up</span>

          <div className="wrap-input-signup size17 bo2 bo-rad-10 bgwhite pos-relative txt10 m-10">
            <input
              className="bo-rad-10 sizefull txt10 p-l-20"
              type="text"
              name="email-address"
              placeholder="Email Adrress"
            />
            <i className="fa fa-envelope ab-r-m m-r-18" aria-hidden="true"></i>
          </div>

          {/* <!-- Button3  */}
          <button
            type="submit"
            className="btn3 flex-c-m size18 txt11 trans-0-4 m-10"
          >
            Sign-up
          </button>
        </form>
      </div>
    </>
  );
}
