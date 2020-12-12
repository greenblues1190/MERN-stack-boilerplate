# MERN-stack-boilerplate
<p data-ke-size="size16">&nbsp;</p>
<h3 data-ke-size="size23">사용법</h3>
<p><span style="color: #333333;">1. /server/config/dev.js 추가</span></p>
<p>2. npm run dev 으로 <span style="color: #333333;">서버와 클라이언트 실행</span></p>
<p>Landing Page -&gt; http://localhost:3000/</p>
<p>Login Page -&gt; http://localhost:3000/login</p>
<p>Register Page -&gt; http://localhost:3000/register</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<p>https://www.youtube.com/playlist?list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T</p>
<h3 data-ke-size="size23"><b>MERN</b> Stack이란?</h3>
<p><u>M</u>ongoDB : 데이터베이스</p>
<p><u>E</u>xpress : 서버</p>
<p><u>R</u>eact : 프론트</p>
<p><u>N</u>ode.js : 네트워크</p>
<p><span style="color: #333333;">패키지 설치 : npm install &lt;package-name&gt; --save</span></p>

<p>&nbsp;</p>
<h4 data-ke-size="size20"><span style="color: #333333;">기타 Dependencies</span></h4>
<p><span style="color: #333333; background-color: #dddddd;">백엔드</span></p>
<p><span style="color: #333333;">mongoose : MongoDB를 활용하기 위한 모듈</span></p>
<p>nodemon<span style="color: #333333;">&nbsp;</span>: js 파일의 내용이 변경되면 이를 감지하고 서버를 재시작.&nbsp;<span style="color: #333333;">npm install nodemon --save-dev (--save-dev :<span>&nbsp;</span></span><span style="color: #333333;">devDependencies에 추가)</span><span></span></p>
<p>bcrypt : 비밀번호 암호화</p>
<p><span style="letter-spacing: 0px;">jsonwebtoken : Node.js에서 JWT를 생성하기 위한 모듈</span></p>
<p><span style="letter-spacing: 0px;">body-parser : POST req의 파라미터를 쉽게 읽기 위한 parser, <span style="color: #333333;">express에 빌트인되어 따로 임포트할 필요없음. 출처</span><span style="color: #333333;">&nbsp;</span><a href="https://expressjs.com/en/4x/api.html#express-json-middleware">Express Docs</a></span></p>
<p><span style="letter-spacing: 0px;">cookie-parser : 요청된 쿠키를 쉽게 읽기 위한 parser</span><span style="letter-spacing: 0px;"></span></p>
<p><span style="letter-spacing: 0px;"><span style="color: #333333;">concurretly : 다수의 커맨드를 동시에 실행할 수 있도록 하는 라이브러리, 서버와 클라이언트를 같이 실행시키기 위함</span></span></p>
<p>&nbsp;</p>
<p><span style="letter-spacing: 0px; background-color: #dddddd;">프론트엔드</span></p>
<p>create-react-app (npx create-react-app.)</p>
<p>babel : ES6 이상의 최신 문법으로 작성한 자바스크립트 코드를 최신 문법을 지원하지 않는 실행 환경에서 동작하도록 하는 transpiler. <span style="color: #333333;">create-react-app에 포함되어 있음</span><span style="color: #333333;"></span></p>
<p>webpack : <span style="color: #333333;">create-react-app에 포함되어 있음</span></p>
<p>react-router-dom</p>
<p><span>axios : node.js와 브라우저를 위한 http통신 라이브러리</span></p>
<p><span>ant-design : React UI 라이브러리</span></p>
<p><span>redux : state 관리 라이브러리</span></p>
<p><span>react-redux (version &gt; 7.1)</span></p>
<p><span>redux-promise : redux store가 promise를 accept할 수 있게 하기 위한 middleware</span></p>
<p><span>redux-thunk : <span style="color: #333333;">redux store가 function를 accept할 수 있게 하기 위한</span><span style="color: #333333;">&nbsp;middleware</span></span></p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23"><span>에러 로그</span></h3>
<h4 data-ke-size="size20"><span>2020.12.07 깃 푸시 에러</span></h4>
<pre id="code_1607320307924" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>user$ git push -u origin master
react-blog abc$ git push origin master
error: src refspec master does not match any.
error: failed to push some refs to 'https://github.com/greenblues1190/react-blog.git'</code></pre>
<p>git show-ref으로 refs를 확인하니 최근 깃허브 기본 생성 브랜치 이름이 master에서 main으로 바뀜에 따라 ref이 refs/heads/main으로 되어있었다. git push -u origin main을 쓰니 에러없이 푸시되었다.</p>
