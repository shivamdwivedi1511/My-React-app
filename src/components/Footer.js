import { FOOTER_LOGO } from "../config";

const Footer =()=>{
    return (
        <div className="footer">
             <div>
                <img src={FOOTER_LOGO} alt='footer logo'/>
            </div>
            <p>© 2023 Swiggy</p>
        </div>
    )
        
    
}

export default Footer;