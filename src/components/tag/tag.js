import "./tag.css";

function Tag({ tag }) {
  return (
    <div className="tag">
      <p className="texts">{tag}</p>
    </div>
  );
}

export default Tag;
