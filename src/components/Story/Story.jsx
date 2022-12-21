import "./Story.scss";

const Story = () => {
  return (
    <>
      <div className="story__pictures">Pictures</div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus fuga
          tempore doloribus!{" "}
        </p>
        <button className="btn">Find your own home</button>
      </div>
    </>
  );
};

export default Story;
