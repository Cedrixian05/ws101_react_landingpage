import "./home.css"


function Home() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

    return (
      <div className="Home">
            <section className="home" id="home">
                <div className="home-content">
                    <div className="text-one">Importance of Web Development</div>
                    <div className="description">
                        <p>Web development is essential for building an online presence, enhancing brand credibility, and engaging with a global audience. A well-crafted website boosts accessibility, drives growth, and expands market reach.</p>
                    </div>
                    <div className="button">
                        <button onClick={() => scrollToSection('about')}>Learn More</button>
                    </div>
                </div>
            </section>
            
  
      </div>
    );
  }

  

  
  export default Home;