function takeANumber(katzDeli,name)
{
  if(katzDeli.length!=0)
  {
    katzDeli.push(name);
  }
  else {
    katzDeli.push(name);
  }

return "Welcome, " +name+ ". You are number " +katzDeli.length+ " in line.";
}

function nowServing(katzDeli)
{
  if(katzDeli.length==0)
  {
    return "There is nobody waiting to be served!";
  }
  else {
    var name=katzDeli[0];
    katzDeli.shift();
    return "Currently serving "+name+".";
  }
}

function currentLine(katzDeli)
{
    var newArray;
  if(katzDeli.length==0)
  {
    return "The line is currently empty.";
  }
  else {
    for(let i=0;i<katzDeli.length;i++)
    {
    newArray.push(i+1 + "."+ katzDeli[i])
    }
    return "The line is currently: "+newArray+;
  }
}
