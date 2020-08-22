export const canvas=document.getElementById('canvas')
if(!canvas.getContext){
    console.log("browser doesn't support canvas")
}
export const ctx=canvas.getContext('2d')

const circleD=100
var list=[]
for(var i=0;i<circleD;i++){
    list[i]=i
}
ctx.fillStyle='rgb(200,0,0)'
ctx.fillRect(10,10,50,50)

