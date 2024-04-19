const Testimonial = ({ text }) => (
  <article
    className="testimonal rounded--all--m padding--all"
    style={{ backgroundImage: "url('./public/quote.png')" }}
  >
    <div className="padding--x">{text}</div>
  </article>
);

export default Testimonial;
