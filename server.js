// http 모듈을 가져옵니다
const http = require('http');

// 서버를 생성합니다
const server = http.createServer((req, res) => {
    // 응답 헤더 설정 (200 OK, 콘텐츠 타입은 텍스트)
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // 클라이언트에게 보낼 응답 데이터
    res.end('Hello, Node.js Server!');
});

// 서버를 3000번 포트에서 실행합니다
server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
