import axios from "axios";
import { useState, useRef } from "react";
import Input from "../components/atoms/Input2";

function signup({ serverURL }) {
    const rid = useRef();
    const rname = useRef();
    const rpwd = useRef();
    const remail = useRef();
    const [gender, setGender] = useState("");

    const [userState, setUserState] = useState({
        id: "",
        name: "",
        pwd: "",
        gender: "",
        email: "",
    });

   
    const handleInputId = (e) => {
        setUserState((prev) => ({
            ...prev,
            id: e,
        }));
    };

    const handleInputName = (e) => {
        setUserState((prev) => ({
            ...prev,
            name: e,
        }));
    };

    const handleInputPw = (e) => {
        setUserState((prev) => ({
            ...prev,
            pwd: e,
        }));
    };

    const handleInputEmail = (e) => {
        setUserState((prev) => ({
            ...prev,
            email: e,
        }));
    };

    const handleClickRadio = (value) => {
        setUserState((prev) => ({
            ...prev,
            gender: value,
        }));
        setGender(value);
    };

    const submitUserInfo = (event) => {
        event.preventDefault();
        console.log(userState);
        if (gender === "") {
            alert("성별을 선택해주세요.");
            return;
        }

        const newUserState = {
            id: rid.current?.value || "",
            name: rname.current?.value || "",
            pwd: rpwd.current?.value || "",
            email: remail.current?.value || "",
            gender: gender,
        };

        console.log("최종 userState", newUserState);
            if (
                (
            newUserState.id.length > 1 &&
            newUserState.email.length > 1 &&
            newUserState.pwd.length > 1 &&
            newUserState.name.length > 1)
            ) {
                axios
                    .post(`${serverURL}/user`, newUserState)
                    .then((res) => {
                        console.log(res);
                        location.replace("/");
                    })
                    .catch((error) => {
                        console.log("error");
                    })
                    .then(() => {
                        console.log("signup post");
                        alert("가입이 완료되었습니다.")
                    });
            } else {
                alert("필수 정보를 모두 입력해주세요");
            }
        }

    return (
        <div class="section" style={{ marginTop: "100px", marginBottom: "200px" }}>
            <form action="" className="signup-form">
                <h1 className="signUp-logo"></h1>
                <div className="rule-sign-up-box">
                    <p className="rule-txt test-style-11">
                        <strong>회원 정의</strong>
                        <p>
                            <span>용어 정의 |</span> 회원, 비회원, 이용자, 게시물, 매장, 제
                            3자
                        </p>
                        <ul>
                            <li>
                                회원 : "회원"이란 회사에 개인정보를 제공하여 회원등록을 한 자,
                                제주완니가 제공하는 "서비스"를 이용하는 사용자
                            </li>
                            <li>
                                비회원 : 회원가입 없이 "회사"가 제공하는 "서비스"를 이용하는 자
                            </li>
                            <li>
                                이용자 : "서비스"를 이용하는 자를 말하며, 회원과 비회원을 모두
                                포함
                            </li>
                            <li>
                                게시물 : "회원"이 서비스를 이용함에 있어 "서비스"상에 게시한
                                부호, 문자, 음성, 음향, 형태의 글, 사진, 동영상 및 각종 파일과
                                링크 들을 의미
                            </li>
                            <li>
                                매장 : 회사가 제공하는 서비스를 이용해 정보를 제공하는 주체를
                                의미 회사의 대리인이나 피고용자로 간주되지 않음
                            </li>
                            <li>
                                제 3자 : "이용자"가 "서비스"를 이용하며 만나는 "매장" 및 또 다른
                                "이용자" 등을 의미
                            </li>
                        </ul>
                        <strong>회원 가입 정책 (일반)</strong>

                        <p>
                            약관 동의 | 이용 약관 동의(필수 동의), 개인정보 수집 이용
                            동의(필수 동의), 이벤트 혜택 및 광고성 정보 수신 동의(필수 동의)
                            가입 양식 작성 | 이메일 계정 등록, 비밀번호 등록, 닉네임 생성
                        </p>
                        <ul>
                            <li>이메일 계정 등록 : 이메일 형식으로 이메일 계정 등록</li>
                            <li>
                                비밀번호 등록 : 숫자, 영문, 특수 문자 8자 ~ 16자 입력, 비밀번호
                                확인 및 불일치 시 회원 가입 불가능
                            </li>
                            <li>닉네임 생성 : 10자 이내의 닉네임 입력</li>
                        </ul>
                        <strong>회원 가입 정책 (소셜)</strong>
                        <ul>
                            <p>
                                외부 API 등록 | 외부 API 소셜 계정 등록 외부 API 소셜 계정 등록
                                : 소셜 등록 가능 계정 - 카카오/ 페이스북 / 네이버
                            </p>
                        </ul>
                    </p>
                </div>
                <Input
                    inputTitle="아이디"
                    type="text"
                    placeholder="아이디"
                    parentFunction={handleInputId}
                    ref={rid}
                ></Input>
                <Input
                    inputTitle="성명"
                    type="text"
                    placeholder="이름을 적어주세요"
                    parentFunction={handleInputName}
                    ref={rname}
                ></Input>
                <Input
                    inputTitle="비밀번호"
                    type="password"
                    placeholder="영문,숫자 포함 8자 이상의 비밀번호"
                    parentFunction={handleInputPw}
                    ref={rpwd}
                ></Input>
                <span className="signup-input-tit">성별</span>
                <div className="gender-checkBox">
                    <div className="jeju-man-icon">
                        <h1 className="ic-man"></h1>
                        <input
                            type="radio"
                            name="gender"
                            id="check-label"
                            value="1"
                            checked={gender === "1"}
                            onChange={() => handleClickRadio("1")}
                        ></input>
                        <div className="radio-txt">남자입니다.</div>
                    </div>
                    <div className="jeju-woman-icon">
                        <h1 className="ic-woman"></h1>
                        <input
                            type="radio"
                            name="gender"
                            id="check-label"
                            value="2"
                            checked={gender === "2"}
                            onChange={() => handleClickRadio("2")}
                        ></input>
                        <div className="radio-txt">여자입니다.</div>
                    </div>
                </div>
                <div className="signup-form-bottom">
                    <Input
                        inputTitle="이메일"
                        type="text"
                        placeholder="이메일"
                        parentFunction={handleInputEmail}
                        ref={remail}
                    ></Input>

                    <div className="section-optional-info" id="signup-tit-optional">
                        <Input
                            inputTitle="전화번호"
                            type="tel"
                            placeholder="전화번호"
                        ></Input>
                    </div>
                </div>
                <input
                    type="submit"
                    className="btn-secondary btn-55"
                    value="회원 가입"
                    id="signUpbtn"
                    onClick={submitUserInfo}
                ></input>
            </form>
        </div>
    );
}

export default signup;