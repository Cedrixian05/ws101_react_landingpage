import "./about.css"
import brand from "./brand.png"
import customer from "./customer.png"
import market from "./market.png"
import online from "./online.png"




function About() {
    return (
      <div className="About">
        <section className="about" id="about">
            <div className="content">
                <div className="title"><span>About</span></div>
                    <div className="about-details">
                        <div className="about-box">
                            <img src={online} alt="Online Presence and Accessibility"/>
                            <h1>Online Presence and Accessibility</h1>
                            <p>Web development ensures that your business or personal brand is accessible to a global audience at any time, helping you reach more people and stay connected with your audience around the clock.</p>
                        </div>
                        <div className="about-box">
                            <img src={brand} alt="Brand Identity and Credibility"/>
                            <h1>Brand Identity and Credibility</h1>
                            <p>A well-designed website establishes your brand's credibility by showcasing your values, products, or services in a professional manner, building trust with visitors and encouraging engagement.</p>
                        </div>
                        <div className="about-box">
                            <img src={customer} alt="Customer Interaction and Engagement"/>
                            <h1>Customer Interaction and Engagement</h1>
                            <p>Web development allows for interactive features like contact forms, live chats, and social media integration, facilitating direct communication and enabling you to gather valuable feedback.</p>
                        </div>
                        <div className="about-box">
                            <img src={market} alt="Market Expansion and Sales Growth"/>
                            <h1>Market Expansion and Sales Growth</h1>
                            <p>Having a strong web presence allows you to expand your reach beyond local markets, attracting new customers from different regions, leading to increased sales and business growth.</p>
                        </div>
                    </div>
                </div>
        </section>
      </div>
    );
  }
  
export default About;