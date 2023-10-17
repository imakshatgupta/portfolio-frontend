import ReactTyped from "react-typed";
const ChangingText = () => {
  return (
    <div>
      <h1>
        And I'm a {" "}
        <span className="text-[#915EFF]">
          <ReactTyped
            strings={["Developer", "Designer", "Programmer",  "Freelancer" , "Student" , "Learner" , "Coder" , "Engineer", "Tech Enthusiast"]}
            typeSpeed={100}
            loop
          />
        </span>
      </h1>
    </div>
  );
};
export default ChangingText;
