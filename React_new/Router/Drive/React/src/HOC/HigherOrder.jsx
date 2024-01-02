import { ClipLoader } from "react-spinners/ClipLoader";
const HigherOrder = ({ isLoading }) => {
  if (!isLoading) return <ClipLoader />;
  return null;
};

export default HigherOrder;
