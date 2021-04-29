import React from "react";
import classes from "./index.module.scss";
import Row from "../../../hoc/Row";

const SearchBar = () => {
	return (
		<div className={classes.search}>
			<Row className={classes.search__content}>
				<div className={classes.search__dropdown}>Shop by Category</div>
				<div className={classes.search__field}>
					<form className={classes.search__form}>
						<input
							type="search"
							placeholder="Search for..."
							className={classes.search__input}
						/>
					</form>
				</div>
				<div className={classes.search__offer}>
					Use code "covid19" for 15% off!
				</div>
			</Row>
		</div>
	);
};

export default SearchBar;
