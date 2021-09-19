import "./FilterSidePanel.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FilterSidePanel = ({
  filterText,
  setFilterText,
  filterPrice,
  setFilterPrice,
  durationText,
  setDurationText,
}) => {
  const onResetFiltersClick = () => {
    setFilterPrice(400);
    setFilterText("");
    setDurationText("");
  };
  return (
    <div>
      <div className="filters-title">Филтери</div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
        <FormControl
          placeholder="Претражите..."
          aria-label="Претражите..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </InputGroup>
      <div className="filter-subtitle">Цена</div>
      <Form className="price">
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="<50"
            checked={filterPrice === 50}
            onChange={(e) => setFilterPrice(50)}
          />
          <Form.Check
            type="checkbox"
            label="<100"
            checked={filterPrice === 100}
            onChange={(e) => setFilterPrice(100)}
          />
          <Form.Check
            type="checkbox"
            label="<150"
            checked={filterPrice === 150}
            onChange={(e) => setFilterPrice(150)}
          />
          <Form.Check
            type="checkbox"
            label="<400"
            checked={filterPrice === 400}
            onChange={(e) => setFilterPrice(400)}
          />
        </Form.Group>
        <div className="filter-subtitle">Време трајања</div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="10 - 15 Минута"
            checked={durationText === "10 - 15"}
            onChange={(e) => setDurationText("10 - 15")}
          />
          <Form.Check
            type="checkbox"
            label="20 - 25 Минута"
            checked={durationText === "20 - 25"}
            onChange={(e) => setDurationText("20 - 25")}
          />
          <Form.Check
            type="checkbox"
            label="25 - 30 Минута"
            checked={durationText === "25 - 30"}
            onChange={(e) => setDurationText("25 - 30")}
          />
          <Form.Check
            type="checkbox"
            label="30 - 45 Минута"
            checked={durationText === "30 - 45"}
            onChange={(e) => setDurationText("30 - 45")}
          />
        </Form.Group>
      </Form>
      <Button onClick={onResetFiltersClick}>Ресетуј филтере</Button>
    </div>
  );
};

export default FilterSidePanel;
