# WTNK. : Workout Together Network Korea.

프론트엔드 온보딩 과제로 진행한 프로젝트 입니다.

배포 URL : [WTNK 바로가기](https://wtnk-git-main-jiyoungs-projects-d3377a8b.vercel.app/)

## 👩🏻‍💻 개발자 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/ziiYOU/"><img src="https://avatars.githubusercontent.com/u/112477905?v=4" width="100px;" alt=""/><br /><sub><b> 방지영 </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## ⚙️ 기술 스택

<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/reactquery-<RGB색상>?style=for-the-badge&logo=reactquery&FF4154logoColor=white">

## 📌 주요 기능

- JWT 인증 서버를 활용한 로그인 및 회원가입 구현
- JSON Placeholder api 를 활용한 게시글 viewer 구현
- JWT 토큰을 이용한 인증/인가 구현 및 리다이렉트 처리
- tailwind 를 이용한 스타일링
- zustand를 통한 client-side 전역 state 관리
- axios, tanstack-query를 통한 외부통신 및 server-side 전역 state 관리

## 📁 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜auth.api.ts
 ┃ ┗ 📜post.api.ts
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜CommunityBox.tsx
 ┃ ┣ 📜Input.tsx
 ┃ ┣ 📜Loading.tsx
 ┃ ┣ 📜LogInForm.tsx
 ┃ ┣ 📜Logo.tsx
 ┃ ┗ 📜PostBox.tsx
 ┣ 📂layout
 ┃ ┣ 📜Header.tsx
 ┃ ┗ 📜Layout.tsx
 ┣ 📂pages
 ┃ ┣ 📜Community.tsx
 ┃ ┣ 📜LogIn.tsx
 ┃ ┣ 📜MainPage.tsx
 ┃ ┣ 📜MyPage.tsx
 ┃ ┗ 📜SignUp.tsx
 ┣ 📂queries
 ┃ ┗ 📜usePostsQueries.ts
 ┣ 📂router
 ┃ ┗ 📜Router.tsx
 ┣ 📂store
 ┃ ┗ 📜useAuthStore.tsx
 ┗ 📂types
   ┗ 📜WTNK.types.ts
```
