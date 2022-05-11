const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-content">
                <h1>Contact</h1>
                
                <div className="contact-form">
                    <form>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label htmlFor="country">Country</label>
                        <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        </select>
                    
                        <input type="submit" value="Submit" />
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;