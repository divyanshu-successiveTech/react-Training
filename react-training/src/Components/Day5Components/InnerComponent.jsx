const { default: withAuth } = require("./withAuth");

function InnerCompenent(props) {
  return <>Welcome {props.name}</>;
}
export default withAuth(InnerCompenent);
