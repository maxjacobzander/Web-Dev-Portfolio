import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <h2>About Me</h2>
        {/* <p>How Did I Get Here?</p> */}
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>A little background...</h3>
          <p>
          As a young kid with glasses, people always assumed I knew my way 
          around computers. I can’t even begin to tell you how many times people 
          approached me in school or the library or wherever to ask for help with 
          their computer problems. The bigger issue was that I would always figure 
          out the solution, thus propelling the notion. Little did I know, I was 
          discovering an affinity that would last a lifetime.
          </p>

          <p>
          Now, I’ve been borderline obsessed with the idea of creating something 
          from nothing for as long as I can remember. From inventing things to 
          writing music, creation has always been my life. The desire to make music 
          took me to the Jacobs School of Music at Indiana University, where I 
          received both my Bachelor’s and Master’s degrees in Vocal Performance. 
          I wrote music and did improv with IU’s longest-running improv troupe, 
          creating original music and scenes every week; composed music for student 
          films; and appeared onstage with IU Opera Theatre in sixteen different 
          operas (singing in four different languages!). And after completing my 
          Master’s, I dove straight into the world of professional music-making.
          </p>

          <hr />

          <h4>A New Chapter</h4>
          <p>
          When I look back, I guess I was always drawn to web and software development. 
          In the fifth grade, I was one of my elementary school’s “Webmasters”, helping 
          to build out an early version of the school’s website. When I entered the 
          professional opera scene, I knew that I would need a website and built one using 
          an online CMS (<a href="https://maxjacobzander.com">check it out here!</a>). When friends needed help with websites of their 
          own, I was always happy to help. Eventually, I started teaching myself some HTML and 
          CSS before deciding that I wanted to take things much more seriously.
          </p>

          <p>
          After 6+ years working internationally as a professional opera singer, music teacher, 
          and award-winning composer and arranger of music, I enrolled in Flatiron School’s full-time 
          Full-Stack Software Engineering program, specializing in Ruby on Rails and React. Now, as a 
          proud graduate of that program, I continue to learn every day to expand my toolbelt and build 
          the best programs possible!
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
