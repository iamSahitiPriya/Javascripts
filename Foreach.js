let array=[1,2,3,5];
for(let i=0;i<array.length;i++)
{
  console.log(array[i]);
}
//Foreach usage
array.forEach(printfun);
function printfun(item)
{
  console.log(item);
}
printfun(...array);
