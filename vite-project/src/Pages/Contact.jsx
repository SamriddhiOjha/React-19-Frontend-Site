
export const Contact = () =>{

    const handleFormSubmit = (formData)=>{
        // console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries());
        // console.log(formInputData);
    };

    return <section className="section-contact">
        <h2 className="container-title">Contact us</h2>


        <div className="contact-wrapper container">

        <form action={handleFormSubmit}>
            <input type="text" required 
            autoComplete="Off"
            placeholder="Enter your name"
            name="username"
            />

            <input type="email" 
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required autoComplete="false"
            />


          <textarea className="form-control"
          rows="10"
          placeholder="Enter your message"
          name="message"
          required autoComplete="false"
          ></textarea>

          <button type="submit" value="send">Send</button>


        </form>
        </div>
    </section>;
    

};