var takeNumber=function(katzDeli,name)
{
  if(katzDeli.length!=0)
  {
    katzDeli.append(name);
  }
  else {
    katzDeli.push(name);
  }
  
  conosle.log("Welcome," +name+ ". You are number" +katzDeli.length+ "in line.");
}