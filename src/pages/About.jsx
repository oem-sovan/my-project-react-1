export default function Resume() {
  return (
    <>
      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list"></i>

        <div className="profile-img">
          <img
            src="assets/img/my-profile-img.jpg"
            alt=""
            className="img-fluid rounded-circle"
          />
        </div>

        <a
          href="index.html"
          className="logo d-flex align-items-center justify-content-center"
        >
          <h1 className="sitename">Alex Smith</h1>
        </a>

        <div className="social-links text-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bi bi-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero">
                <i className="bi bi-house navicon"></i>Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bi bi-person navicon"></i> About
              </a>
            </li>
            <li>
              <a href="#resume">
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i className="bi bi-images navicon"></i> Portfolio
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="bi bi-hdd-stack navicon"></i> Services
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <i className="bi bi-menu-button navicon"></i>{" "}
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Dropdown 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Dropdown 2</a>
                </li>
                <li>
                  <a href="#">Dropdown 3</a>
                </li>
                <li>
                  <a href="#">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#contact">
                <i className="bi bi-envelope navicon"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="page-title dark-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">Service Details</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Service Details</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="services-list">
                  <a href="#" className="active">
                    Web Design
                  </a>
                  <a href="#">Software Development</a>
                  <a href="#">Product Management</a>
                  <a href="#">Graphic Design</a>
                  <a href="#">Marketing</a>
                </div>

                <h4>Enim qui eos rerum in delectus</h4>
                <p>
                  Nam voluptatem quasi numquam quas fugiat ex temporibus quo
                  est. Quia aut quam quod facere ut non occaecati ut aut.
                  Nesciunt mollitia illum tempore corrupti sed eum reiciendis.
                  Maxime modi rerum.
                </p>
              </div>

              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                <img
                  src="assets/img/services.jpg"
                  alt=""
                  className="img-fluid services-img"
                />
                <h3>
                  Temporibus et in vero dicta aut eius lidero plastis trand
                  lined voluptas dolorem ut voluptas
                </h3>
                <p>
                  Blanditiis voluptate odit ex error ea sed officiis deserunt.
                  Cupiditate non consequatur et doloremque consequuntur.
                  Accusantium labore reprehenderit error temporibus saepe
                  perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem
                  architecto eum et quos deleniti officia qui.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Aut eum totam accusantium voluptatem.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>
                      Assumenda et porro nisi nihil nesciunt voluptatibus.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>Ullamco laboris nisi ut aliquip ex ea</span>
                  </li>
                </ul>
                <p>
                  Est reprehenderit voluptatem necessitatibus asperiores neque
                  sed ea illo. Deleniti quam sequi optio iste veniam repellat
                  odit. Aut pariatur itaque nesciunt fuga.
                </p>
                <p>
                  Sunt rem odit accusantium omnis perspiciatis officia.
                  Laboriosam aut consequuntur recusandae mollitia doloremque est
                  architecto cupiditate ullam. Quia est ut occaecati fuga.
                  Distinctio ex repellendus eveniet velit sint quia sapiente
                  cumque. Et ipsa perferendis ut nihil. Laboriosam vel
                  voluptates tenetur nostrum. Eaque iusto cupiditate et totam et
                  quia dolorum in. Sunt molestiae ipsum at consequatur vero.
                  Architecto ut pariatur autem ad non cumque nesciunt qui
                  maxime. Sunt eum quia impedit dolore alias explicabo ea.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">iPortfolio</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
            Distributed by <a href="https://themewagon.com/">ThemeWagon</a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <div id="preloader"></div>
    </>
  );
}
