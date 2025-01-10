import { PacmanLoader } from "react-spinners";

export default function LoadingPacman() {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <PacmanLoader color="#8A8C91" />
    </div>
  );
}
