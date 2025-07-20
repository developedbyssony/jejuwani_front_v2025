import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../components/atoms/Input1";
import { Link } from "react-router-dom";

function Login({ loginCallBack, serverURL }) {
    useEffect(() => {
        window.addEventListener("load", function () {
            idtag.current.focus();
            console.log(idtag.current.focus());
        });
    }, []);

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const handleInputId = (e) => {
        setId(e);
    };

    const handleInputPw = (e) => {
        setPwd(e);
    };

    function loginClick(e) {
        console.log(id);
        console.log(pwd);
        console.log("submit 버튼 클릭");
        e.preventDefault();
        if (id === "n_uck") {
            if (pwd == "1324") {
                console.log("로그인 완료입니다!");
                try {
                    let data = { id: id, password: pwd };

                    axios
                        .post(`${serverURL}/auth/login`, JSON.stringify(data), {
                            headers: {
                                "Content-Type": `application/json`,
                            },
                        })
                        .then((res) => {
                            console.log("===registerSuccessfulLoginForJwt===");

                            const token = res.data;
                            console.log("res.data.accessToken : " + token);

                            localStorage.setItem("token", token);
                            localStorage.setItem("authId", id);

                            setupAxiosInterceptors(createJWTToken(token));
                            setupAxiosInterceptors();

                            axios.defaults.headers.common["Authorization"] = "Bearer" + token;
                            props.loginCallBack(true);
                            props.history.push("/");
                        })
                        .catch((ex) => {
                            console.log("login requset fail : " + ex);
                        })
                        .finally(() => {
                            console.log("login request end");
                        });
                } catch (e) {
                    console.log(e);
                }
                localStorage.setItem("token", "token0331");
                localStorage.setItem("authId", "n_uck");
                location.replace("/");
            }
        }
    }
    return (
        <div class="section">
            <div className="login-page">
                <div className="login-top">
                    <h1 className="login-character"></h1>
                    <h1 className="login-logo"></h1>
                </div>
                <form action="post" className="login-box">
                    <div className="login-sec-box">
                        <Input
                            type="text"
                            placeholder="아이디"
                            parentFunction={handleInputId}
                        ></Input>
                        <Input
                            type="password"
                            placeholder="비밀번호"
                            parentFunction={handleInputPw}
                        ></Input>
                    </div>
                    <input
                        type="submit"
                        value="로그인"
                        className="btn-secondary btn-55"
                        onClick={loginClick}
                    ></input>

                    <Link to="/pages/Signup">
                        <a href="" className="btn-primary btn-55" id="signUpBtn">
                            <span>회원가입</span>
                        </a>
                    </Link>

                    <img src="../assets/loginInfo.png" alt="로그인 안내정보" />
                </form>
            </div>
        </div>
    );
}

export default Login;