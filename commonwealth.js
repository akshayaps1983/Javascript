CommonWealth=[
    {id:1,country:"India",gold:10,silver:23,bronze:34},
    {id:2,country:"Japan",gold:11,silver:21,bronze:44},
    {id:3,country:"China",gold:18,silver:13,bronze:4},
    {id:4,country:"USA",gold:15,silver:20,bronze:3},
]

// show details of country if there is country named'japan'
// res=CommonWealth.find((item)=>item.country=="Japan")

// find the list of country which have more than 15 golds
// res=CommonWealth.filter(item=>item.gold>15)
// console.log(res)

// find the total number of silver medals
// res=CommonWealth.map(item=>item.silver).reduce((total,item)=>total+item)
// console.log(res)

// sort the list of countries in the gold medals descending
CommonWealth.sort((a,b)=>b.gold-a.gold)
console.log(CommonWealth)