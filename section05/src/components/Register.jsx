import { useState, useRef } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });
    const countRef = useRef(0);
    const inputRef = useRef()

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value
     })
    };

    const onSubmit = () => {
        if(input.name === "") {
            inputRef.current.focus();
        }
    }

    return (
        <div> 
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name} 
                    onChange={onChange} 
                    placeholder={"이름"} 
                />    
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type = "date" 
                />
            </div>
            <div>
                <select value={input.country} name="country" onChange={onChange}>
                        <option value="select">국적을 선택해주세요</option>
                        <option value="kor">한국</option>
                        <option value="usa">미국</option>
                        <option value="eng">영국</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea 
                    value={input.bio} 
                    name="bio"
                    onChange={onChange} 
                    placeholder={"자기소개"} 
                />
                {input.bio}
            </div>
            <button 
                onClick={onSubmit}
            > 
            제출
            </button>
        </div>
    )
}

export default Register;