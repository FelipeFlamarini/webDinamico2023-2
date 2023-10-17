const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

console.log(months)
console.log(months.length)
months.splice(5, 0, "Teste")
console.log(months)
console.log(months.length)

months.splice(5, 1)
console.log(months)