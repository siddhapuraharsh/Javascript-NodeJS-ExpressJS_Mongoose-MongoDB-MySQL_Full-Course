function sleepIn(weekday, vacation){
  if(vacation==true)
  {
    return true;
  }
  else
  {
    if(weekday==false)
    {
      return true;
    }
  }
  return false;
}

let answer = sleepIn(true, false);
console.log(answer);