const Testimonial = ({ text }) => (
  <article
    className="testimonal rounded--all--m padding--all"
    style={{ backgroundImage: "url('./quote.png')" }}
  >
    <div className="padding--x padding--top">{text}</div>
  </article>
);

export default Testimonial;
