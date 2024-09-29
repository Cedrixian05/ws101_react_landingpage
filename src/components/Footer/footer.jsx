import "./footer.css";
import facebook from "./facebook.png";
import git from "./git.png";
import ins from "./ins.png";
import mes from "./messenger.png";

function Footer() {
    return (
        <div className="Footer">
            <footer>
                <div className="text">
                    <span>Created By <a href="https://github.com/Cedrixian05">Cedrixian</a> | &#169; 2024 All Rights Reserved</span>
                </div>
                <div className="footer-logos">
                    <a href="https://github.com/Cedrixian05" target="_blank" rel="noopener noreferrer">
                        <img src={git} alt="GitHub" />
                    </a>
                    <a href="https://www.facebook.com/cedrixian.nocum" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/cedrixian/" target="_blank" rel="noopener noreferrer">
                        <img src={ins} alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/cedrixian.nocum" target="_blank" rel="noopener noreferrer">
                        <img src={mes} alt="Messenger" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
