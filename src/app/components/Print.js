const Print = ({ js, label }) => (
   <div className="rounded--all--l padding--all bgColor--azul fontColor--white">
      {label && <h4 className="fontWeight--bold">{label}:</h4>}
      <pre><code>{JSON.stringify(js, null, 3)}</code></pre>
   </div>
);

export default Print;