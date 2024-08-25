import "./index.css";

const AllInboxes = (props) => {
  const { eachItem } = props;
  console.log(eachItem);
  const { fromEmail, subject } = eachItem;
  return (
    <>
      <li className="list-type">
        <p>{fromEmail}</p>
        <p>{subject}</p>
      </li>
      <hr />
    </>
  );
};

export default AllInboxes;
