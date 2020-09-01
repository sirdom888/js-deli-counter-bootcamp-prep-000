function takeANumber(line, name){
  line.push(name);
  var humanLine = (line.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ${humanLine} in line.`;
}

function nowServing(line){
let i = 1;
 while (i <= line.length) {
  line.shift(line[0]);
  i ++; 
  return line[0];
 }
 
 if (line.length === 0){
   return "There is nobody waiting to be served!";
 }
    
}