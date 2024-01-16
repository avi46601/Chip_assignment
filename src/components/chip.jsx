// AutocompleteChipInput.js
import React, { useState } from 'react';
import { items,itemimg } from '../data/data.jsx';
function Chip() {

    const [myinput, setInput] = useState('');
    const [selectedChips, setSelectedChips] = useState([]);
    const [isListVisible, setListVisible] = useState(false);

    const filterListItem = items.filter(
        (item) =>
            !selectedChips.includes(item) && item.toLowerCase().includes(myinput.toLowerCase())
    );

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleItemClick = (item) => {
        setSelectedChips((prev) => [...prev, item]);
        setInput('');
    };

    const handleRemoveChip = (item) => {
        setSelectedChips((prev) => prev.filter((chip) => chip !== item));
    };

    return (

        <div className="maindiv">
            <h1>Zepto Chip Assignment</h1>
            <div className="my-div" >
                <div className="chips-container">
                    {selectedChips.map((chip) => (
                        <div key={chip} className="chip">
                            <img src={itemimg[chip]} alt="Hero Section" className='chip-image' />
                            {chip}
                            <span onClick={() => handleRemoveChip(chip)} className="remove-icon">X</span>
                        </div>
                    ))}
                </div>
                <ul className="autocomplete-list">
                    <li>
                        <input
                            type="text"
                            value={myinput}
                            onChange={handleInputChange}
                            placeholder="Find Thieves here..."
                            onFocus={() => setListVisible(true)} />
                    </li>
                    {isListVisible && filterListItem.map((item) => (
                        <li key={item} onClick={() => handleItemClick(item)}>
                            <img src={itemimg[item]} alt="Hero Section" className='chip-image' />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Chip;
