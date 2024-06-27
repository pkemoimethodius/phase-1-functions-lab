const headQuaters=42;

function distanceFromHqInBlocks(numOfBlocks){
 if (numOfBlocks>headQuaters){
  return numOfBlocks-headQuaters;
 }else{
  return headQuaters-numOfBlocks;
 }
}
function distanceFromHqInFeet(numOfFeet){
return distanceFromHqInBlocks(numOfFeet)*264;
}
function distanceTravelledInFeet(startingBlock,endingBlock){
/*if (startingBlock<endingBlock){
  return (endingBlock-startingBlock)*264;
}else{
  return (startingBlock-endingBlock)*264;
}*/
return Math.abs(startingBlock-endingBlock)*264
}

function calculatesFarePrice(startingBlock, endingBlock){

  const distance = distanceTravelledInFeet(startingBlock,endingBlock);

  if (distance<=400){

    return 0;
  }
  else if(distance>400 && distance <= 2000)
    {
      return (distance-400)*0.02;
    }
  else if (distance >2000 && distance <= 2500){

    return 25;
  }else{
    return 'cannot travel that far'
  }


}
