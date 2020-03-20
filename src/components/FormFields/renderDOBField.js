import React from 'react';
import moment from 'moment';

const renderDOBField = (fields) => {
    const day = fields.date_of_birth.day;
    const month = fields.date_of_birth.month;
    const year = fields.date_of_birth.year;
    const minDay = 1;
    let maxDay = moment(`${year.input.value}-${month.input.value}`, "YYYY-MM").daysInMonth();
    const touched = day.meta.touched || month.meta.touched || year.meta.touched;
    const error = day.meta.error || month.meta.error || year.meta.error;

    const yearOnChange = (e) => {
        year.input.onChange(e);
        maxDay = moment(`${e.target.value}-${month.input.value}`, "YYYY-MM").daysInMonth();
        if (maxDay < day.input.value) {
            day.input.onChange(maxDay);
        }
    }
    
    const monthOnChange = (e) => {
        const newValue = e.target.value.length === 1 ? e.target.value='0' + e.target.value : e.target.value;
        month.input.onChange(newValue);
        maxDay = moment(`${year.input.value}-${e.target.value}`, "YYYY-MM").daysInMonth();
        if (maxDay < day.input.value) {
            day.input.onChange(maxDay);
        }
    }

    const dayOnChange = (e) => {
        const newValue = e.target.value.length === 1 ? e.target.value='0' + e.target.value : e.target.value;
        day.input.onChange(newValue);
    }

    return (
        <div className="date-form-element">
            <label className={`${touched && error ? 'error title-middle' : 'title-middle' }`}>
                {error ? <span>{day.meta.error}</span> : fields.label }
            </label>
            
            <div className="date-row-wrapper">
                <div className="date-row">
                    <input {...day.input} type="number" min={minDay} max={maxDay} onChange={e => dayOnChange(e)}/>
                </div>
                <div className="date-row">
                    <input {...month.input} type="number" min="1" max="12" onChange={e => monthOnChange(e)}/>
                </div>
                <div className="date-row">
                    <input {...year.input} type="number" min="1900" max="2020" onChange={e => yearOnChange(e)}/>
                </div>
            </div>
            
        </div>
    )
}

export default renderDOBField