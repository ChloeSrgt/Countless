import Button from "react-bootstrap/Button";
import "./Next.css";

export default function Next() {
  return (
    <div className="Suivant">
      <Button
        size="lg "
        type="submit"
        style={{
          backgroundColor: "#3D3D3D",
          border: "none",
          width: "100px",
          color: "white",
        }}
      >
        Next
      </Button>
    </div>
  );
}
