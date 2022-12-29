import "./Story.scss";

const Story = () => {
  return (
    <>
      <div className="story__pictures">
        <img
          src="/story-1.jpeg"
          alt="Couple with new house"
          className="story__img--1"
        />
        <img src="/story-2.jpeg" alt="New house" className="story__img--2" />
      </div>
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
