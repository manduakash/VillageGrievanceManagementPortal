<!DOCTYPE html>
<html
  class="style-green-2 custom-colors-enabled custom-primary-button-color-bright custom-accent-color-bright custom_fonts comps live_website unicorn-platform-website"
  lang=""
>
  <head>
    <!-- This page is running on Unicorn Platform. Generated at June 1, 2024, 9:45 AM-->

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link
      rel="stylesheet"
      href="../css/landing.page.main.css"
    />
    <script
      src="../js/landing.page.main.js"
      defer=""
    ></script>

    <link
      href="https://fonts.googleapis.com/css?family=Commissioner:700|Commissioner:400,700&amp;display=swap"
      rel="stylesheet"
    />

    <link
      rel="icon"
      type="image/png"
      href="https://unicorn-cdn.b-cdn.net/35019ab2-bade-453a-9af9-3f6b7b2620b1/"
      sizes="16x16"
    />
    
    <meta property="og:type" content="website" />
    
    <link href="https://rhythm-gather.unicornplatform.page/" rel="canonical" />
    <meta
    name="twitter:url"
      content="https://rhythm-gather.unicornplatform.page/"
      />
      <meta
      property="og:url"
      content="https://rhythm-gather.unicornplatform.page/"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <link
    rel="stylesheet"
    href="../AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
  />
  <link rel="stylesheet" href="../AdminLTE/plugins/fontawesome-free/css/all.min.css" />
  </head>

  <body
    class="custom-google-fonts-enabled comps body--desktop body--loaded"
    id="201412-549674"
  >
    <nav id="uni-navigation-bar" class="js-nav nav-02">
      <div class="container container--large">
        <div class="nav-02__box">
          <div class="nav-02__logo">
            <a class="nav-02__link" href="/" target="_self">
              <span class="content-text nav-02__logo_text text-white"
                ><span class="text-primary">Gramin Sikayat</span> Niwaran
                Portal</span
              >
            </a>
          </div>
          <div class="nav-02__links js-menu">
            <div class="nav-02__list_wrapper nav-02__list_wrapper--black">
              <ul class="nav-02__list nav-02__list--desktop">
                <li class="nav-02__item">
                  <a
                    class="button button--white-outline button--empty"
                    href="#"
                    ><span class="button__text">Home</span>
                  </a>
                  <a
                    class="button button--white-outline button--empty"
                    href="#about-section"
                    ><span class="button__text">About</span>
                  </a>
                  <a
                    class="button button--white-outline button--empty"
                    href="#services-section"
                    ><span class="button__text">Services</span>
                  </a>
                  <a
                    class="button button--white-outline button--empty"
                    href="#contact-section"
                    ><span class="button__text">Contact Us</span>
                  </a>
                  @if (session('isLoggedin'))
                    @if(session('auth_type_id')==1)
                    <a
                      class="button button--white-outline button--empty"
                      href="user-dashboard"
                      ><span class="button__text text">Dashboard </span>
                    </a>
                    <a
                      class="button button--ruby-outline button--empty"
                      href="logout"
                      ><span class="button__text text">Logout </span>
                    </a>
                    @elseif(session('auth_type_id')!=1)
                    <a
                      class="button button--white-outline button--empty"
                      href="admin/admin-dashboard"
                      ><span class="button__text text">Dashboard </span>
                    </a>
                    <a
                      class="button button--ruby-outline button--empty"
                      href="admin/logout"
                      ><span class="button__text text">Logout </span>
                    </a>
                    @endif  
                  @else
                  <a
                    class="button button--white-outline button--empty"
                    href="login"
                    ><span class="button__text">Login</span>
                  </a>
                  <a
                    class="button button--white-outline button--empty"
                    href="sign-up"
                    ><span class="button__text">Register</span>
                  </a>
                  <a
                    class="button button--white-outline button--empty"
                    href="admin/login"
                    ><span class="button__text">Admin</span>
                  </a>
                  @endif
                </li>

                <li class="nav-02__item nav-02__list--black">
                  <div class="buttons-set">
                    <ul class="buttons-set__list">
                      <li class="buttons-set__item">
                        <a
                          class="button button--white-outline"
                          href="user-dashboard"
                          ><span class="button__text"
                            >Raise a Complaint</span
                          ></a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <ul class="nav-02__list nav-02__list--mobile">

                <li class="nav-02__item">
                  <div class="buttons-set">
                    <ul class="buttons-set__list">
                      <li class="buttons-set__item">
                        <a
                          data-stripe-product-id=""
                          data-stripe-mode="payment"
                          data-successful-payment-url=""
                          data-cancel-payment-url=""
                          class="button button--white-bg"
                          href="https://saasfridaydeals.com/"
                          target="_self"
                          ><span class="button__text">Get it</span></a
                        >
                      </li>
                      <li class="buttons-set__item">
                        <a
                          data-stripe-product-id=""
                          data-stripe-mode="payment"
                          data-successful-payment-url=""
                          data-cancel-payment-url=""
                          class="button button--white-outline"
                          href="user-dashboard"
                          target="_self"
                          ><span class="button__text">Raise Complaint</span></a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div class="nav-02__burger">
              <button class="burger burger--black js-open-menu" type="button">
                <div class="burger__box">
                  <div class="burger__inner"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div
      class="page-component__bg_image_box page-component__bg_image_box--dark-bg bg-black-color first_component page-component__bg_image_box--has-image uni-is-dark-bg header-44-parent is-first-component"
      id="header-44-354501"
    >
      <div class="page-component__bg_overlay_box" style="opacity: 0.56"></div>

      <div
        class="page-component__wrapper"
        style="z-index: 16; padding-top: 100px; padding-bottom: 140px"
      >
        <header class="header-44">
          <div class="container">
            <div class="header-44__wrapper">
              <div class="header-44__text_box">
                <h1 class="title-text heading heading--accent text-white">
                  Welcome to Gramin Sikayat Niwaran Portal
                </h1>

                <div class="subtitle-text content_box text-white">
                  <p>
                    Your platform to voice your grievances to your village
                    sarpanch.
                  </p>
                </div>

                <div class="header-44__buttons_box">
                  <div class="buttons-set">
                    <ul class="buttons-set__list">
                      <li class="buttons-set__item">
                        <a
                          data-stripe-product-id=""
                          data-stripe-mode="payment"
                          data-successful-payment-url=""
                          data-cancel-payment-url=""
                          class="button button--accent-bg"
                          href="complaints?state=4&district=0&block=0&gp=0"
                          target="_self"
                          ><span class="button__text">Complaints Feed</span></a
                        >
                      </li>
                      <li class="buttons-set__item">
                        <a
                          data-stripe-product-id=""
                          data-stripe-mode="payment"
                          data-successful-payment-url=""
                          data-cancel-payment-url=""
                          class="button button--accent-outline"
                          href="sign-up"
                          target="_self"
                          ><span class="button__text"
                            >Register</span
                          ></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>

    <div
      class="page-component__bg_image_box bg-white-color tabs-03-parent is-not-first-component"
      id="tabs-03-98551"
    >
      <div class="page-component__bg_overlay_box" style=""></div>

      <div
        class="page-component__wrapper"
        style="z-index: 15; padding-top: 100px; padding-bottom: 100px"
      >
        <div class="tabs-03 graphics-image default-graphics-image" id="about-section">
          <div class="container container--small">
            <div class="title-box title-box--center">
              <h2 class="title-text heading">About</h2>

              <div class="subtitle-text title-box__text content_box">
                Addressing your concerns promptly and effectively.
              </div>
            </div>
          </div>

          <div class="container">
            <div class="tabs-03__box">
              <ul class="tabs-03__buttons_list">
                <li class="tab">
                  <button
                    class="content-text def-12 tab__button state-active-tab js-open-tab"
                    type="button"
                    data-index="tab-0"
                    data-group="my-images-group-tabs-03-98551"
                  >
                    Education
                  </button>
                </li>

                <li class="tab">
                  <button
                    class="content-text def-12 tab__button js-open-tab"
                    type="button"
                    data-index="tab-1"
                    data-group="my-images-group-tabs-03-98551"
                  >
                    Health
                  </button>
                </li>

                <li class="tab">
                  <button
                    class="content-text def-12 tab__button js-open-tab"
                    type="button"
                    data-index="tab-2"
                    data-group="my-images-group-tabs-03-98551"
                  >
                    Development
                  </button>
                </li>
              </ul>
              <div class="tabs-03__item_container">
                <ul
                  class="tabs-03__item_list js-tabs-item-list state-loaded"
                  style="height: 332.229px"
                >
                  <li
                    class="tabs-03__item_box js-tab-content state-active-tab"
                    data-index="tab-0"
                    data-group="my-images-group-tabs-03-98551"
                  >
                    <div
                      class="tabs-03__item js-tab-content-item state-loaded"
                      data-height="424"
                    >
                      <img
                        loading="lazy"
                        class="tabs-03__img js-lightbox-single-image"
                        alt="2а"
                        width="670"
                        height="424"
                        src="../img/services-education.avif"
                        srcset="
                          ../img/services-education.avif?width=290&amp;height=184 290w,
                          ../img/services-education.avif?width=345&amp;height=219 345w,
                          ../img/services-education.avif?width=395&amp;height=250 395w,
                          ../img/services-education.avif?width=570&amp;height=361 570w,
                          ../img/services-education.avif?width=670&amp;height=424 670w,
                          ../img/services-education.avif?width=670&amp;height=424 670w,
                          ../img/services-education.avif?width=670&amp;height=424 670w,
                          ../img/services-education.avif?width=580&amp;height=368 580w,
                          ../img/services-education.avif?width=670&amp;height=424 670w,
                          ../img/services-education.avif?width=670&amp;height=424 670w
                        "
                        sizes="(max-width: 320px) 290px,(max-width: 375px) 345px,(max-width: 425px) 395px,(max-width: 600px) 570px,(max-width: 768px) 670px,(max-width: 950px) 670px,670px"
                      />
                      <div class="tabs-03__text">
                        <h2 class="title-text--inner">
                          Raise your concerns about education.
                        </h2>
                        <div class="content-text content_box">
                          <ul class="services-ul">
                            <li>
                              Don't have enough buildings or supplies in school.
                            </li>
                            <li>
                              There aren't enough teachers in your village.
                            </li>
                            <li>
                              Don't have books or things to help students learn.
                            </li>
                            <li>
                              Students stop going to school for any other
                              reasons.
                            </li>
                          </ul>
                        </div>
                        <div class="tabs-03__cta">
                          <div class="buttons-set">
                            <ul class="buttons-set__list">
                              <li class="buttons-set__item">
                                <a
                                  data-stripe-product-id=""
                                  data-stripe-mode="payment"
                                  data-successful-payment-url=""
                                  data-cancel-payment-url=""
                                  class="button button--accent-bg"
                                  href="education-complaint"
                                  target="_self"
                                  ><span class="button__text"
                                    >Raise a Complaint</span
                                  ></a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    class="tabs-03__item_box js-tab-content"
                    data-index="tab-1"
                    data-group="my-images-group-tabs-03-98551"
                  >
                    <div
                      class="tabs-03__item js-tab-content-item state-loaded"
                      data-height="424"
                    >
                      <img
                        loading="lazy"
                        class="tabs-03__img js-lightbox-single-image"
                        alt="1ф"
                        width="670"
                        height="424"
                        src="../img/services-health.jpg"
                        srcset="
                          ../img/services-health.jpg?width=290&amp;height=184 290w,
                          ../img/services-health.jpg?width=345&amp;height=219 345w,
                          ../img/services-health.jpg?width=395&amp;height=250 395w,
                          ../img/services-health.jpg?width=570&amp;height=361 570w,
                          ../img/services-health.jpg?width=670&amp;height=424 670w,
                          ../img/services-health.jpg?width=670&amp;height=424 670w,
                          ../img/services-health.jpg?width=670&amp;height=424 670w,
                          ../img/services-health.jpg?width=580&amp;height=368 580w,
                          ../img/services-health.jpg?width=670&amp;height=424 670w,
                          ../img/services-health.jpg?width=670&amp;height=424 670w
                        "
                        sizes="(max-width: 320px) 290px,(max-width: 375px) 345px,(max-width: 425px) 395px,(max-width: 600px) 570px,(max-width: 768px) 670px,(max-width: 950px) 670px,670px"
                      />
                      <div class="tabs-03__text">
                        <h2 class="title-text--inner">
                          Voice your health-related issues.
                        </h2>
                        <div class="content-text content_box">
                          <ul class="services-ul">
                            <li>
                              There's a lack of healthcare facilities for
                              villagers to get medical help.
                            </li>
                            <li>
                              Not enough doctors and nurses mean people don't
                              get proper treatment.
                            </li>
                            <li>
                              Villagers struggle to access medicine and basic
                              health services.
                            </li>
                            <li>
                              Many people suffers because they can't get the
                              medical care they need.
                            </li>
                          </ul>
                        </div>
                        <div class="tabs-03__cta">
                          <div class="buttons-set">
                            <ul class="buttons-set__list">
                              <li class="buttons-set__item">
                                <a
                                  data-stripe-product-id=""
                                  data-stripe-mode="payment"
                                  data-successful-payment-url=""
                                  data-cancel-payment-url=""
                                  class="button button--accent-bg"
                                  href="health-complaint"
                                  target="_self"
                                  ><span class="button__text"
                                    >Raise a Complaint</span
                                  ></a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    class="tabs-03__item_box js-tab-content"
                    data-index="tab-2"
                    data-group="my-images-group-tabs-03-98551"
                  >
                    <div
                      class="tabs-03__item js-tab-content-item state-loaded"
                      data-height="424"
                    >
                      <img
                        loading="lazy"
                        class="tabs-03__img js-lightbox-single-image"
                        alt="3в"
                        width="670"
                        height="424"
                        src="../img/services-development.png"
                        srcset="
                          ../img/services-development.png?width=290&amp;height=184 290w,
                          ../img/services-development.png?width=345&amp;height=219 345w,
                          ../img/services-development.png?width=395&amp;height=250 395w,
                          ../img/services-development.png?width=570&amp;height=361 570w,
                          ../img/services-development.png?width=670&amp;height=424 670w,
                          ../img/services-development.png?width=670&amp;height=424 670w,
                          ../img/services-development.png?width=670&amp;height=424 670w,
                          ../img/services-development.png?width=580&amp;height=368 580w,
                          ../img/services-development.png?width=670&amp;height=424 670w,
                          ../img/services-development.png?width=670&amp;height=424 670w
                        "
                        sizes="(max-width: 320px) 290px,(max-width: 375px) 345px,(max-width: 425px) 395px,(max-width: 600px) 570px,(max-width: 768px) 670px,(max-width: 950px) 670px,670px"
                      />
                      <div class="tabs-03__text">
                        <h2 class="title-text--inner">
                            Challenges Facing Rural Development
                        </h2>
                        <div class="content-text content_box">
                          <ul class="services-ul">
                            <li>Poor roads make travel hard, slowing down progress.</li>
                            <li>Villages struggle to get clean water.</li>
                            <li>Electricity is unreliable or missing in village.</li>
                            <li>Limited access to banks and other financial institutions.</li>
                          </ul>
                        </div>
                        <div class="tabs-03__cta">
                          <div class="buttons-set">
                            <ul class="buttons-set__list">
                              <li class="buttons-set__item">
                                <a
                                  data-stripe-product-id=""
                                  data-stripe-mode="payment"
                                  data-successful-payment-url=""
                                  data-cancel-payment-url=""
                                  class="button button--accent-bg"
                                  href="development-complaint"
                                  target="_self"
                                  ><span class="button__text"
                                    >Raise a Complaint</span
                                  ></a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bottom_cta"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="page-component__bg_image_box page-component__bg_image_box--dark-bg bg-custom-color bg-custom-color--dark uni-is-dark-bg posts-04-parent is-not-first-component"
      id="posts-04-786011"
    >
      <div
        class="page-component__bg_overlay_box"
        style="background-color: #2b6542"
      ></div>

      <div
        class="page-component__wrapper"
        style="z-index: 14; padding-top: 80px; padding-bottom: 100px"
        id="services-section"
      >
        <div class="posts-04">
          <div class="container container--small">
            <div class="title-box title-box--center">
              <h2 class="title-text heading text-white">
                Services
              </h2>

              <div class="subtitle-text title-box__text content_box text-white">
                <p>Making a difference in rural areas.</p>
              </div>
            </div>
          </div>

          <div class="container container--mid">
            <div class="sh-4 card-container posts-04__wrapper">
              <a
                href="https://indexgoogle.com/"
                class="posts-04__item"
              >
                <img
                  loading="lazy"
                  alt="Sdsd"
                  class="posts-04__img"
                  height="100"
                  src="https://cdn-icons-png.freepik.com/256/11906/11906213.png"
                  srcset="
                    https://cdn-icons-png.freepik.com/256/11906/11906213.png?width=68&amp;height=60    68w,
                    https://cdn-icons-png.freepik.com/256/11906/11906213.png?width=136&amp;height=120 136w,
                    https://cdn-icons-png.freepik.com/256/11906/11906213.png?width=204&amp;height=180 204w
                  "
                  sizes="68px"
                />

                <h2 class="title-text--inner posts-04__title">
                    Improved Education
                </h2>
                <span class="content-text def-14 posts-04__text"
                  >Addressed education-related complaints.</span
                >
              </a>

              <a
                href="https://cofondr.com/"
                class="posts-04__item"
              >
                <img
                  loading="lazy"
                  alt="Fgh"
                  class="posts-04__img"
                  height="100"
                  src="https://cdn-icons-png.freepik.com/256/11099/11099012.png"
                  srcset="
                    https://cdn-icons-png.freepik.com/256/11099/11099012.png?width=68&amp;height=60    68w,
                    https://cdn-icons-png.freepik.com/256/11099/11099012.png?width=136&amp;height=120 136w,
                    https://cdn-icons-png.freepik.com/256/11099/11099012.png?width=204&amp;height=180 204w
                  "
                  sizes="68px"
                />

                <h2 class="title-text--inner posts-04__title">
                    Better Health Services
                </h2>
                <span class="content-text def-14 posts-04__text"
                  >Resolved health-related issues.</span
                >
              </a>

              <a
                href="https://seobotai.com/"
                class="posts-04__item"
              >
                <img
                  loading="lazy"
                  alt="Jhj"
                  class="posts-04__img"
                  height="100"
                  src="https://cdn-icons-png.freepik.com/256/2942/2942499.png"
                  srcset="
                    https://cdn-icons-png.freepik.com/256/2942/2942499.png?width=68&amp;height=60    68w,
                    https://cdn-icons-png.freepik.com/256/2942/2942499.png?width=136&amp;height=120 136w,
                    https://cdn-icons-png.freepik.com/256/2942/2942499.png?width=204&amp;height=180 204w
                  "
                  sizes="68px"
                />

                <h2 class="title-text--inner posts-04__title">
                    Enhanced Rural Development
                </h2>
                <span class="content-text def-14 posts-04__text"
                  >Tackled Developmental Challenges</span
                >
              </a>
            </div>
            <div class="bottom_cta"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="page-component__bg_image_box bg-white-color features-03-parent is-not-first-component"
      id="features-03-734821"
    >
      <div class="page-component__bg_overlay_box" style=""></div>

      <div
        class="page-component__wrapper"
        style="z-index: 13; padding-top: 80px; padding-bottom: 100px"
      >
        <div class="features-03">
          <div class="container container--small">
            <div class="title-box title-box--center">
              <h2 class="title-text heading">Discover the Benefits of<br> <span class="text-primary">Gramin Sikayat Niwaran Portal</span></h2>

              <div class="subtitle-text title-box__text content_box">
                Get Your Problems Settled Hassle-Free and as soon as Feasible
              </div>
            </div>
          </div>

          <div class="container">
            <ul class="features-03__items">
              <li class="features-03__item">
                <div class="features-03__img_box">
                  <div class="features-03__img">
                    <img
                        loading="lazy" 
                        height="100" 
                        src="https://img.icons8.com/external-avoca-kerismaker/64/external-Unknown-internet-security-avoca-kerismaker.png" 
                        alt="external-Unknown-internet-security-avoca-kerismaker"
                        srcset="
                        https://img.icons8.com/external-avoca-kerismaker/64/external-Unknown-internet-security-avoca-kerismaker.png?width=82&amp;height=60    82w,
                        https://img.icons8.com/external-avoca-kerismaker/64/external-Unknown-internet-security-avoca-kerismaker.png?width=164&amp;height=120 164w,
                        https://img.icons8.com/external-avoca-kerismaker/64/external-Unknown-internet-security-avoca-kerismaker.png?width=204&amp;height=150 204w
                      "
                      sizes="82px"
                    />
                  </div>
                </div>
                <div
                  class="title-text--inner features-03__number def-24 features-03__number--medium"
                >
                  Easy to Raise Complaints
                </div>
                <div class="content-text features-03__word">
                  Select Complaint Category Just Describe It.
                </div>
              </li>

              <li class="features-03__item">
                <div class="features-03__img_box">
                  <div class="features-03__img">
                    <img
                        loading="lazy" 
                        height="100" 
                        src="https://cdn-icons-png.freepik.com/512/11029/11029675.png" 
                        alt="external-Unknown-internet-security-avoca-kerismaker"
                        srcset="
                        https://cdn-icons-png.freepik.com/512/11029/11029675.png?width=82&amp;height=60    82w,
                        https://cdn-icons-png.freepik.com/512/11029/11029675.png?width=164&amp;height=120 164w,
                        https://cdn-icons-png.freepik.com/512/11029/11029675.png?width=204&amp;height=150 204w
                      "
                      sizes="82px"
                    />
                  </div>
                </div>
                <div
                  class="title-text--inner features-03__number def-24 features-03__number--medium"
                >
                  Keep Your Identity Anonymous
                </div>
                <div class="content-text features-03__word">
                  Raise a Complaint without Revealing Identity
                </div>
              </li>

              <li class="features-03__item">
                <div class="features-03__img_box">
                  <div class="features-03__img">
                    <img
                        loading="lazy" 
                        height="100" 
                        src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-completed-customer-feedback-flaticons-lineal-color-flat-icons.png" 
                        alt="external-Unknown-internet-security-avoca-kerismaker"
                        srcset="
                        https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-completed-customer-feedback-flaticons-lineal-color-flat-icons.png?width=82&amp;height=60    82w,
                        https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-completed-customer-feedback-flaticons-lineal-color-flat-icons.png?width=164&amp;height=120 164w,
                        https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-completed-customer-feedback-flaticons-lineal-color-flat-icons.png?width=204&amp;height=150 204w
                    "
                    sizes="82px"
                    />
                  </div>
                </div>
                <div
                  class="title-text--inner features-03__number def-24 features-03__number--medium"
                >
                  Efficient Outcomes
                </div>
                <div class="content-text features-03__word">
                  See Effective & Efficient Results
                </div>
              </li>
            </ul>
            <div class="bottom_cta"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="page-component__bg_image_box bg-light-color steps-01-parent is-not-first-component"
      id="steps-01-411961"
    >
      <div class="page-component__bg_overlay_box" style=""></div>

      <div
        class="page-component__wrapper"
        style="z-index: 12; padding-top: 100px; padding-bottom: 100px"
      >
      <div class="steps-01 graphics-image default-graphics-image">
        <div class="container container--small">
          <div class="title-box title-box--center">
            <h2 class="title-text heading">The Process Simplified</h2>
            <div class="subtitle-text title-box__text content_box">
              <p>Follow these simple steps to raise a complaint quickly and efficiently.</p>
            </div>
          </div>
        </div>
      
        <div class="container">
          <ul class="steps-01__list">
            <li class="steps-01__item">
              <div class="steps-01__number color-main">1</div>
              <div class="steps-01__content">
                <div class="steps-01__text_box">
                  <h2 class="title-text--inner steps-01__heading">Select Your Preferred Category of Complaint</h2>
                  <div class="content_box">
                    <div class="content-text steps-01__text">
                      <p>Choose the category that best matches the nature of your complaint.</p>
                    </div>
                  </div>
                </div>
                <div class="steps-01__img_box">
                  <img
                    loading="lazy"
                    alt="Step 1 Image"
                    width="155"
                    height="175"
                    class="steps-01__img"
                    src="https://cdn-icons-png.freepik.com/256/4486/4486763.png"
                    srcset="
                      https://cdn-icons-png.freepik.com/256/4486/4486763.png?width=250&height=141 250w,
                      https://cdn-icons-png.freepik.com/256/4486/4486763.png?width=275&height=155 275w
                    "
                    sizes="(max-width: 320px) 250px, (max-width: 375px) 275px, (max-width: 425px) 275px, (max-width: 600px) 275px, (max-width: 768px) 275px, 275px"
                  />
                </div>
              </div>
            </li>
      
            <li class="steps-01__item">
              <div class="steps-01__number color-main">2</div>
              <div class="steps-01__content">
                <div class="steps-01__text_box">
                  <h2 class="title-text--inner steps-01__heading">Fill Required Complaint Details</h2>
                  <div class="content_box">
                    <div class="content-text steps-01__text">
                      <p>Provide all necessary details about your complaint in the form provided.</p>
                    </div>
                  </div>
                </div>
                <div class="steps-01__img_box">
                  <img
                    loading="lazy"
                    alt="Step 2 Image"
                    width="155"
                    height="175"
                    class="steps-01__img"
                    src="https://cdn-icons-png.freepik.com/256/1455/1455095.png"
                    srcset="
                      https://cdn-icons-png.freepik.com/256/1455/1455095.png?width=250&height=141 250w,
                      https://cdn-icons-png.freepik.com/256/1455/1455095.png?width=275&height=155 275w
                    "
                    sizes="(max-width: 320px) 250px, (max-width: 375px) 275px, (max-width: 425px) 275px, (max-width: 600px) 275px, (max-width: 768px) 275px, 275px"
                  />
                </div>
              </div>
            </li>
      
            <li class="steps-01__item">
              <div class="steps-01__number color-main">3</div>
              <div class="steps-01__content">
                <div class="steps-01__text_box">
                  <h2 class="title-text--inner steps-01__heading">Provide a Visual Evidence (Image)</h2>
                  <div class="content_box">
                    <div class="content-text steps-01__text">
                      <p>Upload any relevant images to support your complaint.</p>
                    </div>
                  </div>
                </div>
                <div class="steps-01__img_box">
                  <img
                    loading="lazy"
                    alt="Step 3 Image"
                    width="155"
                    height="175"
                    class="steps-01__img"
                    src="https://cdn-icons-png.freepik.com/256/8428/8428577.png"
                    srcset="
                      https://cdn-icons-png.freepik.com/256/8428/8428577.png?width=250&height=141 250w,
                      https://cdn-icons-png.freepik.com/256/8428/8428577.png?width=275&height=155 275w
                    "
                    sizes="(max-width: 320px) 250px, (max-width: 375px) 275px, (max-width: 425px) 275px, (max-width: 600px) 275px, (max-width: 768px) 275px, 275px"
                  />
                </div>
              </div>
            </li>
      
            <li class="steps-01__item">
              <div class="steps-01__number color-main">4</div>
              <div class="steps-01__content">
                <div class="steps-01__text_box">
                  <h2 class="title-text--inner steps-01__heading">And Just Submit</h2>
                  <div class="content_box">
                    <div class="content-text steps-01__text">
                      <p>Submit your complaint and track its progress through our platform.</p>
                    </div>
                  </div>
                </div>
                <div class="steps-01__img_box">
                  <img
                    loading="lazy"
                    alt="Step 4 Image"
                    width="155"
                    height="175"
                    class="steps-01__img"
                    src="https://cdn-icons-png.freepik.com/256/12366/12366714.png"
                    srcset="
                      https://cdn-icons-png.freepik.com/256/12366/12366714.png?width=250&height=141 250w,
                      https://cdn-icons-png.freepik.com/256/12366/12366714.png?width=275&height=155 275w
                    "
                    sizes="(max-width: 320px) 250px, (max-width: 375px) 275px, (max-width: 425px) 275px, (max-width: 600px) 275px, (max-width: 768px) 275px, 275px"
                  />
                </div>
              </div>
            </li>
          </ul>
          <div class="steps-01__last_bubble">
            <img
              loading="lazy"
              src="https://cdn-icons-png.freepik.com/256/14382/14382540.png"
              class="steps-01__last_bubble_img"
              alt="Process Complete"
            />
          </div>
          <div class="bottom_cta"></div>
        </div>
      </div>
      
      </div>
    </div>

    <div
      class="page-component__bg_image_box bg-white-color testimonials-02-parent is-not-first-component"
      id="testimonials-02-237351"
    >
      <div class="page-component__bg_overlay_box" style=""></div>

      <div
        class="page-component__wrapper"
        style="z-index: 11; padding-top: 80px; padding-bottom: 120px"
      >
        <div class="testimonials-02">
          <div class="container container--small">
            <div class="title-box title-box--center">
              <h2 class="title-text heading">Resolved Complaints</h2>

              <div class="subtitle-text title-box__text content_box">
                <p>User Experiences with this Portal&nbsp;</p>
              </div>
            </div>
          </div>

          <div class="container container--large testimonials-02__wrapper">
            @if(count($complaints) > 0)
              @foreach($complaints as $complaint)
              <div class="sh-4 card-container testimonials-02__item">
                <h4 class="title-text text-secondary">{{ $complaint->complainant_name }}</h4>

                <div class="content_box">
                  <div class="content-text testimonials-02__text">
                    <p>
                      {{ $complaint->complaint_desc }}
                    </p>
                  </div>
                </div>
                <div class="content-text def-12 testimonials-02__author">
                  {{ $complaint->village }}, {{ $complaint->district->district_name }}, {{ $complaint->state->state_name }}<br>
                  {{ $complaint->updated_at }}
                </div>
                <div class="testimonials-02__box">
                  <div class="feature__button_box">
                    <a
                      data-stripe-product-id=""
                      data-stripe-mode="payment"
                      data-successful-payment-url=""
                      data-cancel-payment-url=""
                      class="button button--empty button--accent-outline"
                      href="/complaints?complaint_no={{ $complaint->id }}" 

                    >
                    <span class="button__text">Complaint Resolved</span>
                      <span class="icon1">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="10px" width="20" height="25" viewBox="-10 10 58 58">
                              <path fill="#c8e6c9" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#4caf50" d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"></path>
                          </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              @endforeach
            @else
            <div class="sh-4 card-container testimonials-02__item">
              <h4 class="title-text text-secondary">No complaint has been resolved yet. Please check again later.</h4>
            </div>
            @endif
          </div>
          <div class="bottom_cta container"></div>
        </div>
      </div>
    </div>

    <div
      class="page-component__bg_image_box bg-light-color cta_button-01-parent is-not-first-component"
      id="cta_button-01-889171"
    >
      <div class="page-component__bg_overlay_box" style=""></div>

      <div
        class="page-component__wrapper"
        style="z-index: 10; padding-top: 80px; padding-bottom: 100px"
        id="contact-section"
      >
        <div class="cta_button-01">
          <div class="container container--small">
            <div class="title-box title-box--center">
              <h2 class="title-text heading">Contact Us</h2>

              <div class="subtitle-text title-box__text content_box">
                <p>
                    Please feel free to contact us if your complaint remains unresolved or for any updates regarding your filled complaint. We're here to assist you and ensure your concerns are addressed promptly.
                </p>
              </div>
            </div>
          </div>

          <div class="container container--small">
            <div class="cta_button-01__button_box">
              <div class="buttons-set">
                <ul class="buttons-set__list">
                  <li class="buttons-set__item">
                    <a
                      data-stripe-product-id=""
                      data-stripe-mode="payment"
                      data-successful-payment-url=""
                      data-cancel-payment-url=""
                      class="button button--accent-outline"
                      href="https://saasfridaydeals.com/"
                      target="_self"
                      ><span class="button__text">Contact</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="popup-component js-custom-popup page-component__bg_image_box bg-white-color first_component popup-component_no-image popup-01-parent is-not-first-component"
      id="popup-01-success_default"
    >
      <button
        class="popup-component__close-button js-close-custom-popup-button"
      >
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.0806 17.9986L30.6275 5.42673C30.8043 5.2178 30.6556 4.90039 30.3824 4.90039H27.1762C26.9873 4.90039 26.8065 4.98477 26.682 5.12941L17.9833 15.4995L9.28465 5.12941C9.16411 4.98477 8.98331 4.90039 8.79045 4.90039H5.5842C5.31099 4.90039 5.16233 5.2178 5.33911 5.42673L15.886 17.9986L5.33911 30.5705C5.29951 30.6171 5.2741 30.674 5.26591 30.7346C5.25771 30.7952 5.26708 30.8568 5.29288 30.9122C5.31869 30.9677 5.35985 31.0145 5.41149 31.0472C5.46313 31.0799 5.52307 31.0972 5.5842 31.0968H8.79045C8.97929 31.0968 9.16009 31.0124 9.28465 30.8678L17.9833 20.4977L26.682 30.8678C26.8025 31.0124 26.9833 31.0968 27.1762 31.0968H30.3824C30.6556 31.0968 30.8043 30.7794 30.6275 30.5705L20.0806 17.9986Z"
            fill="white"
          ></path>
        </svg>
      </button>
      <div class="popup-component__bg_image_box">
        <div class="page-component__bg_overlay_box" style=""></div>

        <div
          class="page-component__wrapper"
          style="z-index: 10; padding-top: 1px; padding-bottom: 1px"
        >
          <div class="popup-01 graphics-image default-graphics-image">
            <div class="container container--premid popup-01__container">
              <div class="popup-01__left">
                <div class="popup-01__content">
                  <h2 class="title-text heading popup-01__heading">
                    Submission Successful
                  </h2>

                  <p class="subtitle-text content_box popup-01__text">
                    The form has been successfully submitted.
                  </p>

                  <div class="popup-01__cta-box">
                    <div class="buttons-set">
                      <ul class="buttons-set__list">
                        <li class="buttons-set__item">
                          <a
                            data-stripe-product-id=""
                            data-stripe-mode="payment"
                            data-successful-payment-url=""
                            data-cancel-payment-url=""
                            class="button button--black-bg"
                            href="/"
                            onclick="event.preventDefault(); window.unicornplatform.closeAllPopups();"
                            ><span class="button__text">Back to site</span></a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-custom-color text-white">
      <footer class="footer-02" id="footer" style="background-color: #2b6542">
        <div class="container">
          <div class="footer-02__wrapper">
            <div class="content-text footer-02__text content_box">
              © 2024&nbsp; Gramin Sikayat Niwaran Portal | All rights reserved.
            </div>
            {{-- <div class="social-buttons">
              <ul class="social-buttons__list">
                <li class="social-buttons__item">
                  <a
                    class="social-buttons__link social-buttons__link--twitter"
                    href="https://twitter.com/unicornplatform"
                    ><img
                      loading="lazy"
                      class="social-buttons__icon"
                      alt="twitter icon"
                      src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/social/white/x.svg"
                  /></a>
                </li>
                <li class="social-buttons__item">
                  <a
                    class="social-buttons__link social-buttons__link--producthunt"
                    href="https://www.producthunt.com/posts/unicorn-platform-v3-0/"
                    ><img
                      loading="lazy"
                      class="social-buttons__icon"
                      alt="producthunt icon"
                      src="https://dvzvtsvyecfyp.cloudfront.net/static/img/icons/social/white/product-hunt.svg"
                  /></a>
                </li>
              </ul>
            </div> --}}
          </div>
        </div>
      </footer>
    </div>



    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button
              class="pswp__button pswp__button--close"
              title="Close (Esc)"
            ></button>
            <button
              class="pswp__button pswp__button--share"
              title="Share"
            ></button>
            <button
              class="pswp__button pswp__button--fs"
              title="Toggle fullscreen"
            ></button>
            <button
              class="pswp__button pswp__button--zoom"
              title="Zoom in/out"
            ></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
          >
            <div class="pswp__share-tooltip"></div>
          </div>
          <button
            class="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          ></button>
          <button
            class="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          ></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>
