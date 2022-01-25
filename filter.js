let a=[1,2,3,4,5,6];
function filter()
{
  let b=[];
  for(let i=0;i<a.length;i++)
  {
    if(a[i]%2==0)
    {
      b.push(a[i])
    }
  }
  console.log(b);
}
filter(...a);
let c=a.filter(a=>a%2==0);
console.log(c);
