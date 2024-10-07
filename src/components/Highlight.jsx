/* eslint-disable react/prop-types */
const Highlight = ({ highlight }) => {
  return (
    <div>
      <h1>{highlight.title}</h1>
      <p>{highlight.description}</p>
      {highlight.actionButton ? highlight.actionButton : null}
    </div>
  );
};

export default Highlight;
