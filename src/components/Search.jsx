import { MdSearch } from "react-icons/md";
import PropTypes from "prop-types";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type to Search.."
      />
    </div>
  );
};
Search.propTypes = {
  handleSearchNote: PropTypes.func.isRequired,
};
export default Search;
