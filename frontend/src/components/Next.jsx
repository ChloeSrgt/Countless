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
          width: "207px",
          color: "white",
        }}
      >
        Suivant
      </Button>
    </div>
  );
}
