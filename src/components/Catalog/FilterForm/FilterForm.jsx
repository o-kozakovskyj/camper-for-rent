import { Field, Form, Formik } from "formik";
import sprite from "../../../assets/svg/sprite.svg";
import {
  EquipmentButtonGroup,
  FilterButton,
  FilterContainer,
  FilterHeader,
  FilterIcon,
  FilterTag,
  HorizontalLine,
  LocationContainer,
  LocationInput,
  LocationTag,
  TypeButtonGroup,
} from "./FilterForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../../redux/filters/selectors";
import { changeFiltersAction } from "../../../redux/filters/filterSlice";
import { ButtonGeneral } from "../../ButtonGeneral/ButtonGeneral";

const CatalogFilterForm = () => {
  const filters = useSelector(selectFilters);

  const dispatch = useDispatch();

  const initialValues = filters ?? {
    location: "",
    equipment: [],
    type: "",
  };

  const handleSubmit = (values) => {
    dispatch(changeFiltersAction(values));
  };

  return (
    <FilterContainer>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off" noValidate>
          <LocationTag>Location</LocationTag>

          <LocationContainer>
            <svg width="18px" height="20px" className="icon-fill">
              <use href={`${sprite}#icon-Vector`} />
            </svg>
            <LocationInput
              type="text"
              name="location"
              id="location"
              placeholder="City"
            />
          </LocationContainer>

          <FilterTag>Filters</FilterTag>

          <FilterHeader id="vehicle-equipment-group">
            Vehicle equipment
          </FilterHeader>

          <HorizontalLine />

          <EquipmentButtonGroup
            role="group"
            aria-labelledby="vehicle-equipment-group"
          >
            <FilterButton>
              <Field type="checkbox" name="equipment" value="ac" hidden />
              <FilterIcon width="32px" height="32px" className="icon-fill">
                <use href={`${sprite}#icon-ac`} />
              </FilterIcon>
              <p>AC</p>
            </FilterButton>

            <FilterButton>
              <Field
                type="checkbox"
                name="equipment"
                value="automatic"
                hidden
              />

              <FilterIcon width="32px" height="32px" className="icon-fill">
                <use href={`${sprite}#icon-diagram`} />
              </FilterIcon>

              <p>Automatic</p>
            </FilterButton>

            <FilterButton>
              <Field type="checkbox" name="equipment" value="kitchen" hidden />

              <FilterIcon width="32px" height="32px" className="icon-fill">
                <use href={`${sprite}#icon-cup-hot`} />
              </FilterIcon>

              <p>Kitchen</p>
            </FilterButton>

            <FilterButton>
              <Field type="checkbox" name="equipment" value="tv" hidden />

              <FilterIcon width="32px" height="32px" className="icon-fill">
                <use href={`${sprite}#icon-tv`} />
              </FilterIcon>

              <p>TV</p>
            </FilterButton>

            <FilterButton>
              <Field type="checkbox" name="equipment" value="shower" hidden />

              <FilterIcon width="32px" height="32px" className="icon-fill">
                <use href={`${sprite}#icon-ph-shower`} />
              </FilterIcon>

              <p>Bathroom</p>
            </FilterButton>
          </EquipmentButtonGroup>

          <FilterHeader id="vehicle-type-group">Vehicle type</FilterHeader>

          <HorizontalLine />

          <TypeButtonGroup role="group" aria-labelledby="vehicle-type-group">
            <FilterButton>
              <Field type="radio" name="type" value="van" hidden />
              <FilterIcon width="32px" height="32px" className="icon-fill">
                <use href={`${sprite}#icon-bi_grid-1x2`} />
              </FilterIcon>
              <p>Van</p>
            </FilterButton>

            <FilterButton>
              <Field type="radio" name="type" value="integrated" hidden />

              <FilterIcon width="32px" height="32px" className="icon-fill">
                <use href={`${sprite}#icon-bi_grid`} />
              </FilterIcon>

              <p>Fully Integrated</p>
            </FilterButton>

            <FilterButton>
              <Field type="radio" name="type" value="alcove" hidden />

              <FilterIcon width="32px" height="32px" className="icon-fill">
                <use href={`${sprite}#icon-bi_grid-3x3-gap`} />
              </FilterIcon>

              <p>Alcove</p>
            </FilterButton>
          </TypeButtonGroup>

          <ButtonGeneral type="submit" >Search</ButtonGeneral>
        </Form>
      </Formik>
    </FilterContainer>
  );
};

export default CatalogFilterForm;
