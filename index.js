function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}
saturdayFun();


function mondayWork(doSomething = "go to the office") {
  return `This Monday, I will ${doSomething}.`
}
mondayWork();

function wrapAdjective() {
  return function (singleParam = "special") {
    return `You are ${singleParam}!`
  }
}
wrapAdjective("*")(singleParam);