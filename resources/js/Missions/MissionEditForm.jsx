import React, { useState } from "react";

const MissionEditForm = () => {
    const [values, setValues] = useState({
        name: "",
        year: 2022,
        outcome: 0,
    });

    const valueChangeHandler = (e) => {
        setValues((previousValues) => {
            return {
                ...previousValues,
                [e.target.name]: e.target.value,
            };
        });
    };

    console.log(values);

    const years = [];
    for (let i = 1900; i <= 2030; i++) {
        years.push(i);
    }

    return (
        <form className="edit__mission__form" action="" method="post">
            <meta name="csrf-token" content="{{ csrf_token() }}"></meta>

            <div className="mission__name__container">
                <label htmlFor="mission__name">Mission Name</label>
                <input
                    id="mission__name"
                    className="mission__name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={valueChangeHandler}
                />
            </div>
            <div className="mission__year__container">
                <label htmlFor="mission__year">Mission year</label>
                <select
                    id="mission__year"
                    className="mission__year"
                    name="year"
                    value={values.year}
                    onChange={valueChangeHandler}
                >
                    {years.map((year) => {
                        return (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="mission__outcome__container">
                <label htmlFor="mission__outcome">Mission outcome</label>
                <select
                    id="mission__outcome"
                    name="outcome"
                    onChange={valueChangeHandler}
                    value={values.outcome}
                >
                    <option value="1">Completed</option>
                    <option value="0">Assigned</option>
                </select>
            </div>
            <div className="mission__button--save">
                <button>Save Mission</button>
            </div>
        </form>
    );
};

export default MissionEditForm;
