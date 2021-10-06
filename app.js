

const getLoveAPI = async (name1,name2) => {
	const response = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${name1}&fname=${name2}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "love-calculator.p.rapidapi.com",
			"x-rapidapi-key": "ddb5878c9emshdcb5450987ab7f7p1d39bcjsn1c1c650172a5"
		}
	});
	if (response.status !== 200) {
	  throw new Error('Veriler alınamıyor!!!');
	}
	const data =  await response.json();
	return data;
  };




let i = 0;
function move(deger = 50) {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= deger) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
const button = document.querySelector('button');
const comment = document.querySelector('.result--comment');
const resultHeader = document.querySelector('.result--header');
const nameOne = document.getElementById('nameOne');
const nameTwo = document.getElementById('nameTwo');
button.addEventListener('click',function(){
	const name1 = nameOne.value;
	const name2 = nameTwo.value;

	getLoveAPI(name1,name2)
	.then((data) => {
		console.log("Resolved : ", data);
		resultHeader.innerHTML =  `${data.sname} ve ${data.fname} isim analizi ;`
		move(data.percentage);
		comment.innerHTML = `" ${data.result} "`;
	  })
	  .catch((err)=>{
	  console.log('Rejected : ', err.message)
	});
	

	
})