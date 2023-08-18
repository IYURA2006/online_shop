import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  Drawer,
  Checkbox,
  Slider,
  Autocomplete,
  TextField,
  Button,
  FormControlLabel,
  Radio,
} from "@mui/material";
import {
  orange,
  yellow,
  purple,
  green,
  blue,
  black,
  silver,
} from "@mui/material/colors";
import "./Sort.css";

const minDistance = 10;
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const SortMenu = ({ open, onClose }) => {
  const [value1, setValue1] = useState([40, 500]);
  const [sortValue, setSortValue] = useState(null);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  const handleSortChange = (event, newValue) => {
    setSortValue(newValue);
  };
  return (
    <Drawer anchor="right" open={open} onClose={onClose} className="filter">
      <div className="filter__container">
        <div className="filter__header">
          <span>Filter</span>
          <span>1</span>
        </div>

        <div className="filter__buttons">
          <Button>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
      </div>
      <div className="filter__options">
        <div className="filter__section">
          <h3>Sort by:</h3>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={sortOptions}
            getOptionLabel={(option) => option.label}
            value={sortValue}
            onChange={handleSortChange}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Choose the most relevant"
                InputLabelProps={{
                  shrink: false,
                }}
              />
            )}
          />
        </div>

        <div className="filter__section">
          <div className="filter__subheader">
            <h3>Size</h3>
            <Button>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
          <ul>
            <li>
              <input
                type="checkbox"
                className="input__size"
                name="check_0"
                value="check_0"
              />
              <label for="check_0">XS</label>
            </li>
            <li>
              <input
                type="checkbox"
                className="input__size"
                name="check_1"
                value="check_1"
              />
              <label for="check_1">S</label>
            </li>
            <li>
              <input
                type="checkbox"
                className="input__size"
                name="check_2"
                value="check_2"
              />
              <label for="check_2">M</label>
            </li>
            <li>
              <input
                type="checkbox"
                className="input__size"
                name="check_3"
                value="check_3"
              />
              <label for="check_3">L</label>
            </li>
            <li>
              <input
                type="checkbox"
                className="input__size"
                name="check_4"
                value="check_4"
              />
              <label for="check_4">XL</label>
            </li>
          </ul>
        </div>

        <div className="filter__section">
          <div className="filter__subheader">
            <h3>Colour</h3>
            <Button>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
          <input
            type="checkbox"
            className="color-checkbox color-checkbox--orange"
          />
          <input
            type="checkbox"
            className="color-checkbox color-checkbox--yellow"
          />
          <input
            type="checkbox"
            className="color-checkbox color-checkbox--purple"
          />
          <input
            type="checkbox"
            className="color-checkbox color-checkbox--green"
          />
          <input
            type="checkbox"
            className="color-checkbox color-checkbox--blue"
          />
          <input
            type="checkbox"
            className="color-checkbox color-checkbox--black"
          />
          <input
            type="checkbox"
            className="color-checkbox color-checkbox--gray"
          />
        </div>

        <div className="filter__section">
          <div className="filter__subheader">
            <h3>Price</h3>
            <Button>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
          <div className="filter__slider">
            Price:
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              disableSwap
            />
          </div>
        </div>
        <Button variant="contained" color="primary">
          Apply Filters
        </Button>
      </div>
    </Drawer>
  );
};

const sortOptions = [
  { label: "Name (A-Z)", value: "name-asc" },
  { label: "Name (Z-A)", value: "name-desc" },
  { label: "Price (Low to High)", value: "price-asc" },
  { label: "Price (High to Low)", value: "price-desc" },
  { label: "Newest Arrivals", value: "newest" },
];

export default SortMenu;
