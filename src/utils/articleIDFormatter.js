//trim down the ids to make the program work, it interprets each slash as part of the route
//trimming it down to just the last portion allows for the id to work with the '/article/:id/ routes (I had real trouble with this)
//added a check for strings to handle errors
// python accesses last index of array with [-1] whereas js doesn't do that, so i.length - 1 it is

export const articleIDFormatter = (id) => {
    if (typeof id !== 'string') {
        return 'please provide strings'
    }
    let i = id.split('/')
    return i[i.length - 1]
}

    // console.log(articleIDFormatter("aaa/bbb/ccc")) //test line - it works