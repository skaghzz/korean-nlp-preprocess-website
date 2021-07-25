function clickPreprocessType(value, targetUrl) {
  console.log(value, targetUrl);
  const selectTypeInput = document.getElementById("selectType");
  selectTypeInput.value = value;
  document.getElementById("targetUrl").value = targetUrl;
}

function clkBtn() {
  var texts = document.getElementById("inputText").value;
  var targetUrl = document.getElementById("targetUrl").value;
  if(targetUrl == '') {
    return alert('전처리를 선택하세요');
  }
  var data = {
    "texts": texts
  }
  console.log(data);
  $.ajax({
    type: "POST",
    contentType: "application/json",
    dataType: 'JSON',
    url: "https://korean-nlp-preprocess-api.herokuapp.com/api/" + targetUrl, // form을 전송할 실제 파일경로
    data: JSON.stringify(data),
    processData: false,
    cache: false,
    timeout: 600000,
    beforeSend: function () {
      // 전송 전 실행 코드
    },
    success: function (data) {
      // 전송 후 성공 시 실행 코드
      console.log(data);
      document.getElementById('result').value = data.result
    },
    error: function (e) {
      // 전송 후 에러 발생 시 실행 코드
      console.log("ERROR : ", e);
    },
  });
}
