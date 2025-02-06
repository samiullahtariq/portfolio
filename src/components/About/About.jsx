import "./about.css";

const About = () => {
  return (
  <div className="container mt-3">
      <div className="row">
        <div className="col-md-6" style={{position : "relative"}}>
        <div className="a-card bg"   style={{borderRadius : "75px"}}></div>
        <div className="a-card">
          <img
            src="/Images/img.jpg"
            alt=""
            className="img-fluid imgStyling"
            style={{borderRadius : "75px"}}
          />
        </div>
        
        </div>
      
      <div className="col-md-6">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          As a Frontend Developer & SEO Specialist. I offer a unique blend of techical expertise and marketing strategies to help business increase their online visibility and drive revenue.
        </p>
        <p className="a-desc">
         Whether you need a high-performing React/next.js website or a data-driven SEO strategy. I have the skills and experience to deliver results. Ready to scale your online presence with expert SEO & web solutions? Send me a message and lets discuss your project today!🚀
        </p>
      </div>

      </div>
    </div> 
  );
};

export default About;
