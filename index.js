function takeANumber(line, name){
  line.push(name);
  var humanLine = (line.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ${humanLine} in line.`;
}

function nowServing(line){
const i = 1;
 while (i <= line.length) {
  line.shift(line[0]);
  return line[0];
  i ++; 
  
 }
    
}