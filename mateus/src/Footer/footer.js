import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';


import {
    SocialMediaContainer,
    FooterTitle,
    SocialMediaIcon,
    StyledToolBar,
    SectionLogo,
 
    
  } from "./styled";
  import FooterBar from "@material-ui/core/AppBar";
  
  
  export class Footer extends React.Component {
    redirecionarFacebook = () => {    
      window.location.replace("https://www.facebook.com/")
    }
  
    redirecionarTwitter = () => {    
      window.location.replace("https://twitter.com/")
    }
  
    redirecionarInstagram = () => {    
      window.location.replace("https://www.instagram.com/")
    }
    redirecionarPinterest = () => {    
      window.location.replace("https://www.pinterest.com/")
    }
    redirecionarLinkedin = () => {    
      window.location.replace("https://www.Linkedin.com/")
    }
    redirecionarYoutube = () => {    
      window.location.replace("https://www.Linkedin.com/")
    }
  
  
    render() {
  
  
  
      return (
        <div>
          <FooterBar position="sticky">
            <StyledToolBar>
              <div>
                  
                <p>  © SoftClouds 2021   </p>
                
              </div>
             
              <SocialMediaContainer>
                <FooterTitle>Nossas redes Sociais</FooterTitle>
                   <SocialMediaIcon>
                  <FacebookIcon onClick={this.redirecionarFacebook} />
                  <TwitterIcon onClick={this.redirecionarTwitter} />
                  <InstagramIcon onClick={this.redirecionarInstagram}/>
                  <PinterestIcon onClick={this.redirecionarPinterest}/>
                  <LinkedInIcon onClick={this.redirecionarLinkedin}/>
                  <YouTubeIcon onClick={this.redirecionarYoutube}/>
                  
                </SocialMediaIcon>
              </SocialMediaContainer>
              <SectionLogo>
              
            </SectionLogo>
            </StyledToolBar>
            
          </FooterBar>
        </div>
  
  
      );
    }
  }
  
  export default Footer