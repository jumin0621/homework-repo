import React, { useState } from "react";

function Profile(props) {
  const [name, setName] = useState("서다미");
  const [status, setStatus] = useState("다하다하 미하미하");
  const [isEdit, setIsEdit] = useState(false);

  const [tempName, setTempName] = useState(name);
  const [tempStatus, setTempStatus] = useState(status);

  const startEdit = () => {
    setTempName(name);
    setTempStatus(status);
    setIsEdit(true);
  };

  const save = () => {
    setName(tempName.trim() ? tempName : name);
    setStatus(tempStatus);
    setIsEdit(false);
  };

  const cancel = () => {
    setTempName(name);
    setTempStatus(status);
    setIsEdit(false);
  };

  const isTooLong = tempStatus.length > 20;

  return (
    <div style={props.cardStyle}>
      <h2 style={{ marginTop: 0 }}>프로필</h2>

      {!isEdit && (
        <>
          <p>이름: {name}</p>
          <p>상태 메시지: {status}</p>
          <button style={props.buttonStyle} onClick={startEdit}>
            편집
          </button>
        </>
      )}

      {isEdit && (
        <div style={{ display: "grid", gap: 10 }}>
          <label>
            이름
            <input
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              style={props.inputStyle}
            />
          </label>

          <label>
            상태 메시지
            <input
              value={tempStatus}
              onChange={(e) => setTempStatus(e.target.value)}
              style={{
                ...props.inputStyle,
                border: `1px solid ${isTooLong ? "red" : "#ccc"}`,
              }}
            />
          </label>

          {isTooLong && (
            <p style={{ color: "red", margin: 0 }}>
              상태 메시지는 20자 이내로 작성해 주세요.
            </p>
          )}

          <div style={{ display: "flex", gap: 8 }}>
            <button style={props.buttonStyle} onClick={save}>
              저장
            </button>
            <button style={props.subButtonStyle} onClick={cancel}>
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
