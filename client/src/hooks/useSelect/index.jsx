import React, { useState } from "react";
import { Select } from "../../components/UI";

const useSelect = (options) => {
	const [selectedOption, setSelectedOption] = useState(options[0].value);
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);

	const closeDropDownHandler = () => {
		setIsDropDownOpen(false);
	};

	const toggleDropDownHandler = () => {
		setIsDropDownOpen((isDropDownOpen) => !isDropDownOpen);
	};

	const selectOptionHandler = (option) => {
		setSelectedOption(option);
		closeDropDownHandler();
	};

	return [
		selectedOption,
		<Select
			options={options}
			value={selectedOption}
			isOpen={isDropDownOpen}
			onToggle={toggleDropDownHandler}
			onClose={closeDropDownHandler}
			onSelect={selectOptionHandler}
		/>,
	];
};

export default useSelect;
