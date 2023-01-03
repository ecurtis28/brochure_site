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

    console.log(child, boundRect);
    if (i === 0) {
      timeArray.push(child);
    }

    if (lastChild !== undefined) {
      lastBoundRect = lastChild.getBoundingClientRect();
      console.log("lastBoundRect", lastBoundRect, "boundRect", boundRect);
      if (boundRect.top > lastBoundRect.top) {
        timeArray.push(child);
      }
    } else {
      console.log("empty");
    }
  }

  let x = setInterval(function () {
    var delta = Date.now() - start; // milliseconds elapsed since start
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
        console.log(timeArray[index], delta);

        timeArray[index].classList.add("show-ele");
        timeArray[index].classList.remove("hide-ele");
        time2 += time;
        console.log(time2);
        console.log(time);
        if (body.lastElementChild.classList.contains("show-ele")) {
          clearInterval(x);
          for (let v = 0; v < childArray.length; v++) {
            if (childArray[v].classList.contains("show-ele")) {
              setTimeout(function () {
                console.log(childArray[v]);
                childArray[v].classList.remove("show-ele");
              }, 2000);
            }
          }
        }
      }
      index++;
    }
  }, 30);

  // create an page loading animation that has each row/segment of the page fade in from top to the bottom (using opacity probably)
  //  so it looks like a wave of loading parts
  //  I have to make it so setInterval is exact in it's timing using Date.now() otherwise it's inconsistent

  // To make it so that the animation looks for smaller elements with the boundingclientrect.top property without choosing overlapped elements
  // You can use a loop that triggers if the difference between lastChild top and current child top is too big, which then looks for elements within current child
  // If the child elements within current child has a smaller difference top compared to lastChild top and it's z index is default (meaning it isn't overlapping any other elements)
  // then it will make that the current child and make the display animation more fluid

  console.log(
    document.documentElement.scrollTop,
    document.documentElement.clientTop,
    window.scrollY
  );
}

onLoad();
