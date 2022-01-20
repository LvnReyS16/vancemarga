import React, {Component} from 'react';

class Home extends Component {
    render() {
	    return (
		<div className="row ">
	           <div className="medium-12 columns">
                <div id="home">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
     
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about-marga">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#socials">Socials</a>
          </li>
        </ul>
      </div>
    </nav>
    
    <div class="background">
      <img src="img/sample-image2.jpg" class="img-fluid" alt=""/>
    
      <div class="heading-contents text-center">
        <h5>Hello, We are</h5>
        <h1>Marga and Vance</h1>
        <p>SOCIAL MEDIA MANAGEMENT | GRAPHIC DESIGN | WEB DEVELOPMENT</p>
      </div>
    </div>
   
    <div id="about-marga" class="offset container mt-5 mb-5">
      <div class="post-heading text-center">
        <h3 class="display-4 font-weight-bold">About Us</h3>
        <hr class="w-50 mx-auto pb-5"/>
      </div>
    
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <img src="img/mar.png" class="img-fluid" alt=""/>
        </div>
    
        <div class="col-lg-6 col-md-6 col-12">
          <h2>Purposeful and Goal-Oriented</h2>
          <hr/>
          <p>Marvidel Handumon is a BSIT student from <b>Western Mindanao State University</b>.</p>
          <p>She has recently developed an interest in photography. She likes to visit 
            "instagramable" places and of course, food. Aside from this, she is also fond of
            exploring different design ideas for User Interfaces. She is also a <b>Social Media Manager</b> equipped 
            with the skills and always on track with the latest trends with social media marketing and advertisement.
          </p>
          <p></p>
          
          
        </div>
      </div>
    </div>
   
    
    <br/>
    <br/>
  
    <div id="about-vance" class="container mt-3 mb-5">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <h2>Detailed and Efficient</h2>
          <hr/>
          <p>Alyssa Vance Baguio is a <b>Project Manager</b>. She hates deadlines and as a graduating student, she aims to finally 
            apply what she have learned in school into the real world. She loves to read books and manga and also a fan of anime.
            Oh, and she also loves to travel!
          </p>
          <p>She has recently gained skills in <b>Social Media Management</b> from the DICT.</p>
        </div>
      <div class="col-lg-6 col-md-6 col-12">
        <img src="img/vance-img.png" class="img-fluid" alt=""/>
      </div>
    </div>
    
    
    <br/>
    <br/>
  
    <div id="skills" class="offset container mt-3 mb-5">
      <div class="post-heading text-center">
        <h3 class="display-4 font-weight-bold">Skills and Hobbies</h3>
        <hr class="w-50 mx-auto pb-5"/>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-12-pb-5">
          <div class="card" style={{width:"18rem"}}>
            <img src="img/smm.jpg" class="card-img-top" alt=""/>
            <div class="card-body">
              <p class="card-text">We are <b>Social Media Managers</b>. We recently took a training conducted by 
              the <b>Department of Information and Communications Technology</b>.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12-pb-5">
          <div class="card" style={{width:" 18rem"}}>
            <img src="img/graphic.jpg" class="card-img-top" alt=""/>
            <div class="card-body">
              <p class="card-text">We also do <b>Graphics Designing</b>. We are skilled in using Photoshop, Illustrator and Canva.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12-pb-5">
          <div class="card" style={{width: "18rem"}}>
            <img src="img/html.jpg" class="card-img-top" alt=""/>
            <div class="card-body">
              <p class="card-text">We are developers. We can create Websites using html,css,javascript and 
                design Websites and Mobile Applications.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12-pb-5">
          <div class="card" style={{width: "18rem;"}}>
            <img src="img/painting.jpg" class="card-img-top" alt=""/>
            <div class="card-body">
              <p class="card-text">During Vance's spare time, she loves to do charcoal 
                painting and watching tutorial videos about painting.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12-pb-5">
          <div class="card" style={{width: "18rem"}}>
            <img src="img/code.jpg" class="card-img-top" alt=""/>
            <div class="card-body">
              <p class="card-text">Marga loves to search for User Interface ideas and latest trends in UI/UX.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12-pb-5">
          <div class="card" style={{width: "18rem"}}>
            <img src="img/foodie.jpg" class="card-img-top" alt=""/>
            <div class="card-body">
              <p class="card-text">Marga loves to visit places and is a foodie at heart.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
    
    <br/>
    <br/>
    
    <div id="socials" class="offset container mt-3 mb-5">
      <div class="post-heading text-center">
        <h3 class="display-4 font-weight-bold">Visit Marga's Socials</h3>
        <p>Get to know more about Marga through these social media sites.</p>
        <hr class="w-50 mx-auto pb-5"/>
        <div class="container w-50 mx-auto mt-3 mb-5">
          <div class="wrapper">    
            <a target="_blank" href="https://web.facebook.com/marvidel.handumon.5"><i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>    
            <a target="_blank" href="https://web.instagram.com/_mrvdl"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>    
            <a target="_blank" href="https://linkedin.com/in/marvidel-handumon"><i class="fa fa-3x fa-linkedin-square"></i></a>
          </div> 
        </div> 
          <br/>
		        
          <br/>
          <hr class="w-50 mx-auto pb-5"/>
      </div>
    </div>
    
    <div id="socials-vnc" class="container mt-3 mb-5">
      <div class="post-heading text-center">
        <h3 class="display-4 font-weight-bold">Say Hi to Vance</h3>
        <p>You may reach out and contact Vance through these social media platforms.</p>
        <hr class="w-50 mx-auto pb-5"/>
        
        <div class="container w-50 mx-auto mt-3 mb-5">
          <div class="wrapper">    
            <a target="_blank" href="https://web.facebook.com/vncbaguio"><i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>    
            <a target="_blank" href="https://web.instagram.com/smmalyssavb"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>    
            <a target="_blank" href="https://linkedin.com/in/baguio-alyssavance"><i class="fa fa-3x fa-linkedin-square"></i></a>
          </div> 
        </div> 
          <br/>
          <br/>
          <hr class="w-50 mx-auto pb-5"/>
      </div>
    </div>


      
    <div class="container-fluid">     
      <footer class="page-footer font-small blue-grey lighten-5">
        <div className="fluid">
          <div class="container">

      
            <div class="footer-copyright text-center py-3">© 2021 Copyright:
              <a href="/">margavanceprofile.com</a>
            </div>
          </div>
        </div>
       

      </footer>
    </div>
   
  </div>
				
				
				
				
				
				</div>
				   
        </div>  
</div>
	     );
    }
}
export default Home;