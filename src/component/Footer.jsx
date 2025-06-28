function Footer(){
    return(
        <section className="container" id="contact">
            <div className="footer">
                <h2 className="footer-title">Contáctame</h2>
                <div className="footer-icons">
                    <a href="https://www.facebook.com/profile.php?id=100014210508453" target="_blank"
                     className="footer-icon">
                        <i className="fab fa-facebook"></i>
                        <span>Facebook</span>
                     </a>
                    <a href="https://www.instagram.com/x.x_anabel?igsh=MWRrd2dsMnlzamw5aQ=="target="_blank"className="footer-icon">
                    <i className="fab fa-instagram"></i>
                    <span>Instagram</span>                    
                    </a>
                    <a href="https://wa.me/qr/H7SMJFXPMYHGG1" target="_blank" className="footer-icon">
                    <i className="fab fa-whatApp"></i>
                    <span>WhatApp</span>
                    </a>
                    <a href="https://www.tiktok.com/@anabel.ayo?_t=ZM-8xY1hJHXMiU&_r=1" target="_blank" className="footer-icon">
                    <i className="fab fa-tiktok"></i>
                    <span>TikTok</span>
                    </a>

                </div>
                <p>Derechos reservados &copy; AnabelAyo </p>

            </div>
            <figure className="footer-img">
                <img src="https://static.vecteezy.com/system/resources/previews/000/166/542/non_2x/contact-me-icons-vector.png" alt="contactame" />

            </figure>

        </section>
    );
}
export default Footer;