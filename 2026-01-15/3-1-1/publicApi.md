# ✅ 공개 API 응답 분석하기

## 🎯 목표

공개 API의 응답 데이터를 확인하고 **JSON 구조를 분석**할 수 있습니다.

---

## ✅ 요구사항

1. 브라우저에서 **공개 API URL**을 직접 접속해보세요 (예: JSONPlaceholder)
2. 응답 데이터의 **JSON 구조를 분석**하고 각 필드의 의미를 작성하세요
3. **Request vs Response 차이**를 실제 예시와 함께 설명하세요
4. **API 키가 필요한 이유**와 **보안상 주의점**을 정리하세요

---

## 🔗 공개 API URL

### ✅ JSONPlaceholder

기본 주소:  
`https://jsonplaceholder.typicode.com`

| 경로     | 설명        |
| -------- | ----------- |
| `/posts` | 게시글 목록 |
| `/users` | 사용자 목록 |
| `/todos` | 할 일 목록  |

✅ 예시 접속 url

- `https://jsonplaceholder.typicode.com/posts`
- `https://jsonplaceholder.typicode.com/users`
- `https://jsonplaceholder.typicode.com/todos`

---

## 🧾 JSON 응답 예시

```json
{
  "id": 1,
  "title": "첫 번째 글",
  "body": "내용...",
  "userId": 1
}

## ✅ 각 필드 의미

- `id` : 게시글 고유 번호 (idx)
- `title` : 게시글 제목
- `body` : 게시글 내용
- `userId` : 작성자

---

## 🔁 Request vs Response

### ✅ Request (요청)
- **클라이언트 → 서버**
- 예시: `"게시글 목록 주세요"`

### ✅ Response (응답)
- **서버 → 클라이언트**
- 예시: `"여기 요청하신 게시글 목록이요"`

---

## 🔐 API 키 주의사항 (보안)

✅ API Key는 **비밀번호처럼 관리**해야 합니다.

### ✅ 꼭 지켜야 할 것
- ✅ 비밀번호처럼 관리하기
- ✅ GitHub에 절대 업로드 금지
- ✅ 환경변수로 안전하게 저장하기

### ❌ 하면 안 되는 것
- ❌ 코드에 직접 작성 금지
```
