let arr=[
    {f:'sahiti',l:'priya',a:20},
    {f:'swathi',l:'tharunya',a:17},
    {f:'srivalli',l:'pothuri',a:18},
    {f:'srivalli',l:'pothuri',a:18},
    {f:'srivalli',l:'pothuri',a:18}
];

let res=arr.map((a)=>a.f+a.l);
console.log(res);
//without map
for(val of arr)
{
  console.log(val.f+val.l);
}
//simple map
let a=[1,2,3,4]
let b=a.map(n=>n*2);//in the map that n is each element from the array and mapped based on the condition.
console.log(b);
//without map
a.forEach(i=>
{
    console.log(i=i*2);
});
