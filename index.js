function takeANumber(line, name){
  line.push(name);
  var humanLine = (line.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ${humanLine} in line.`;
}

function nowServing(line){
 for (let i = 1; i < line.length; i +=1){
  return line[0];
 }
    
}