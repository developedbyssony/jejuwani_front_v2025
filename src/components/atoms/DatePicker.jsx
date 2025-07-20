import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

const DatePickerComponent = ({
    setSearchDateString,
    setSelectedEndDateString,
    isRangeSearch,
    parentFunction1,
    parentFunction2,
}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendartOpen] = useState(false);

    parentFunction1(startDate);
    parentFunction2(endDate);

    const dateToString = (date) => {
        return (
            date.getFullYear() +
            "-" +
            (date.getMonth() + 1).toString().padStart(2, "0") +
            "-" +
            date.getDate().toString().padStart(2, "0")
        );
    };

    const ExampleCustomInput = ({ value, onClick }) => (
        <>
            <button className="example-custom-input" onClick={onClick}>
                {value}
            </button>
        </>
    );
    return (
        <div className="datePckerWrap">
            <DatePicker
                className="datePicker"
                dateFormat="yyy/MM/dd"
                locale={ko}
                minData={new Date()}
                selected={startDate}
                onChange={(date) => (setStartDate(date), setEndDate(date))}
            />
        </div>
    );
};

export default DatePickerComponent;