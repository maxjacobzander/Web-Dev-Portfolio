import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import PDF from '../assets/documents/Max_Zander_SE_Resume_Feb_2021.pdf';

import pic1 from '../assets/images/project_pics/Liquor_Cabinet.jpg';
import pic2 from '../assets/images/project_pics/Ear_Trainer.jpg';
import pic3 from '../assets/images/project_pics/Bucket.jpg';
import pic4 from '../assets/images/project_pics/Bravo_Score_Library.jpg';
import pic5 from '../assets/images/project_pics/Cocktail_Buddy.jpg';
import config from '../../config';


const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Hi! <br /> I’m Max and I’m a Software Developer from New York.
          </h2>
          <p>
            After 6+ years working internationally as a professional opera singer, music teacher, and award-winning composer and arranger of music, I found myself drawn to software development
            <br /><br />
            <a href="/About" className="button secondary">
            About Me
            </a>
            <br />
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Ruby Gem</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-music major style2">
              <span className="label">Music Notes</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Code Snippet</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2 special">
    <br /><br />
    <header className="major">
      <h2>Some Previous Projects...</h2>
    </header>
      <section className="spotlight">
        <div className="image">
          <a href="https://youtu.be/oolEZgBoPMM" target="_blank" rel="noreferrer noopener">
          <img src={pic1} alt="" />
          </a>
        </div>
        <div className="content">
          <h2>
            Liquor Cabinet
          </h2>
          <p>
            React/Redux Front-End, Rails API Back-End
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <a href="https://youtu.be/BgoJaH-Y_hg" target="_blank" rel="noreferrer noopener">
          <img src={pic2} alt="" />
          </a>
        </div>
        <div className="content">
          <h2>
            Ear Trainer
          </h2>
          <p>
            Vanilla JavaScript Front-End, Rails API Back-End
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <a href="https://youtu.be/ga3SLheArSU" target="_blank" rel="noreferrer noopener">
          <img src={pic3} alt="" />
          </a>
        </div>
        <div className="content">
          <h2>
            Bucket
          </h2>
          <p>
            A 100% Rails Application
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <a href="https://youtu.be/C9yT2VxRh98" target="_blank" rel="noreferrer noopener">
          <img src={pic4} alt="" />
          </a>
        </div>
        <div className="content">
          <h2>
            Bravo Personal Score Library Catalogue
          </h2>
          <p>
            A Sinatra Application
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <a href="https://youtu.be/Mid918ODF0U" target="_blank" rel="noreferrer noopener">
          <img src={pic5} alt="" />
          </a>
        </div>
        <div className="content">
          <h2>
            Cocktail Buddy
          </h2>
          <p>
            A simple Command-Line Interface
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>My Resume</h2>
          <p>
            Feel free to check out my resume or <a href={PDF} target="_blank" rel="noreferrer noopener">click here</a> to download it!
          </p>
        </header>
        <ul className="features">
          <embed
            src={PDF + "#toolbar=0"}
            type="application/pdf"
            // height={1032}
            // width={800}
          // height={645}
          // width={500}
          />
          {/* <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li> */}
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Want to Learn More About My Performing Career?</h2>
          <p>
            {/* Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla. */}
          </p>
        </header>
        <ul className="actions stacked">
          <li>
          <a href="https://maxjacobzander.com" className="button fit primary">
              Click Here
            </a>
          </li>
          {/* <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
