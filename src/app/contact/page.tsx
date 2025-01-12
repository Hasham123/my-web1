import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='contact-form'>
        <h2>CONTACT US</h2>
        <form>
            <input type='text' placeholder='Full Name' required/>
            <input type='email' placeholder='Email' required/>
            <input type='text' placeholder='Phone ' required/>
            <textarea placeholder='Message' rows={5} required>
                
            </textarea>
            <button type="submit">Send Message</button>
            

        </form>
      </section>
    </div>
  )
}

export default Contact
