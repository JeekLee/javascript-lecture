// PI 값 정의
var PI = Math.PI;

// exports를 이용한 함수 정의
// exports.함수명 = function(변수){}
exports.area = function(r){
  return PI * r * r;
};

exports.circumference = function(r){
  return 2* PI * r;
};
