arr=[1,2,3,4];
let res=arr.reduce(function(max,curr)
{
  if(curr>max)
  {
      max=curr;
    }
    return max;
},0);
console.log(res);

//without reduce
arr=[1,2,3];
function sum()
{
  let s=0;
  for(let i of arr)
  {
    s=s+i;
  }
  console.log(s);
}
sum(...arr)
