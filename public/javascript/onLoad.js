function onLoad() {
  const body = document.querySelector("body");
  const childArray = [...body.children];
  let timeArray = [];
  let timeAdjustFlag = false;
  let time = 250;
  let time2 = 250;
  let start = Date.now();
  let index = 0;

  let totalYMeasurement = document.body.offsetHeight - window.innerHeight;

  for (let i = 0; i < childArray.length; i++) {
    let child = childArray[i];
    let lastChild = childArray[i - 1];
    let boundRect = child.getBoundingClientRect();
    let lastBoundRect;


    if (i === 0) {
      timeArray.push(child);
    }

    if (lastChild !== undefined) {
      lastBoundRect = lastChild.getBoundingClientRect();
    
      if (boundRect.top > lastBoundRect.top) {
        timeArray.push(child);
      }
    } else {
    
    }
  }

  let x = setInterval(function () {
    var delta = Date.now() - start; 
    if (
      timeArray.length >= 5 &&
      totalYMeasurement >= 1800 &&
      timeAdjustFlag === false
    ) {
      time = 100;
      timeAdjustFlag = true;
    }
    if (delta - time2 >= 15 || delta - time2 >= 0) {
      if (index < timeArray.length) {
        

        timeArray[index].classList.add("show-ele");
        timeArray[index].classList.remove("hide-ele");
        time2 += time;
     
        if (body.lastElementChild.classList.contains("show-ele")) {
          clearInterval(x);
          for (let v = 0; v < childArray.length; v++) {
            if (childArray[v].classList.contains("show-ele")) {
              setTimeout(function () {
         
                childArray[v].classList.remove("show-ele");
              }, 2000);
            }
          }
        }
      }
      index++;
    }
  }, 30);




}

onLoad();
