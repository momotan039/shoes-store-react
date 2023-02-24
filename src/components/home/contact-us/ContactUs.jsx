import './ContactUs.css'
export default function ContactUs() {
  return (
    <>
      <h1 className='main-title'>Contact Us</h1>
      <div className="contact-us">
        <form >
          <input type="text" placeholder="Enter You'r Name" />
          <input type="email" placeholder="Enter You'r Email" />
          <textarea placeholder="What you want to talk about......" cols="30" rows="10"></textarea>
          <button onClick={(e)=>e.preventDefault()}>Send</button>
        </form>
      </div>
    </>
  )
}
