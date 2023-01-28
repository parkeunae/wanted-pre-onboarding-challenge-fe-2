# 프리온보딩 프론트엔드 챌린지 2월 사전 과제

원티드 [프리온보딩 프론트엔드 챌린지 2월 - TypeScript](https://www.wanted.co.kr/events/pre_challenge_fe_6) 참여를 위한 사전 과제입니다.

<br>

## 프로젝트 소개

> [챌린지 과제 가이드](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)

### 과제 내용

- Todo 앱을 JSDoc으로 문서화하기
- JSDoc 정적 페이지를 GitHub Page로 배포하기

<br>

### 문서화한 Todo 앱 내용

- 할 일 타입

  | property | 타입     | 필수여부 |
  | -------- | -------- | -------- |
  | 아이디   | number   | required |
  | 내용     | string   | required |
  | 완료여부 | boolean  | required |
  | 카테고리 | string   | required |
  | 태그들   | string[] | optional |

- 기능
  1. CREATE
     - 할 일 추가하기 (내용 없이는 추가할 수 없음)
  2. READ
     - 모든 할 일 조회하기
     - ID를 기반으로 특정 할 일 조회하기
  3. UPDATE
     - ID를 제외한 모든 속성 수정하기
     - 특정 할 일의 특정 태그 수정하기
  4. DELETE
     - ID를 기반으로 특정 할 일 삭제하기
     - 모든 할 일 삭제하기
     - 특정 할 일의 특정 태그 삭제하기
     - 특정 할 일의 모든 태그 삭제하기

<br>

### JSDoc 문서 GitHub Page

- https://parkeunae.github.io/wanted-pre-onboarding-challenge-fe-2/

<br>

### 프로젝트 실행 명령어

```bash
# packages 설치
$ npm install

# JSdoc 생성
$ npm run docs
```

<br>

## Reference

- [use JSDoc](https://jsdoc.app)
- [JSDoc Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)
