import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigete = useNavigate()
  return (
    <div className="">
      <p onClick={() => {navigete('')}}>Back</p>
      <p>Page Not Found</p>
    </div>
  );
}

export default NotFound;
