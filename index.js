function takeANumber(line, name){
  line.push(name);
  var humanLine = (line.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ${humanLine} in line.`;
}