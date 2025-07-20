import react, { useState, forwardRef } from "react";

function input({ inputTitle, type, placeholder, name, parentFunction,ref }) {
    // 상태 정의
    const [value, setValue] = useState("");

    // input 값 변경 시 상태 업데이트
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    /* 부모 함수 호출 시 상태값 전달
    const handleBlur = () => {
        parentFunction(value); // 부모에게 value 전달
    };*/

    return (
        <div className="form-group">
            <div className="inputTitle">
                <strong>{inputTitle}</strong>
            </div>
            <div id="input-group">
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    /*onBlur={handleBlur}*/
                    value={value}
                    onChange={handleChange}
                    ref={ref}
                ></input>
            </div>
        </div>
    );
}

export default input;