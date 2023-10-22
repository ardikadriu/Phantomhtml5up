import Image from "next/image";
import pic01 from "@/public/images/pic01.jpg";
import pic02 from "@/public/images/pic02.jpg";
import pic03 from "@/public/images/pic03.jpg";
import pic04 from "@/public/images/pic04.jpg";
import pic05 from "@/public/images/pic05.jpg";
import pic06 from "@/public/images/pic06.jpg";
import pic07 from "@/public/images/pic07.jpg";
import pic08 from "@/public/images/pic08.jpg";
import pic09 from "@/public/images/pic09.jpg";
import pic10 from "@/public/images/pic10.jpg";
import pic11 from "@/public/images/pic11.jpg";
import pic12 from "@/public/images/pic12.jpg";

const Main = () => {
  return (
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            This is Phantom, a free, fully responsive site
            <br />
            template designed by <a href="http://html5up.net">HTML5 UP</a>.
          </h1>
          <p>
            Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
            amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
            venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
            ipsum dolor sit amet nullam dolore.
          </p>
        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <Image src={pic01} alt="" />
            </span>
            <a href="generic.html">
              <h2>Magna</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style2">
            <span className="image">
              <Image src={pic02} alt="" />
            </span>
            <a href="generic.html">
              <h2>Lorem</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style3">
            <span className="image">
              <Image src={pic03} alt="" />
            </span>
            <a href="generic.html">
              <h2>Feugiat</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style4">
            <span className="image">
              <Image src={pic04} alt="" />
            </span>
            <a href="generic.html">
              <h2>Tempus</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style5">
            <span className="image">
              <Image src={pic05} alt="" />
            </span>
            <a href="generic.html">
              <h2>Aliquam</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style6">
            <span className="image">
              <Image src={pic06} alt="" />
            </span>
            <a href="generic.html">
              <h2>Veroeros</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style2">
            <span className="image">
              <Image src={pic07} alt="" />
            </span>
            <a href="generic.html">
              <h2>Ipsum</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style3">
            <span className="image">
              <Image src={pic08} alt="" />
            </span>
            <a href="generic.html">
              <h2>Dolor</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style1">
            <span className="image">
              <Image src={pic09} alt="" />
            </span>
            <a href="generic.html">
              <h2>Nullam</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style5">
            <span className="image">
              <Image src={pic10} alt="" />
            </span>
            <a href="generic.html">
              <h2>Ultricies</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style6">
            <span className="image">
              <Image src={pic11} alt="" />
            </span>
            <a href="generic.html">
              <h2>Dictum</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article className="style4">
            <span className="image">
              <Image src={pic12} alt="" />
            </span>
            <a href="generic.html">
              <h2>Pretium</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Main;
